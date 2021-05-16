import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacinaFormErrors } from 'src/app/core/_models/loteVacina/lote-vacina-form-errors';
import { LoteVacina } from 'src/app/core/_models/loteVacina/LoteVacina';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { LoteVacinaService } from 'src/app/core/_services/http/vacina/loteVacina.service';

@Component({
  selector: 'app-edit-lote',
  templateUrl: './edit-lote.component.html',
  styleUrls: ['./edit-lote.component.css']
})
export class EditLoteComponent implements OnInit {

  loteVacinaDataForm: FormGroup;

  agendamentoDataForm: FormGroup;

  loteVacinaFormErrors: LoteVacinaFormErrors = new LoteVacinaFormErrors();

  loteVacinaId;

  postoVacinacaoId;

  loteVacina: LoteVacina;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _vs: LoteVacinaService, private _us: UserService) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
      this.loteVacinaId = params['idLote'];
      
      if (!this.loteVacinaId || !this.postoVacinacaoId) {
        this.cancelFormSubmition();
      }
      else {
        this.loteVacina = this.router.getCurrentNavigation().extras.state.obj
        this.createForms();
      }
    })
    
  }

  createForms() {

    this.loteVacinaDataForm = this.fb.group({
      id: new FormControl({value: this.loteVacina.id, disabled: "true"}, Validators.compose([Validators.required])),
      stationId: new FormControl({value: this.loteVacina.stationId, disabled: "true"}, Validators.compose([Validators.required])),
      name: new FormControl(this.loteVacina.name, Validators.compose([Validators.required])),
      quantity: new FormControl(this.loteVacina.quantity, Validators.compose([Validators.required])),
    })

    this.agendamentoDataForm = this.fb.group({
      idUsuario:  new FormControl('', Validators.compose([Validators.required])),
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

  submitForm() {

    let name = this.getFieldValue(this.loteVacinaDataForm, 'name');
    let quantity = this.getFieldValue(this.loteVacinaDataForm, 'quantity');

    if (name != this.loteVacina.name) {
      this._vs.editVacineName(this.postoVacinacaoId, this.loteVacinaId, name).subscribe(
        (data) => {
         this.cancelFormSubmition()
        }
      )
    }
  
    if (quantity > this.loteVacina.quantity) {
      this._vs.increaseVacineQuantity(this.postoVacinacaoId, this.loteVacinaId, quantity - this.loteVacina.quantity).subscribe(
        () => {
          this.cancelFormSubmition()
        }
      )
    }
    
  }

}
