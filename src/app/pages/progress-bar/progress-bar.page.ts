import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentaje = 0.5;
  dinamic = Array(5);
  porcentajeDin = this.dinamic.length;
  constructor() { }

  ngOnInit() {
  }

  cambioRango(event: any) {
    this.porcentaje = event.detail.value * 0.01;
  }

  cambioDin(value: number){
    if(value>0){
      this.dinamic.push(Array(1));
    }else {
      this.dinamic.pop();
    }
  }
}
