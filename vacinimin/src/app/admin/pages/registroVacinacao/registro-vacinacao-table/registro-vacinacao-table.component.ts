import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroVacinacao } from 'src/app/core/_models/registroVacinacao/RegistroVacinacao';
import { DateService } from 'src/app/core/_services/date/date.service';

@Component({
  selector: 'app-registro-vacinacao-table',
  templateUrl: './registro-vacinacao-table.component.html',
  styleUrls: ['./registro-vacinacao-table.component.css']
})
export class RegistroVacinacaoTableComponent implements OnInit {


  page = 0;

  registros = new Array();  

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService ) { 
    this.createForms();
 

    let registro = new RegistroVacinacao();
    registro.RegistroVacinacao(0, 0, 0, new Date(), 1);

    let registro2 = new RegistroVacinacao();
    registro2.RegistroVacinacao(0, 0, 0, new Date(), 1);

    let registro3 = new RegistroVacinacao();
    registro3.RegistroVacinacao(0, 0, 0, new Date(), 1);

    let registro4 = new RegistroVacinacao();
    registro4.RegistroVacinacao(0, 0, 0, new Date(), 1);

    let registro5 = new RegistroVacinacao();
    registro5.RegistroVacinacao(0, 0, 0, new Date(), 1);

    this.registros.push(registro);
    this.registros.push(registro2);
    this.registros.push(registro3);
    this.registros.push(registro4);
    this.registros.push(registro5);
   }

  createForms() {
  this.filterForm = this.fb.group({
      idFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idAgendamentoFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idLoteVacinaFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      horaFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      doseFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
  });
  }

  ngOnInit(): void {
  }

  createRegistro() {
    this.router.navigate(['admin', 'createRegistro']);  
  }
  editRegistro(registro: RegistroVacinacao) {
    this.router.navigate(['admin', 'editRegistro'], { queryParams: { id: registro.id } });  
  }


  test() {
    console.log("teste")
  }

}
