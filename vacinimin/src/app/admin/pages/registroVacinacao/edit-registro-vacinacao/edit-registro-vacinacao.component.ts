import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroFormErrors } from '../registro-form-errors';

@Component({
  selector: 'app-edit-registro-vacinacao',
  templateUrl: './edit-registro-vacinacao.component.html',
  styleUrls: ['./edit-registro-vacinacao.component.css']
})
export class EditRegistroVacinacaoComponent implements OnInit {

  registroDataForm: FormGroup;

  registroFormErrors: RegistroFormErrors = new RegistroFormErrors();

  registroId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.registroId = params['id'];
      
      if (!this.registroId) {
        this.cancelFormSubmition();
      }
  });
    this.createForms();
  }

  createForms() {

    this.registroDataForm = this.fb.group({
      id: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      idAgendamento: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      idLoteVacina: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      hora: new FormControl({value: '14:25', disabled: false}, Validators.compose([Validators.required])),
      dose: new FormControl({value: '1', disabled: false}, Validators.compose([Validators.required])),
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
