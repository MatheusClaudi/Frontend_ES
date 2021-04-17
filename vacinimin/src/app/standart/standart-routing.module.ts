import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandartModule } from './standart.module';
import { StandartComponent } from './standart/standart.component';

const routes: Routes = [
  { path: '', component: StandartComponent, children: [
    { path: '', component: FilterComponent, children: [], outlet: "standart"}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
