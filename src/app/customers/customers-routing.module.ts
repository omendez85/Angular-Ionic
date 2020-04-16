import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { Form1Component } from './component/form1/form1.component';


const routes: Routes = [
  {
    path: 'form1',
    component: Form1Component
  },
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: '**',
    component: Form1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
