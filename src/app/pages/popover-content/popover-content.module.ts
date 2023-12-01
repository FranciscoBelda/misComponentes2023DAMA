import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverContentPageRoutingModule } from './popover-content-routing.module';

import { PopoverContentPage } from './popover-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverContentPageRoutingModule
  ],
  declarations: [PopoverContentPage]
})
export class PopoverContentPageModule {}
