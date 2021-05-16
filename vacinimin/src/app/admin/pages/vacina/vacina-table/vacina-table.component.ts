import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vacina } from 'src/app/core/_models/vacina/vacina';
import { DateService } from 'src/app/core/_services/date/date.service';

@Component({
  selector: 'app-vacina-table',
  templateUrl: './vacina-table.component.html',
  styleUrls: ['./vacina-table.component.css']
})
export class VacinaTableComponent implements OnInit {

  page = 0;

  vacinas = new Array();  

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService ) { 
    this.createForms();
 

    let vacina = new Vacina();
    vacina.Vacina(0, "ipsun", "dolor", 1);

    let vacina2 = new Vacina();
    vacina2.Vacina(0, "ipsun", "dolor", 1);

    let vacina3 = new Vacina();
    vacina3.Vacina(0, "ipsun", "dolor", 1);

    let vacina4 = new Vacina();
    vacina4.Vacina(0, "ipsun", "dolor", 1);

    let vacina5 = new Vacina();
    vacina5.Vacina(0, "ipsun", "dolor", 1);

    this.vacinas.push(vacina);
    this.vacinas.push(vacina2);
    this.vacinas.push(vacina3);
    this.vacinas.push(vacina4);
    this.vacinas.push(vacina5);
   }

  createForms() {
  this.filterForm = this.fb.group({
      idFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      nomeFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      criadorFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      doseFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
  });
  }

  ngOnInit(): void {
  }

  createVacina() {
    this.router.navigate(['admin', 'createVacina']);  
  }
  editVacina(vacina: Vacina) {
    this.router.navigate(['admin', 'editVacina'], { queryParams: { id: vacina.id } });  
  }


  test() {
    console.log("teste")
  }

}
