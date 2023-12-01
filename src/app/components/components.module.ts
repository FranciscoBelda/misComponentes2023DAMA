import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "./menu/menu.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ]
})
export class ComponentsModule { }
