import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpvComponent } from './gpv/gpv.component';

const routes: Routes = [
  { path: '', component: GpvComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpvRoutingModule { }
