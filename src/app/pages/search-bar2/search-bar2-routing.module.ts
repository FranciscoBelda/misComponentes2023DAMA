import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBar2Page } from './search-bar2.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBar2PageRoutingModule {}
