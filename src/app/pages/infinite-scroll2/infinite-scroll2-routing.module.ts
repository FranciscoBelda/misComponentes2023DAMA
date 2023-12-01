import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScroll2Page } from './infinite-scroll2.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScroll2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteScroll2PageRoutingModule {}
