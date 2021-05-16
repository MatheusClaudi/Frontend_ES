import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacina } from 'src/app/core/_models/loteVacina/LoteVacina';
import { User } from 'src/app/core/_models/user/User';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { LoteVacinaService } from 'src/app/core/_services/http/vacina/loteVacina.service';
import { LoteVacinaFormErrors } from '../../../../core/_models/loteVacina/lote-vacina-form-errors';

@Component({
  selector: 'app-edit-lote-vacina',
  templateUrl: './edit-lote-vacina.component.html',
  styleUrls: ['./edit-lote-vacina.component.css']
})
export class EditLoteVacinaComponent implements OnInit {

  loteVacinaDataForm: FormGroup;

  agendamentoDataForm: FormGroup;

  loteVacinaFormErrors: LoteVacinaFormErrors = new LoteVacinaFormErrors();

  loteVacinaId;

  postoVacinacaoId;

  loteVacina: LoteVacina;

  errorVaga = false;
  errorPedido = false;
  errorFirst = false;
  errorSecond = false;
  errorQuantidade = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _vs: LoteVacinaService, private _us: UserService) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
      this.loteVacinaId = params['idLote'];
      
      if (!this.loteVacinaId || !this.postoVacinacaoId) {
        this.cancelFormSubmition();
      }
      else {
        this.loteVacina = this.router.getCurrentNavigation().extras.state.obj
        this.createForms();
      }
    })
    
  }

  createForms() {

    this.loteVacinaDataForm = this.fb.group({
      id: new FormControl({value: this.loteVacina.id, disabled: "true"}, Validators.compose([Validators.required])),
      stationId: new FormControl({value: this.loteVacina.stationId, disabled: "true"}, Validators.compose([Validators.required])),
      name: new FormControl(this.loteVacina.name, Validators.compose([Validators.required])),
      quantity: new FormControl(this.loteVacina.quantity, Validators.compose([Validators.required])),
    })

    this.agendamentoDataForm = this.fb.group({
      idUsuario:  new FormControl('', Validators.compose([Validators.required])),
    })

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
    this.router.navigate(['admin', 'loteVacinaTable'], { queryParams: { idPosto: this.postoVacinacaoId }});   
  }


  goToUserPage(id) {
    this.router.navigate(['admin', 'editUser'], { queryParams: { id: id }});   
  }

  confirmarAgendamento() {
    let v = this.agendamentoDataForm.value;

    if (v.idUsuario != '') {
      if (this.loteVacina.quantity <= 0) {
        this.errorVaga = true;
        console.log("slot sem vaga")
      }
      else {
        this._us.getUserById(v.idUsuario).subscribe(
          (data) => {
            let user: User = data.user;
            
            if (User.temAgendamentoAberto(user)){
              console.log("usuário tem agendamento aberto")

              let f = User.temFirstAgendamentoAberto(user)
              let s = User.temSecondAgendamentoAberto(user)

              if (f) {
                console.log("first")
                this._vs.registerFirstVacination(this.postoVacinacaoId, this.loteVacinaId, user.id).subscribe(
                  (data) => {
                    console.log("sucess first")
                    this.goToUserPage(user.id)
                  },
                  (error) => {
                    console.log("failure first")
                    this.errorFirst = true;
                  }
                )
              }

              else if (!f && s) {
                console.log("second")
                this._vs.registerSecondVacination(this.postoVacinacaoId, this.loteVacinaId, user.id).subscribe(
                  (data) => {
                    console.log("sucess second")
                    this.goToUserPage(user.id)
                  },
                  (error) => {
                    console.log("failure second")
                    this.errorSecond = true;
                  }
                )
              }
            }
            else {
              console.log("Usuário não tem agendamento aberto")
            }
          }, 
          (error) => {
            console.log("usuário não existe")
          }
        )
      }
    }
    else {
      console.log("campo vazio")
    }
  }

  submitForm() {

    if (this.loteVacinaDataForm.valid) {
      let name = this.getFieldValue(this.loteVacinaDataForm, 'name');
      let quantity = this.getFieldValue(this.loteVacinaDataForm, 'quantity');

      if (name != this.loteVacina.name) {
        this._vs.editVacineName(this.postoVacinacaoId, this.loteVacinaId, name).subscribe(
          (data) => {
          this.cancelFormSubmition()
          },
          () => {
            this.errorPedido = true;
          }
        )
      }
    
      if (quantity > this.loteVacina.quantity) {
        this.errorQuantidade = false;
        this._vs.increaseVacineQuantity(this.postoVacinacaoId, this.loteVacinaId, quantity - this.loteVacina.quantity).subscribe(
          () => {
            this.cancelFormSubmition()
          },
          () => {
            this.errorPedido = true;
          }
        )
      }
      else {
        this.errorQuantidade = true;
      }
    }
    
    
  }

}
