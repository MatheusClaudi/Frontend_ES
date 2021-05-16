import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/_services/http/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  showSucessMensage: boolean = false;

  requestError = false;
  passwordError = false;
  dadosErro = false;

  constructor(private fb: FormBuilder, private router: Router, private _us: UserService) {
    this.form = this.fb.group({
      name: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      cpf: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      email: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      password: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      passwordConfirm:new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),    
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

  onSubmit(){
    if (this.form.valid) {
      this.dadosErro = false;
      let values = this.form.value;
      console.log(this.form.value)

      if (values.password === values.passwordConfirm) {
        this.passwordError = false;
        const {passwordConfirm, ...newObj} = values;
        console.log(newObj);

        this._us.createUser(newObj).subscribe(
          () => {
            this.requestError = false;
            this.showSucessMensage = true;
          },
          (error) => {
            this.requestError = true;
          }
        )      
      }
      else {
        this.passwordError = true;
      }
    }
    else {
      this.dadosErro = true;
    }
  }

  goToLogin() {
    this.router.navigate(['login']);  
  }

}
