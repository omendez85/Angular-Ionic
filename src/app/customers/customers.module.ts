import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListImgModule } from '../core/listImg/listimg.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ListImgModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
