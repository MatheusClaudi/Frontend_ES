import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UnloggedComponent } from './unlogged/unlogged.component';

const routes: Routes = [
  { path: '', component: UnloggedComponent,
  children: [
    { path: '', component: LoginComponent, outlet: 'unlogged'},
    { path: 'login', component: LoginComponent, outlet: 'unlogged'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnloggedRoutingModule { }
