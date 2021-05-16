import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFormErrors } from '../../../../core/_models/user/user-form-errors';
import { User } from 'src/app/core/_models/user/User';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { Role } from 'src/app/core/_models/user/Role';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;


  secondRegistro: any;
  firstRegistro: any;
  agendamentoUser: any;

  userDataForm: FormGroup;

  userFormErrors: UserFormErrors = new UserFormErrors();

  errorPedido = false;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private _us: UserService) { 
    this.route.queryParams.subscribe(params => {
      let userId = params['id'];
      
      this.loadUser(userId);
      
      if (!userId) {
        this.cancelFormSubmition();
      }
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
        this.cancelFormSubmition();
      }
    )
  }

  createForms() {

    let u = this.user;

    this.userDataForm = this.fb.group({
      id: new FormControl({value: u.id, disabled: true}, Validators.compose([Validators.required])),
      name: new FormControl({value: u.name, disabled: false}, Validators.compose([Validators.required])),
      email: new FormControl({value: u.email, disabled: true}, Validators.compose([Validators.required])),
      cpf: new FormControl({value: u.cpf, disabled: true}, Validators.compose([Validators.required])),
     
      idPosto: new FormControl({value: u.stationId, disabled: false}, Validators.compose([Validators.required])),
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
        this.errorPedido = false;
        this.loadUser(this.user.id)
      },
      () => {
        this.errorPedido = true;
      }

    )
  }

  cancelFormSubmition() {
    this.router.navigate(['admin', 'userTable']);   
  }

  submitForm() {
    this.checkForNameChange()
    this.checkForPostoChange()
  }

  checkForNameChange() {
    if (this.userDataForm.valid) {
      let name = this.getFieldValue(this.userDataForm, 'name');
      if (this.user.name != name){
        this._us.editUserName(this.user.id, name).subscribe(
          () => {this.errorPedido = false;},
          () => {
            this.errorPedido = true;
          }
        )
      }
    }
    
  }

  checkForPostoChange() {
    let id = this.getFieldValue(this.userDataForm, 'idPosto');
    if (this.user.stationId != id) {
      this._us.retrievePostoUser(this.user.id).subscribe(
        () => {
          this.errorPedido = false;
          this._us.associatePostoUser(this.user.id, id).subscribe(
            () => {
              this.errorPedido = false;
            },
            () => {
              this.errorPedido = true;
              this._us.associatePostoUser(this.user.id, this.user.stationId).subscribe()
            }
          )
        },
        () => {
          this.errorPedido = true;
        }
      )
    }
  }


}
