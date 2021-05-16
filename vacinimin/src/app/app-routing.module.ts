import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { Role } from './core/_models/user/Role';
import { GpvModule } from './gpv/gpv.module';
import { StandartModule } from './standart/standart.module';
import { UnloggedModule } from './unlogged/unlogged.module';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { 
    path: 'admin', 
    loadChildren: () => AdminModule,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  { 
    path: 'standart', 
    loadChildren: () => StandartModule,
    canActivate: [AuthGuard],
    data: { roles: [Role.Standart, Role.GPV, Role.Admin] }
  },
  { 
    path: 'gpv', 
    loadChildren: () => GpvModule,
    //canActivate: [AuthGuard],
    //data: { roles: [Role.GPV] }
  },
  { path: '', loadChildren: () => UnloggedModule  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
