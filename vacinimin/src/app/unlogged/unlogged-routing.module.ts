import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/password/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/password/reset-password/reset-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnloggedComponent } from './unlogged/unlogged.component';

const routes: Routes = [
  { path: '', component: UnloggedComponent, children: [
    { path: '', component: LoginComponent, outlet: 'unlogged'},
  ]},

  { path: 'login', component: UnloggedComponent, children: [
    { path: '', component: LoginComponent, outlet: 'unlogged'},
  ]},

  { path: 'register', component: UnloggedComponent, children: [
    { path: '', component: RegisterComponent, outlet: 'unlogged'},
  ]},

  { path: 'forgot', component: UnloggedComponent, children: [
    { path: '', component: ForgotPasswordComponent, outlet: 'unlogged'},
  ]},

  { path: 'reset', component: UnloggedComponent, children: [
    { path: '', component: ResetPasswordComponent, outlet: 'unlogged'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnloggedRoutingModule { }
