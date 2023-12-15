import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio01PopoverPage } from './ejercicio01-popover.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio01PopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio01PopoverPageRoutingModule {}
