import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlert() {
    const alert =
      await this.alertCtrl.create(
      {
        header: 'Título del Alert',
        subHeader: 'Subtítulo del Alert',
        message: 'Esto es una alerta',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cancelar pulsado');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok pulsado');
            }
          }
        ]
      }
    );
    await alert.present();
  }

  async mostrarNombre() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert con Input',
        subHeader: 'Escribe el nombre',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            placeholder: 'Nombre'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar pulsado.')
            }
          },
          {
            text: 'Ok',
            handler: (data) => {
              console.log('Ok pulsado. Data: '+data);
              this.titulo = data.nombre;
            }
          }
        ]
      }
    );
    await alert.present();
  }
}
