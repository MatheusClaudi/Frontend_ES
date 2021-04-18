import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { StandartPostListsComponent } from './standart-posts-list/standart-posts-list.component';

@NgModule({
  declarations: [
    StandartPostListsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule
  ]
})

export class StandartModule { };