import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListImgComponent } from './listimg.component';

const routes: Routes = [
  {
    path: '',
    component: ListImgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListImgRoutingModule { }
