import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverContentPage } from './popover-content.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverContentPageRoutingModule {}
