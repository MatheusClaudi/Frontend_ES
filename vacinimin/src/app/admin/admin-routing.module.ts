import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgendamentoTableComponent } from './pages/agendamento/agendamento-table/agendamento-table.component';
import { CreateAgendamentoComponent } from './pages/agendamento/create-agendamento/create-agendamento.component';
import { EditAgendamentoComponent } from './pages/agendamento/edit-agendamento/edit-agendamento.component';
import { CreateLoteVacinaComponent } from './pages/loteVacina/create-lote-vacina/create-lote-vacina.component';
import { EditLoteVacinaComponent } from './pages/loteVacina/edit-lote-vacina/edit-lote-vacina.component';
import { LoteVacinaTableComponent } from './pages/loteVacina/lote-vacina-table/lote-vacina-table.component';
import { CreatePostoVacinacaoComponent } from './pages/postoVacinacao/create-posto-vacinacao/create-posto-vacinacao.component';
import { EditPostoVacinacaoComponent } from './pages/postoVacinacao/edit-posto-vacinacao/edit-posto-vacinacao.component';
import { PostoVacinacaoTableComponent } from './pages/postoVacinacao/posto-vacinacao-table/posto-vacinacao-table.component';
import { CreateRegistroVacinacaoComponent } from './pages/registroVacinacao/create-registro-vacinacao/create-registro-vacinacao.component';
import { EditRegistroVacinacaoComponent } from './pages/registroVacinacao/edit-registro-vacinacao/edit-registro-vacinacao.component';
import { RegistroVacinacaoTableComponent } from './pages/registroVacinacao/registro-vacinacao-table/registro-vacinacao-table.component';
import { ControleSlotComponent } from './pages/slots/controle-slot/controle-slot.component';
import { SlotContentComponent } from './pages/slots/slot-content/slot-content.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { UserTableComponent } from './pages/user/user-table/user-table.component';
import { CreateVacinaComponent } from './pages/vacina/create-vacina/create-vacina.component';
import { EditVacinaComponent } from './pages/vacina/edit-vacina/edit-vacina.component';
import { VacinaTableComponent } from './pages/vacina/vacina-table/vacina-table.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: UserTableComponent, outlet: 'admin'}
  ]},

  { path: 'userTable', component: AdminComponent, children: [
    { path: '', component: UserTableComponent, outlet: 'admin'}
  ]},
  { path: 'createUser', component: AdminComponent, children: [
    { path: '', component: CreateUserComponent, outlet: 'admin'}
  ]},
  { path: 'editUser', component: AdminComponent, children: [
    { path: '', component: EditUserComponent, outlet: 'admin'}
  ]},


  { path: 'registroTable', component: AdminComponent, children: [
    { path: '', component: RegistroVacinacaoTableComponent, outlet: 'admin'}
  ]},
  { path: 'createRegistro', component: AdminComponent, children: [
    { path: '', component: CreateRegistroVacinacaoComponent, outlet: 'admin'}
  ]},
  { path: 'editRegistro', component: AdminComponent, children: [
    { path: '', component: EditRegistroVacinacaoComponent, outlet: 'admin'}
  ]},

  
  { path: 'vacinaTable', component: AdminComponent, children: [
    { path: '', component: VacinaTableComponent, outlet: 'admin'}
  ]},
  { path: 'createVacina', component: AdminComponent, children: [
    { path: '', component: CreateVacinaComponent, outlet: 'admin'}
  ]},
  { path: 'editVacina', component: AdminComponent, children: [
    { path: '', component: EditVacinaComponent, outlet: 'admin'}
  ]},


  { path: 'loteVacinaTable', component: AdminComponent, children: [
    { path: '', component: LoteVacinaTableComponent, outlet: 'admin'}
  ]},
  { path: 'createLoteVacina', component: AdminComponent, children: [
    { path: '', component: CreateLoteVacinaComponent, outlet: 'admin'}
  ]},
  { path: 'editLoteVacina', component: AdminComponent, children: [
    { path: '', component: EditLoteVacinaComponent, outlet: 'admin'}
  ]},

  { path: 'agendamentoTable', component: AdminComponent, children: [
    { path: '', component: AgendamentoTableComponent, outlet: 'admin'}
  ]},
  { path: 'createAgendamento', component: AdminComponent, children: [
    { path: '', component: CreateAgendamentoComponent, outlet: 'admin'}
  ]},
  { path: 'editAgendamento', component: AdminComponent, children: [
    { path: '', component: EditAgendamentoComponent, outlet: 'admin'}
  ]},


  { path: 'postoVacinacaoTable', component: AdminComponent, children: [
    { path: '', component: PostoVacinacaoTableComponent, outlet: 'admin'}
  ]},
  { path: 'createPostoVacinacao', component: AdminComponent, children: [
    { path: '', component: CreatePostoVacinacaoComponent, outlet: 'admin'}
  ]},
  { path: 'editPostoVacinacao', component: AdminComponent, children: [
    { path: '', component: EditPostoVacinacaoComponent, outlet: 'admin'}
  ]},
  
  { path: 'editSlotsPosto', component: AdminComponent, children: [
    { path: '', component: ControleSlotComponent, outlet: 'admin'}
  ]},

  { path: 'editSlot', component: AdminComponent, children: [
    { path: '', component: SlotContentComponent, outlet: 'admin'}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
