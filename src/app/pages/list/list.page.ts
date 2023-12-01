import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../common/usuarios";
import {DataService} from "../../services/data.service";
import {IonList, ToastController} from "@ionic/angular";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', {static: false}) lista!: IonList;
  usuarios: Usuario[] = [];
  habilitado: boolean = false;
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  private cargarUsuarios() {
    this.dataService.getUsuarios().subscribe(
      {
        next: value => {
          this.usuarios = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
  }

  private async crearToast(message: string){
    const toast = await this.toastCtrl.create(
      {
        message,
        duration: 1500,
        color: "success",
        position: "middle"
      }
    );
    await toast.present();
  }

  favorite(usuario: Usuario) {
    console.log('Añadido a favoritos',usuario);
    this.crearToast('Añadiendo a favoritos a '+usuario.name);
    this.lista.closeSlidingItems();
  }


  async share(usuario: Usuario) {
    console.log(usuario);
    await Share.share({
      title: usuario.name,
      text: usuario.email,
      url: usuario.website,
      dialogTitle: 'Comparte con tus compañeros',
    });

    this.lista.closeSlidingItems();
  }

  call(usuario: Usuario) {
    console.log('Llamando...',usuario);
    this.crearToast('Llamando a '+usuario.name);
    this.lista.closeSlidingItems();
  }

  reordenar(event: any) {
    console.log(event);
    const itemMover =
      this.usuarios.splice(event.detail.from,1)[0];
    this.usuarios.splice(event.detail.to,0,itemMover);
    event.detail.complete();

  }
}
