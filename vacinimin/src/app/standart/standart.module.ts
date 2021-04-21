import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StandartPostListsComponent } from './standart-posts-list/standart-posts-list.component';
import { StantardtPostDataComponent } from './stantardt-post-data/stantardt-post-data.component';
import { StandartSchedulesComponent } from './standart-schedules/standart-schedules.component';
import { StandartSchedulesDataComponent } from './standart-schedules-data/standart-schedules-data.component';

@NgModule({
  declarations: [
    StandartPostListsComponent,
    StantardtPostDataComponent,
    StandartSchedulesComponent,
    StandartSchedulesDataComponent

  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule
  ]
})

export class StandartModule { };