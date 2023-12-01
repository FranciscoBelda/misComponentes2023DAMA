import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  usuario: {nombre:string; email: string; ciudad:string} =
    {
      nombre: '',
      email: '',
      ciudad: ''
    };
  message = 'Abra el modal y rellene los datos';

  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  onSubmitTemplate(){
    this.modal.dismiss(this.usuario, 'confirm');
  }

  onWillDismiss(event: any){
    if(event.detail.role === 'confirm'){
      this.message = 'Hola '+ event.detail.data.nombre;
    }
  }
}
