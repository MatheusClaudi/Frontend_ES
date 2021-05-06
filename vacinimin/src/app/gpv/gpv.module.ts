import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpvRoutingModule } from './gpv-routing.module';
import { GpvComponent } from './gpv/gpv.component';
import { SharedModule } from '../shared/shared.module';
import { GpvVaccineListComponent } from './gpv-vaccine-list/gpv-vaccine-list.component';
import { GpvVaccineDataComponent } from './gpv-vaccine-data/gpv-vaccine-data.component';
import { GpvSchedulesComponent } from './gpv-schedules/gpv-schedules.component';
import { GpvSchedulesDataComponent } from './gpv-schedules-data/gpv-schedules-data.component';

@NgModule({
  declarations: [
    GpvComponent,
    GpvVaccineListComponent,
    GpvVaccineDataComponent,
    GpvSchedulesComponent,
    GpvSchedulesDataComponent
  ],
  imports: [
    CommonModule,
    GpvRoutingModule,
    SharedModule
  ]
})
export class GpvModule { }
