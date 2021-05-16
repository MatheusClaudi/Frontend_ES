import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoFormErrors } from '../agendamento-form-errors';

@Component({
  selector: 'app-create-agendamento',
  templateUrl: './create-agendamento.component.html',
  styleUrls: ['./create-agendamento.component.css']
})
export class CreateAgendamentoComponent implements OnInit {

  agendamentoDataForm: FormGroup;

  agendamentoFormErrors: AgendamentoFormErrors = new AgendamentoFormErrors();

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForms();
  }

  createForms() {

    this.agendamentoDataForm = this.fb.group({
      id: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      
      idCliente: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      dose: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),

      idPosto: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      dataAgendamento: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      idSlotHorario: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      idLoteVacina: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),

      dataAbertura: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      statusAgendamento: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      comentario: new FormControl({value: '', disabled: false}, Validators.compose([])),
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
    this.router.navigate(['admin', 'agendamentoTable']);   
  }

  submitForm() {
  }

}
