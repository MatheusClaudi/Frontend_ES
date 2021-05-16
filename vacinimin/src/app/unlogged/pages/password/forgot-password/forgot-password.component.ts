import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;

  showSucessMensage: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private _auth_service: AuthenticationService) { 
    this.form = this.fb.group({
      email: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void { 
  }

  onSubmit(){

    if (this.form.valid) {
      this._auth_service.sendEmailRecoverPassword(this.form.value.email).subscribe(
        (data) => {
          this.showSucessMensage = true;
          console.log("sucess")
        }
      )
    }
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  goToLogin() {
    this.router.navigate(['login']);  
  }

}
