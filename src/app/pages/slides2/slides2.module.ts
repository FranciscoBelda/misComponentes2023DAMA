import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slides2PageRoutingModule } from './slides2-routing.module';

import { Slides2Page } from './slides2.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Slides2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Slides2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Slides2PageModule {}
