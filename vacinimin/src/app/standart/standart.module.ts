import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { StandartPostListsComponent } from './standart-posts-list/standart-posts-list.component';
import { StantardtPostDataComponent } from './stantardt-post-data/stantardt-post-data.component';
import { StandartSchedulesComponent } from './standart-schedules/standart-schedules.component';

@NgModule({
  declarations: [
    StandartPostListsComponent,
    FilterComponent,
    StantardtPostDataComponent,
    StandartSchedulesComponent
  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule
  ]
})

export class StandartModule { };