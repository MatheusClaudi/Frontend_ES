import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacinaFormErrors } from 'src/app/core/_models/loteVacina/lote-vacina-form-errors';
import { LoteVacinaService } from 'src/app/core/_services/http/vacina/loteVacina.service';

@Component({
  selector: 'app-create-lote',
  templateUrl: './create-lote.component.html',
  styleUrls: ['./create-lote.component.css']
})
export class CreateLoteComponent implements OnInit {

  loteVacinaDataForm: FormGroup;

  loteVacinaFormErrors: LoteVacinaFormErrors = new LoteVacinaFormErrors();

  postoVacinacaoId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _vs: LoteVacinaService) { 
    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
            
      if (!this.postoVacinacaoId) {
        this.goBack();
      }
    })
    this.createForms();
  }

  createForms() {

    this.loteVacinaDataForm = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      quantity: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  ngOnInit(): void {
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  getFieldValue(form: FormGroup, field: string) {
    return form.get(field).value;
  }

  cancelFormSubmition() {
    this.router.navigate(['gpv', 'loteList']);   
  }

  goBack() {
    this.router.navigate(['gpv']);  
  }
  
  createLoteVacina() {
    let values = this.loteVacinaDataForm.value
    console.log(values)

    this._vs.createVacineStation(this.postoVacinacaoId, values).subscribe(
      (created) => {
        
        if(values.quantity != "") {
          console.log("s")
          this._vs.increaseVacineQuantity(this.postoVacinacaoId, created.vaccine.id, values.quantity).subscribe(
            (data) => {
              this.cancelFormSubmition();
            }
          )
        }
        else {
          this.cancelFormSubmition();
        }
      }
    )          
  }

  submitForm() {
    this.createLoteVacina()
  }

}
