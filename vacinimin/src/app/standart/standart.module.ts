import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { StandartComponent } from './standart/standart.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    StandartComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule
  ]
})

export class StandartModule { };