import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridButtonsPageRoutingModule } from './grid-buttons-routing.module';

import { GridButtonsPage } from './grid-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridButtonsPageRoutingModule
  ],
  declarations: [GridButtonsPage]
})
export class GridButtonsPageModule {}
