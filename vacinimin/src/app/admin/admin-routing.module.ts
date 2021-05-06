import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserContentComponent } from './user-content/user-content.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: UserContentComponent, outlet: 'admin'}
  ]},

  { path: 'userList', component: AdminComponent, children: [
    { path: '', component: UserListComponent, outlet: 'admin'}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
