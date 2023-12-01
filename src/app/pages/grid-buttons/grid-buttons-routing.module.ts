import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridButtonsPage } from './grid-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: GridButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridButtonsPageRoutingModule {}
