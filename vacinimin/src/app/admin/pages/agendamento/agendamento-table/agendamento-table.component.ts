import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/core/_models/agendamento/Agendamento';
import { StatusAgendamento } from 'src/app/core/_models/agendamento/StatusAgendamento';
import { DateService } from 'src/app/core/_services/date/date.service';

@Component({
  selector: 'app-agendamento-table',
  templateUrl: './agendamento-table.component.html',
  styleUrls: ['./agendamento-table.component.css']
})
export class AgendamentoTableComponent implements OnInit {

  page = 0;

  agendamentos = new Array();  

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService) { 
    this.createForms();
 
    let agendamento = new Agendamento();
    agendamento.Agendamento(0, 0, 1, 0, new Date(), 0, 0, new Date(), StatusAgendamento.Ativo, "comentarto sds d cjicb odfcm sojv discm dsidsjcisj");
   

    let agendamento2 = new Agendamento();
    agendamento2.Agendamento(0, 0, 1, 0, new Date(), 0, 0, new Date(), StatusAgendamento.Ativo, "comentarto sds d cjicb odfcm sojv discm dsidsjcisj");

    let agendamento3 = new Agendamento();
    agendamento3.Agendamento(0, 0, 1, 0, new Date(), 0, 0, new Date(), StatusAgendamento.Ativo, "comentarto sds d cjicb odfcm sojv discm dsidsjcisj");

    let agendamento4 = new Agendamento();
    agendamento4.Agendamento(0, 0, 1, 0, new Date(), 0, 0, new Date(), StatusAgendamento.Ativo, "comentarto sds d cjicb odfcm sojv discm dsidsjcisj");

    let agendamento5 = new Agendamento();
    agendamento5.Agendamento(0, 0, 1, 0, new Date(), 0, 0, new Date(), StatusAgendamento.Ativo, "comentarto sds d cjicb odfcm sojv discm dsidsjcisj");

    this.agendamentos.push(agendamento);
    this.agendamentos.push(agendamento2);
    this.agendamentos.push(agendamento3);
    this.agendamentos.push(agendamento4);
    this.agendamentos.push(agendamento5);
   }

  createForms() {
  this.filterForm = this.fb.group({
      idFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idClienteFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idPostoFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idSlotFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      dataAgendamentoFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      statusFilter: new FormControl({value: 'Ativo', disabled: false}, Validators.compose([])),
  });
  }

  ngOnInit(): void {
  }

  createAgendamento() {
    this.router.navigate(['admin', 'createAgendamento']);  
  }
  editAgendamento(agendamento: Agendamento) {
    this.router.navigate(['admin', 'editAgendamento'], { queryParams: { id: agendamento.id } });  
  }


  test() {
    console.log("teste")
  }

}