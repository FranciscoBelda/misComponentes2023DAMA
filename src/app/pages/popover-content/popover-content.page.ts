import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.page.html',
  styleUrls: ['./popover-content.page.scss'],
})
export class PopoverContentPage implements OnInit {
  items: any[] = Array(40);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  onClick(valor: number) {
    this.popoverCtrl.dismiss(
      {
        misDatos: valor,
        persona:{
          nombre: 'Pepe',
          edad: 22
        }
      }
    )
  }
}
