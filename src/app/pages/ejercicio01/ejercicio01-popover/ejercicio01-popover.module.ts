import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio01PopoverPageRoutingModule } from './ejercicio01-popover-routing.module';

import { Ejercicio01PopoverPage } from './ejercicio01-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio01PopoverPageRoutingModule
  ],
  declarations: [Ejercicio01PopoverPage]
})
export class Ejercicio01PopoverPageModule {}
