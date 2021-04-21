import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandartPostListsComponent } from './standart-posts-list/standart-posts-list.component';
import { StantardtPostDataComponent } from './stantardt-post-data/stantardt-post-data.component';
import { StandartSchedulesComponent } from './standart-schedules/standart-schedules.component';
import { StandartScedulesDataComponent } from './standart-scedules-data/standart-scedules-data.component';

const routes: Routes = [
  { path: 'posts', component: StandartPostListsComponent, children: [
    { path: '', component: FilterComponent, children: [], outlet: "standart"}
  ]},
  // colocar id de acordo com o posto
  { path: 'posts/1', component: StantardtPostDataComponent, children: []},
  { path: 'schedules', component: StandartSchedulesComponent, children: []},
  //colocar id de acordo com o agendamento
  { path: 'schedules/1', component: StandartScedulesDataComponent, children: []},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
