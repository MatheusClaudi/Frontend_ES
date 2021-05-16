import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;

  showSucessMensage: boolean = false;

  token;

  erroProcesso = false;

  erroIgual = false;

  constructor(private fb: FormBuilder, private router: Router,  private _auth_service: AuthenticationService, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      
      if (!this.token) {
        this.goToLogin();
      }
      else {
        this.form = this.fb.group({
          password: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
          passwordConfirm: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
        });
      }
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.form.valid) {
      let v = this.form.value;

      if (v.password == v.passwordConfirm) {
        this._auth_service.chengePasswordFromToken(this.token, v.password).subscribe(
        (data) => {
          this.showSucessMensage = true;
          console.log("sucess")
        },
        (error) => {
          this.erroProcesso = true;
        }
        )
      }
      else {
        this.erroIgual = true;
      }
    }
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  goToLogin() {
    this.router.navigate(['login']);  
  }
}
