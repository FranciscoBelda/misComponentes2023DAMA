import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slides2Page } from './slides2.page';

const routes: Routes = [
  {
    path: '',
    component: Slides2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slides2PageRoutingModule {}
