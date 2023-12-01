import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {Usuario} from "../common/usuarios";
import {environment} from "../../environments/environment";
import {ApiPelicula} from "../common/peliculas";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getComponentes(): Observable<Componente[]>{
    return this.http.get<Componente[]>("/assets/data/menu.json");
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(
      "https://jsonplaceholder.typicode.com/users");
  }

  loadMovies(page: number): Observable<ApiPelicula>{
    return this.http.get<ApiPelicula>(
      `${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }
}
