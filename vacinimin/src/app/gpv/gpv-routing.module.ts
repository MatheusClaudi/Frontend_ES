import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpvSchedulesDataComponent } from './gpv-schedules-data/gpv-schedules-data.component';
import { GpvSchedulesComponent } from './gpv-schedules/gpv-schedules.component';
import { GpvVaccineDataComponent } from './gpv-vaccine-data/gpv-vaccine-data.component';
import { GpvVaccineListComponent } from './gpv-vaccine-list/gpv-vaccine-list.component';
import { GpvComponent } from './gpv/gpv.component';

const routes: Routes = [
  { path: '', component: GpvComponent, children: [] },
  { path: 'vaccines', component: GpvVaccineListComponent, children: []},
  //colocar id da vacina
  { path: 'vaccines/1', component: GpvVaccineDataComponent, children: []},
  { path: 'schedules', component: GpvSchedulesComponent, children: []},
  //colocar id de agendamento 
  { path: 'schedules/1', component: GpvSchedulesDataComponent, children: []},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpvRoutingModule { }
