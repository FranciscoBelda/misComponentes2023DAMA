import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {Usuario} from "../common/usuarios";
import {environment} from "../../environments/environment";
import {ApiPelicula} from "../common/peliculas";
import {Post} from "../common/Post";
import {Album} from "../common/Album";
import {InfoResultRandomUsers} from "../common/randomUser";

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
  loadPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts');
  }
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums');
  }
  getUsers(): Observable<InfoResultRandomUsers>{
    return this.http.get<InfoResultRandomUsers>(
      'https://randomuser.me/api/?results=100&seed=Progresa');
  }
}
