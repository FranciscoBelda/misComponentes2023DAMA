import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBarPage } from './search-bar.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBarPageRoutingModule {}
