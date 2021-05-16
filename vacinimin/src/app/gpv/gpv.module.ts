import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpvRoutingModule } from './gpv-routing.module';
import { GpvComponent } from './gpv/gpv.component';
import { SharedModule } from '../shared/shared.module';
import { ControleSlotComponent } from './pages/posto/controle-slot/controle-slot.component';
import { ControlePostoComponent } from './pages/posto/controle-posto/controle-posto.component';
import { LoteListComponent } from './pages/loteVacina/lote-list/lote-list.component';
import { ControleAgendamentoComponent } from './pages/posto/agendamento/controle-agendamento/controle-agendamento.component';
import { CreateLoteComponent } from './pages/loteVacina/create-lote/create-lote.component';
import { EditLoteComponent } from './pages/loteVacina/edit-lote/edit-lote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GpvComponent,
    ControleSlotComponent,
    ControlePostoComponent,
    LoteListComponent,
    ControleAgendamentoComponent,
    CreateLoteComponent,
    EditLoteComponent
  ],
  imports: [
    CommonModule,
    GpvRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GpvModule { }
