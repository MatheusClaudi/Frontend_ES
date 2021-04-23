import { ClientScheduleComponent } from './client-schedule/client-schedule.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { StandartComponent } from './standart/standart.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StandartComponent,
    ClientScheduleComponent

  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule
  ],
  exports : [
    ClientScheduleComponent
  ]
})
export class StandartModule { }
