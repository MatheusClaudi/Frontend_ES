import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandartPostListsComponent } from './standart-posts-list/standart-posts-list.component';

const routes: Routes = [
  { path: 'posts_list', component: StandartPostListsComponent, children: [
    { path: '', component: FilterComponent, children: [], outlet: "standart"}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
