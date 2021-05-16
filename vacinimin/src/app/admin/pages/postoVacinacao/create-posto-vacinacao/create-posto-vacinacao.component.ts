import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';
import { PostoVacinacaoFormErrors } from '../posto-vacinacao-form-errors';



@Component({
  selector: 'app-create-posto-vacinacao',
  templateUrl: './create-posto-vacinacao.component.html',
  styleUrls: ['./create-posto-vacinacao.component.css']
})
export class CreatePostoVacinacaoComponent implements OnInit {


  postoVacinacaoDataForm: FormGroup;

  postoVacinacaoFormErrors: PostoVacinacaoFormErrors = new PostoVacinacaoFormErrors();

  errorPedido = false;
  errorBranco = false;

  constructor(private fb: FormBuilder, private router: Router, private _ps: PostoService) { 
    this.createForms();
  }

  createForms() {

    this.postoVacinacaoDataForm = this.fb.group({
      name: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      city: new FormControl('', Validators.compose([Validators.required])),
      zipCode: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      state: new FormControl('', Validators.compose([Validators.required])),
      district: new FormControl('', Validators.compose([Validators.required])),
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
    this.router.navigate(['admin', 'postoVacinacaoTable']);   
  }

  createPosto() {
    if (this.postoVacinacaoDataForm.valid) {
      this.errorBranco = false;
      let values = this.postoVacinacaoDataForm.value;
      console.log(this.postoVacinacaoDataForm.value)

      this._ps.createPosto(values).subscribe(
        (created) => {
          this.errorPedido = false;
          this.cancelFormSubmition();
        },
        (error) => {
          this.errorPedido = true;
        }
      )    
    }
    else {
      this.errorBranco = true;
    }      
  }

  submitForm() {
    this.createPosto()
  }

}
