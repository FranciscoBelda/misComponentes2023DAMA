import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio01Page } from './ejercicio01.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio01PageRoutingModule {}
