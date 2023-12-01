import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScroll2PageRoutingModule } from './infinite-scroll2-routing.module';

import { InfiniteScroll2Page } from './infinite-scroll2.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfiniteScroll2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [InfiniteScroll2Page]
})
export class InfiniteScroll2PageModule {}
