import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandartPostListsComponent } from './standart-posts-list/standart-posts-list.component';
import { StantardtPostDataComponent } from './stantardt-post-data/stantardt-post-data.component';
import { StandartSchedulesComponent } from './standart-schedules/standart-schedules.component';

const routes: Routes = [
  { path: 'posts', component: StandartPostListsComponent, children: [
    { path: '', component: FilterComponent, children: [], outlet: "standart"}
  ]},
  // colocar id variável
  { path: 'posts/1', component: StantardtPostDataComponent, children: []},
  { path: 'schedules', component: StandartSchedulesComponent, children: []},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
