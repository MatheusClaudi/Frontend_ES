import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotHorario } from 'src/app/core/_models/slot/SlotHorario';
import { User } from 'src/app/core/_models/user/User';
import { SlotService } from 'src/app/core/_services/http/slot/slot.service';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { SlotHorarioFormErrors } from '../../../../core/_models/slot/slot-horario-form-errors';

@Component({
  selector: 'app-slot-content',
  templateUrl: './slot-content.component.html',
  styleUrls: ['./slot-content.component.css']
})
export class SlotContentComponent implements OnInit {


  slotFormErrors: SlotHorarioFormErrors = new SlotHorarioFormErrors();

  slotDataForm: FormGroup;

  postoVacinacaoId;
  calendarId;
  slot: SlotHorario;

  ocupation = 0;

  errorVaga = false;
  errorAberto = false;
  errorDuasDoses = false;
  errorFalha = false;
  errorUser = false;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private _ss: SlotService, private _us: UserService) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
      this.calendarId = params['idCalendar'];

      
      if (!this.postoVacinacaoId || !this.calendarId || this.slot) {
        this.goBack();
      }
      else {      
        try{
          this.slot = this.router.getCurrentNavigation().extras.state.obj
          this.getOcupationSlot()
        }
        catch {
          this.goBack1()
        }
      }
    })
  }

  createForms() {

    this.slotDataForm = this.fb.group({

      id:new FormControl({value: this.slot.id, disabled: true}, Validators.compose([Validators.required])),
      idPosto:new FormControl({value: this.postoVacinacaoId, disabled: true}, Validators.compose([Validators.required])),
      initialDate: new FormControl({value: this.slot.initialDate, disabled: true}, Validators.compose([Validators.required])),
      finalDate: new FormControl({value: this.slot.finalDate, disabled: true}, Validators.compose([Validators.required])),
      qtdVaccine: new FormControl({value: this.slot.qtdVaccine, disabled: true}, Validators.compose([Validators.required])),
      priority: new FormControl({value: this.slot.priority, disabled: true}, Validators.compose([Validators.required])),


      idUsuario: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      ocupation: new FormControl({value: this.ocupation, disabled: true}, Validators.compose([Validators.required])),
    });
  }

  getOcupationSlot() {
    this._ss.getSlotsUsers(this.postoVacinacaoId, this.calendarId, this.slot.id, 1, 1).subscribe(
      (data) => {
        this.ocupation = data.users.pages;
        console.log(this.ocupation)
        this.createForms();
      },
      (error) => {
        this.ocupation = 0;
        this.createForms();
      }
    )

  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['admin', 'postoVacinacaoTable']);   
  }

  goBack1() {
    this.router.navigate(['admin', 'editSlotsPosto'], {queryParams: {idPosto: this.postoVacinacaoId}});   
  }

  goToUserPage(id) {
    this.router.navigate(['admin', 'editUser'], { queryParams: { id: id }});   
  }

  associateUser() {
    let v = this.slotDataForm.value;

    if (v.idUsuario != '') {
      if (this.ocupation == this.slot.qtdVaccine) {
        console.log("slot sem vaga")
        this.errorVaga = true;
      }
      else {

        this._us.getUserById(v.idUsuario).subscribe(
          (data) => {
            let user: User = data.user;
            
            if (User.temAgendamentoAberto(user)){
              console.log("usuário tem agendamento aberto")
              this.errorAberto = true;
            }
            else {
              let f = User.tomouPrimeiraDose(user)
              let s = User.tomouSegundaDose(user)

              if (f && s) {
                console.log("usuário já tomou as duas doses")
                this.errorDuasDoses = true;
              }

              else if (!f) {
                console.log("first")
                this._ss.firstAssociateSlotToUser(this.postoVacinacaoId, this.calendarId, this.slot.id, user.id).subscribe(
                  (data) => {
                    console.log("sucess first")
                    this.slotDataForm.get('ocupation').setValue(this.ocupation + 1);
                    this.ocupation = this.ocupation + 1;
                  },
                  (error) => {
                    console.log("failure first")
                    this.errorFalha = true;
                  }
                )
              }

              else if (!s && f) {
                console.log("second")
                this._ss.secondAssociateSlotToUser(this.postoVacinacaoId, this.calendarId, this.slot.id, user.id).subscribe(
                  (data) => {
                    console.log("sucess second")
                    this.slotDataForm.get('ocupation').setValue(this.ocupation + 1);
                    this.ocupation = this.ocupation + 1;
                  },
                  (error) => {
                    console.log("failure second")
                    this.errorFalha = true;
                  }
                )
              }
            }
          }, 
          (error) => {
            this.errorUser = true;
            console.log("usuário não existe")
          }
        )
      }
    }
    else {
      console.log("campo vazio")
    }
  }

}
