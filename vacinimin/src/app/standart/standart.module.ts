import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { StandartComponent } from './standart/standart.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StandartComponent,
  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule
  ]
})
export class StandartModule { }
