import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinaFormErrors } from '../vacina-form-errors';

@Component({
  selector: 'app-edit-vacina',
  templateUrl: './edit-vacina.component.html',
  styleUrls: ['./edit-vacina.component.css']
})
export class EditVacinaComponent implements OnInit {

  vacinaDataForm: FormGroup;

  vacinaFormErrors: VacinaFormErrors = new VacinaFormErrors();

  vacinaId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {  
    this.route.queryParams.subscribe(params => {
      this.vacinaId = params['id'];
      
      if (!this.vacinaId) {
        this.cancelFormSubmition();
      }
    })

    this.createForms();
  }

  createForms() {

    this.vacinaDataForm = this.fb.group({
      id: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      nome: new FormControl({value: 'ipson', disabled: false}, Validators.compose([Validators.required])),
      criador: new FormControl({value: 'dolor', disabled: false}, Validators.compose([Validators.required])),
      doses: new FormControl({value: '1', disabled: false}, Validators.compose([Validators.required])),
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
