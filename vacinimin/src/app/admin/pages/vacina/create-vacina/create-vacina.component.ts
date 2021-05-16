import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacinaFormErrors } from '../vacina-form-errors';

@Component({
  selector: 'app-create-vacina',
  templateUrl: './create-vacina.component.html',
  styleUrls: ['./create-vacina.component.css']
})
export class CreateVacinaComponent implements OnInit {

  vacinaDataForm: FormGroup;

  vacinaFormErrors: VacinaFormErrors = new VacinaFormErrors();

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForms();
  }

  createForms() {

    this.vacinaDataForm = this.fb.group({
      id: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      nome: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      criador: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      doses: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
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
    this.router.navigate(['admin', 'vacinaTable']);  
  }

  submitForm() {
  }

}
