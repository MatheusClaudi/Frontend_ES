import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';

import { UserFormErrors } from '../../../../core/_models/user/user-form-errors';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userDataForm: FormGroup;

  gpvDataForm: FormGroup;

  userFormErrors: UserFormErrors = new UserFormErrors();

  errorSenha = false;

  errorPedido = false;
  errorBranco = false;
  errorPosto = false;

  constructor(private fb: FormBuilder, private router: Router, private _us: UserService, private _ps: PostoService ) { 
    this.createForms();
  }

  createForms() {

    this.userDataForm = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      cpf: new FormControl('', Validators.compose([Validators.required])),
      passwordConfirm: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
 
      permissaoUsuario: new FormControl({value: 'Admin'}, Validators.compose([Validators.required])),
    });

    this.gpvDataForm = this.fb.group({
        idPosto: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
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
    this.router.navigate(['admin', 'userTable']);   
  }

  createUser() {
    let values = this.userDataForm.value;
    console.log(this.userDataForm.value)

    if (values.password === values.passwordConfirm) {
      this.errorSenha = false;
      const {passwordConfirm, permissaoUsuario, ...newObj} = values;
      console.log(newObj);

      console.log(this.userDataForm)
      if (this.userDataForm.valid) {
        this.errorBranco = false;

        if (!this.gpvDataForm.valid && values.permissaoUsuario == 'Gpv') {
          this.errorPosto= true;
        }
        else {
          this.errorPosto = false;
        
          this._us.createUser(newObj).subscribe(
            (created) => {

              this.errorPedido = false;
              if (values.permissaoUsuario == 'Gpv') {
                
                let idPosto = this.getFieldValue(this.gpvDataForm, 'idPosto');

                this._ps.getPostoById(idPosto).subscribe(
                  () => {
                    this._us.createPreUserGpv(values.cpf).subscribe(
                      () => {
                        this._us.associatePostoUser(created.user.user.id, idPosto).subscribe()
                        this.router.navigate(['admin', 'userTable']);   
    
                      }
                    )
                  }
                ) 

              }
              else {
                this.router.navigate(['admin', 'userTable']);   
              }
            },
            (error) => {
              this.errorPedido = true;
            }
          ) 
        }
      }
      else {
        this.errorBranco = true;
      }
       
    }
    else {
      this.errorSenha = true;
    }
  }
  

  submitForm() {
    this.createUser();
  }

}
