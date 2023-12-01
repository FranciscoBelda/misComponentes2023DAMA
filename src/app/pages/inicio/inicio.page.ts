import { Component, OnInit } from '@angular/core';
import {Componente} from "../../common/interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.dataService.getComponentes().subscribe({
      next: (data: Componente[]) => {
        this.componentes = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }
}
