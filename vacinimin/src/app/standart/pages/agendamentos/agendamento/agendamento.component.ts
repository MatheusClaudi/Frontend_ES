import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { SlotHorario } from 'src/app/core/_models/slot/SlotHorario';
import { User } from 'src/app/core/_models/user/User';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';
import { SlotService } from 'src/app/core/_services/http/slot/slot.service';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { LocalVariable } from 'src/app/core/_services/local-storage/local-variables';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  postoVacinacaoId;

  calendarId;

  postoDateStr;

  slots: Array<SlotHorario>;

  showCard = false;

  slot: SlotHorario;
  user: User;
  slotLotado = false
  userAgendamentoAtivo = false
  userVacinado = false
  enabled = false

  constructor(private router: Router, private route: ActivatedRoute, private _ss: SlotService, private _ps: PostoService, private _us: UserService, private _auth_service: AuthenticationService) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
      
      if (!this.postoVacinacaoId) {
        this.goBack();
      }
      else {
        this._ps.getPostoById(this.postoVacinacaoId).subscribe(
          (data) => {
            this.calendarId = data.station.calendar.id;
          }
        )
      }
    })
  }



  ngOnInit(): void {
  }

  dateSelected(event) {
    this.postoDateStr = event;
    this.getSlots()
  }

  goBack() {
    this.router.navigate(['standart', 'posts']);   
  }

  goToSlotContent(slot: SlotHorario) {
    this.slot = slot;
    this.showCard = true;
    this._ss.getSlotsUsers(this.postoVacinacaoId, this.calendarId, slot.id, 1, 1).subscribe(
      (data) => {
        console.log(data)
        this.slotLotado = slot.qtdVaccine <= data.users.pages;

        let userId = this._auth_service.getLocalVariable(LocalVariable.UserId)
      
        this._us.getUserById(userId).subscribe(
          (data) => {
            this.user = data.user;
            this.userAgendamentoAtivo = User.temAgendamentoAberto(this.user);
            this.userVacinado = User.tomouPrimeiraDose(this.user) && User.tomouSegundaDose(this.user);
            this.enabled = !this.userAgendamentoAtivo && !this.userVacinado && !this.slotLotado;
          },
          (err) => {
          }
        )
      }
    )
  }

  agendar() {
    if (this.enabled) {
      let f = User.tomouPrimeiraDose(this.user)
      let s = User.tomouSegundaDose(this.user)

      if (!f) {
        this._ss.firstAssociateSlotToUser(this.postoVacinacaoId, this.calendarId, this.slot.id, this.user.id).subscribe(
          (data) => {
            this.router.navigate(['standart', 'dadosPessoais']);   
          })
      }

      if (f && !s) {
        this._ss.firstAssociateSlotToUser(this.postoVacinacaoId, this.calendarId, this.slot.id, this.user.id).subscribe(
          (data) => {
            this.router.navigate(['standart', 'dadosPessoais']); 
          })
      }
    }
  }

  closeCard() {
    this.showCard = false;
  }



  getSlots() {
    let init = moment(this.postoDateStr, "DD/MM/YYYY").subtract(1, 'day').format()
    let end = moment(this.postoDateStr, "DD/MM/yyyy").format()

    this._ss.getAllSlotsByDateInterval(this.postoVacinacaoId, this.calendarId, init, end).subscribe(
      (data) => {
        this.slots = data.slots;
        console.log(this.slots)
      }
    )
    
  }

  formatDate(date) {
    let a = date.split('.')[0]
    let m = moment(a, "YYYY-MM-DDTHH:mm:ss")
    return m.format("HH:mm")
  }
}
