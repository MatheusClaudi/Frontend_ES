import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';
import { PostoVacinacaoFormErrors } from '../posto-vacinacao-form-errors';


@Component({
  selector: 'app-edit-posto-vacinacao',
  templateUrl: './edit-posto-vacinacao.component.html',
  styleUrls: ['./edit-posto-vacinacao.component.css']
})
export class EditPostoVacinacaoComponent implements OnInit {

  postoVacinacaoDataForm: FormGroup;

  postoVacinacaoFormErrors: PostoVacinacaoFormErrors = new PostoVacinacaoFormErrors();

  posto: PostoVacinacao;

  postoVacinacaoId;

  request; 

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _ps: PostoService) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['id'];
      
      
      this.loadPosto(this.postoVacinacaoId);
      
      if (!this.postoVacinacaoId) {
        this.cancelFormSubmition();
      }
    })
  }

  loadPosto(id) {
    this._ps.getPostoById(id).subscribe(
      (data) => {
        this.posto = data.station;
        this.createForms();
      },
      (err) => {
        this.cancelFormSubmition();
      }
    )
  }

  createForms() {

    let u = this.posto;

    this.postoVacinacaoDataForm = this.fb.group({
      id: new FormControl({value: u.id, disabled: true}, Validators.compose([Validators.required])),
      qtdVaccine: new FormControl({value: u.qtdVaccine, disabled: true}, Validators.compose([Validators.required])),
      name: new FormControl({value: u.name, disabled: false}, Validators.compose([Validators.required])),
      city: new FormControl({value: u.city, disabled: false}, Validators.compose([Validators.required])),
      zipCode: new FormControl({value: u.zipCode, disabled: false}, Validators.compose([Validators.required])),
      address: new FormControl({value: u.address, disabled: false}, Validators.compose([Validators.required])),
      state: new FormControl({value: u.state, disabled: false}, Validators.compose([Validators.required])),
      district: new FormControl({value: u.district, disabled: false}, Validators.compose([Validators.required])),
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

  goToPostoVaccineList() {
    this.router.navigate(['admin', 'loteVacinaTable'], { queryParams: { idPosto: this.postoVacinacaoId } })
  }

  goToPostoSlotControl() {
    this.router.navigate(['admin', 'editSlotsPosto'], { queryParams: { idPosto: this.postoVacinacaoId } })
  }

  cancelFormSubmition() {
    this.router.navigate(['admin', 'postoVacinacaoTable']);   
  }

  submitForm() {
    if (this.postoVacinacaoDataForm.valid) {
      this.request = {};
      let fields = ['name', 'state', 'zipCode', 'address', 'city', 'district']
      
      fields.forEach((name, index) => {
        console.log(name)
        let field = this.getFieldValue(this.postoVacinacaoDataForm, name);
        if (this.posto[name] != field){
          this.request[name] = field;
          this._ps.editPosto(this.postoVacinacaoId, this.request).subscribe(
            (data) => {
              this.cancelFormSubmition();
            }
          );
        }
      })
    }

  }
}
