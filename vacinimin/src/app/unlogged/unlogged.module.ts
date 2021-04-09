import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnloggedRoutingModule } from './unlogged-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { UnloggedComponent } from './unlogged/unlogged.component';


@NgModule({
  declarations: [
    LoginComponent,
    UnloggedComponent
  ],
  imports: [
    CommonModule,
    UnloggedRoutingModule,
    SharedModule
  ]
})
export class UnloggedModule { }
