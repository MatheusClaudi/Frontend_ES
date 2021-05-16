import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroFormErrors } from '../registro-form-errors';

@Component({
  selector: 'app-create-registro-vacinacao',
  templateUrl: './create-registro-vacinacao.component.html',
  styleUrls: ['./create-registro-vacinacao.component.css']
})
export class CreateRegistroVacinacaoComponent implements OnInit {

  registroDataForm: FormGroup;

  registroFormErrors: RegistroFormErrors = new RegistroFormErrors();

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForms();
  }

  createForms() {

    this.registroDataForm = this.fb.group({
      id: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      idAgendamento: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      idLoteVacina: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      hora: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      dose: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
    });
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
    this.router.navigate(['admin', 'registroTable']);  
  }

  submitForm() {
  }

}
