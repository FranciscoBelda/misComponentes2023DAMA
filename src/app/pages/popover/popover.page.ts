import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {PopoverContentPage} from "../popover-content/popover-content.page";

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  message = '';
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(event: MouseEvent) {
    const popover = await this.popoverCtrl.create(
      {
        component: PopoverContentPage,
        event: event,
        side: "bottom",
        alignment: 'center',
        arrow: false,
        mode: "ios",
        animated: true
      }
    );
    await popover.present();

    const result = await popover.onDidDismiss();
    if(result.data){
      this.message = 'Popover cerrado con info: '+result.data.misDatos+', '+result.data.persona.nombre;
    }
  }
}
