import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormErrors } from 'src/app/core/_models/user/user-form-errors';
import { User } from 'src/app/core/_models/user/User';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { LocalVariable } from 'src/app/core/_services/local-storage/local-variables';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  user: User;


  secondRegistro: any;
  firstRegistro: any;
  agendamentoUser: any;

  userDataForm: FormGroup;

  userFormErrors: UserFormErrors = new UserFormErrors();


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private _us: UserService, private _auth_service: AuthenticationService) { 
    this.route.queryParams.subscribe(params => {
      let userId = this._auth_service.getLocalVariable(LocalVariable.UserId)
      
      this.loadUser(userId);
  });

  }

  loadUser(id) {
    this._us.getUserById(id).subscribe(
      (data) => {
        this.user = data.user;
        console.log(this.user)
        this.createForms();
        this.configRegistros();
      },
      (err) => {
      }
    )
  }

  createForms() {

    this.userDataForm = this.fb.group({
      nome: new FormControl({value: this.user.name, disabled: false}, Validators.compose([Validators.required])),
      email: new FormControl({value: this.user.email, disabled: true}, Validators.compose([Validators.required])),
      cpf: new FormControl({value: this.user.cpf, disabled: true}, Validators.compose([Validators.required])),     
    });
  }

  configRegistros() {

    let idSF = this.user.firstSlotId;
    let nameF = this.user.firstVaccine;
    let dateF = this.user.firstVaccineDate;

    let idSS = this.user.secondSlotId;
    let nameS = this.user.secondVaccine;
    let dateS = this.user.secondVaccineDate;

    if (idSF) {
      if (nameF && dateF ) {
        this.firstRegistro = {slotId: idSF, name: nameF, date: dateF };
      }
      else {
        this.agendamentoUser = {slotId: idSF, n: 1}
      }
    }

    if (idSS) {
      if (nameS && dateS ) {
        this.secondRegistro = {slotId: idSS, name: nameS, date: dateS };
      }
      else {
        this.agendamentoUser = {slotId: idSS, n: 2}
      }
    }
  }

  ngOnInit(): void {
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  getFieldValue(form: FormGroup, field: string) {
    return form.get(field).value;
  }

  cancelarAgendamento() {
    this._us.removeOpenAgendamentoUser(this.user.id, this.agendamentoUser.slotId).subscribe(
      () => {
        this.loadUser(this.user.id)
      }
    )
  }

  submitForm() {
    this.checkForNameChange()
  }

  checkForNameChange() {
    let name = this.getFieldValue(this.userDataForm, 'name');
    if (this.user.name != name){
      this._us.editUserName(this.user.id, name).subscribe()
    }
  }

  

}
