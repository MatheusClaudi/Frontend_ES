import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacina } from 'src/app/core/_models/loteVacina/LoteVacina';
import { DateService } from 'src/app/core/_services/date/date.service';
import { LoteVacinaService } from 'src/app/core/_services/http/vacina/loteVacina.service';

@Component({
  selector: 'app-lote-vacina-table',
  templateUrl: './lote-vacina-table.component.html',
  styleUrls: ['./lote-vacina-table.component.css']
})
export class LoteVacinaTableComponent implements OnInit {

  page = 1;

  numberOfPages = 0;

  filterForm: FormGroup;

  filterOptions: string = "";

  lotesVacina = new Array<LoteVacina>();  

  postoVacinacaoId;

  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService, private route: ActivatedRoute, private _vs: LoteVacinaService) { 
    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
            
      if (!this.postoVacinacaoId) {
        this.goBack();
      }
    })

    this.createForms();
    this.getVaccineList()
  }

  getVaccineList() {
  
    this._vs.getPageOfVacineFilter(this.postoVacinacaoId, this.page, 3, this.filterOptions).subscribe(
      (data) => {
        console.log(data)
        this.lotesVacina = data.vaccines.rows;
        this.numberOfPages = data.vaccines.pages
      }
    )
  }

  createForms() {
    this.filterForm = this.fb.group({
        name: new FormControl({value: '', disabled: false}, Validators.compose([])),
        stationId: new FormControl({value: '', disabled: false}, Validators.compose([])),
        quantity: new FormControl({value: '', disabled: false}, Validators.compose([])),
    });
  }

  ngOnInit(): void {
  }

  createLoteVacina() {
    this.router.navigate(['admin', 'createLoteVacina'], { queryParams: { idPosto: this.postoVacinacaoId}});  
  }
  editLoteVacina(loteVacina: LoteVacina) {
    this.router.navigate(['admin', 'editLoteVacina'], { queryParams: { idPosto: this.postoVacinacaoId, idLote: loteVacina.id}, state: {obj: loteVacina}});  
  }

  goBack() {
    this.router.navigate(['admin', 'postoVacinacaoTable']);  
  }

  test(event) {
    this.page = event;
    this.getVaccineList()
  }

}