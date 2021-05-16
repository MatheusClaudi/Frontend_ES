import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserTableComponent } from './pages/user/user-table/user-table.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { RegistroVacinacaoTableComponent } from './pages/registroVacinacao/registro-vacinacao-table/registro-vacinacao-table.component';
import { EditRegistroVacinacaoComponent } from './pages/registroVacinacao/edit-registro-vacinacao/edit-registro-vacinacao.component';
import { CreateRegistroVacinacaoComponent } from './pages/registroVacinacao/create-registro-vacinacao/create-registro-vacinacao.component';
import { VacinaTableComponent } from './pages/vacina/vacina-table/vacina-table.component';
import { CreateVacinaComponent } from './pages/vacina/create-vacina/create-vacina.component';
import { EditVacinaComponent } from './pages/vacina/edit-vacina/edit-vacina.component';
import { CreateLoteVacinaComponent } from './pages/loteVacina/create-lote-vacina/create-lote-vacina.component';
import { EditLoteVacinaComponent } from './pages/loteVacina/edit-lote-vacina/edit-lote-vacina.component';
import { LoteVacinaTableComponent } from './pages/loteVacina/lote-vacina-table/lote-vacina-table.component';
import { AgendamentoTableComponent } from './pages/agendamento/agendamento-table/agendamento-table.component';
import { CreateAgendamentoComponent } from './pages/agendamento/create-agendamento/create-agendamento.component';
import { EditAgendamentoComponent } from './pages/agendamento/edit-agendamento/edit-agendamento.component';
import { PostoVacinacaoTableComponent } from './pages/postoVacinacao/posto-vacinacao-table/posto-vacinacao-table.component';
import { CreatePostoVacinacaoComponent } from './pages/postoVacinacao/create-posto-vacinacao/create-posto-vacinacao.component';
import { EditPostoVacinacaoComponent } from './pages/postoVacinacao/edit-posto-vacinacao/edit-posto-vacinacao.component';
import { ControleSlotComponent } from './pages/slots/controle-slot/controle-slot.component';
import { SlotContentComponent } from './pages/slots/slot-content/slot-content.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserTableComponent,
    EditUserComponent,
    CreateUserComponent,
    RegistroVacinacaoTableComponent,
    EditRegistroVacinacaoComponent,
    CreateRegistroVacinacaoComponent,
    VacinaTableComponent,
    CreateVacinaComponent,
    EditVacinaComponent,
    CreateLoteVacinaComponent,
    EditLoteVacinaComponent,
    LoteVacinaTableComponent,
    AgendamentoTableComponent,
    CreateAgendamentoComponent,
    EditAgendamentoComponent,
    PostoVacinacaoTableComponent,
    CreatePostoVacinacaoComponent,
    EditPostoVacinacaoComponent,
    ControleSlotComponent,
    SlotContentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
