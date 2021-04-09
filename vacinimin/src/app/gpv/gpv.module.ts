import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpvRoutingModule } from './gpv-routing.module';
import { GpvComponent } from './gpv/gpv.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GpvComponent
  ],
  imports: [
    CommonModule,
    GpvRoutingModule,
    SharedModule
  ]
})
export class GpvModule { }
