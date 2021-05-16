import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendamentoFormErrors } from '../agendamento-form-errors';

@Component({
  selector: 'app-edit-agendamento',
  templateUrl: './edit-agendamento.component.html',
  styleUrls: ['./edit-agendamento.component.css']
})
export class EditAgendamentoComponent implements OnInit {

  agendamentoDataForm: FormGroup;

  agendamentoFormErrors: AgendamentoFormErrors = new AgendamentoFormErrors();

  agendamentoId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.agendamentoId = params['id'];
      
      if (!this.agendamentoId) {
        this.cancelFormSubmition();
      }
    })

    this.createForms();
  }

  createForms() {

    this.agendamentoDataForm = this.fb.group({
      id: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      
      idCliente: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      dose: new FormControl({value: '1', disabled: false}, Validators.compose([Validators.required])),

      idPosto: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      dataAgendamento: new FormControl({value: '00/00/0000', disabled: false}, Validators.compose([Validators.required])),
      idSlotHorario: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),
      idLoteVacina: new FormControl({value: '0', disabled: false}, Validators.compose([Validators.required])),

      dataAbertura: new FormControl({value: '00/00/0000 - 00:00', disabled: false}, Validators.compose([Validators.required])),
      statusAgendamento: new FormControl({value: 'Ativo', disabled: false}, Validators.compose([Validators.required])),
      comentario: new FormControl({value: 'comentarto sds d cjicb odfcm sojv discm dsidsjcisj', disabled: false}, Validators.compose([])),
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
