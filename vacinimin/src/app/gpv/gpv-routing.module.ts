import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpvComponent } from './gpv/gpv.component';
import { CreateLoteComponent } from './pages/loteVacina/create-lote/create-lote.component';
import { EditLoteComponent } from './pages/loteVacina/edit-lote/edit-lote.component';
import { LoteListComponent } from './pages/loteVacina/lote-list/lote-list.component';
import { ControleAgendamentoComponent } from './pages/posto/agendamento/controle-agendamento/controle-agendamento.component';
import { ControlePostoComponent } from './pages/posto/controle-posto/controle-posto.component';
import { ControleSlotComponent } from './pages/posto/controle-slot/controle-slot.component';

const routes: Routes = [
  { path: '', component: GpvComponent, children: [
    { path: '', component: ControlePostoComponent, outlet: 'gpv'},
  ]},

  { path: 'controlePosto', component: GpvComponent, children: [
    { path: '', component: ControlePostoComponent, outlet: 'gpv'},
  ]},

  { path: 'controleSlot', component: GpvComponent, children: [
    { path: '', component: ControleSlotComponent, outlet: 'gpv'},
  ]},

  { path: 'loteList', component: GpvComponent, children: [
    { path: '', component: LoteListComponent, outlet: 'gpv'},
  ]},

  { path: 'createLote', component: GpvComponent, children: [
    { path: '', component: CreateLoteComponent, outlet: 'gpv'},
  ]},

  { path: 'editLote', component: GpvComponent, children: [
    { path: '', component: EditLoteComponent, outlet: 'gpv'},
  ]},

  { path: 'slot', component: GpvComponent, children: [
    { path: '', component: ControleAgendamentoComponent, outlet: 'gpv'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpvRoutingModule { }
