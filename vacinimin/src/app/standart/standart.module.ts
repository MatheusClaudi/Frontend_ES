import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { StandartComponent } from './standart/standart.component';
import { SharedModule } from '../shared/shared.module';
import { DadosPessoaisComponent } from './pages/user/dados-pessoais/dados-pessoais.component';
import { AgendamentoComponent } from './pages/agendamentos/agendamento/agendamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandartPostListsComponent } from './pages/posto/standart-posts-list/standart-posts-list.component';
import { StantardtPostDataComponent } from './pages/posto/stantardt-post-data/stantardt-post-data.component';


@NgModule({
  declarations: [
    StandartComponent,
    DadosPessoaisComponent,
    AgendamentoComponent,
    StandartPostListsComponent,
    StantardtPostDataComponent,

  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StandartModule { }
