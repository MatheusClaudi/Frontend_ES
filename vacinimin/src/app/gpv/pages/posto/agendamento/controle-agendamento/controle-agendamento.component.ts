import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/_models/user/User';
import { SlotService } from 'src/app/core/_services/http/slot/slot.service';
import { LoteVacinaService } from 'src/app/core/_services/http/vacina/loteVacina.service';

@Component({
  selector: 'app-controle-agendamento',
  templateUrl: './controle-agendamento.component.html',
  styleUrls: ['./controle-agendamento.component.css']
})
export class ControleAgendamentoComponent implements OnInit {


  numberOfPages = 8;

  currentPage = 1;

  postoVacinacaoId;

  calendarId;

  slotId; 

  users: Array<User>;

  showCriation = false;

  filterForm: FormGroup;

  confirmForm: FormGroup;

  filterOptions = "";

  jaConfirmado = false;
  erroConfirmacao = false;

  user: User;


  constructor(private router: Router, private route: ActivatedRoute,  private fb: FormBuilder, private _ss: SlotService, private _vs: LoteVacinaService) { 
    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['idPosto'];
      this.calendarId = params['idCalendar'];
      this.slotId = params['idSlot']

      
      if (!this.postoVacinacaoId || !this.calendarId || !this.slotId) {
        this.goBack();
      }
      else {
        this.getUsers()
        this.createForms()
      }
    })
  }

  createForms() {
    this.filterForm = this.fb.group({
        cpf: new FormControl({value: '', disabled: false}, Validators.compose([])),
    });

    this.confirmForm = this.fb.group({
      idLote: new FormControl({value: '', disabled: false}, Validators.compose([])),
  });
  }

  getUsers(){
    this._ss.getSlotsUsersFilter(this.postoVacinacaoId, this.calendarId,this.slotId, this.currentPage, 3, this.filterOptions).subscribe(
      (data) => {
        console.log(data)
        this.users = data.users.rows;
        this.numberOfPages = data.users.pages;
      }
    )
  }

  ngOnInit(): void {
  }

  show(user) {
    this.showCriation = true;
    this.jaConfirmado = !User.temAgendamentoAberto(user)
    this.user = user;
    this.erroConfirmacao= false;
  }

  hide() {
    this.showCriation = false;
  }

  confirma() {
    let v = this.confirmForm.value;

    if (v.idLote != "") {
      if (!this.jaConfirmado) {
        let f = User.temFirstAgendamentoAberto(this.user)
        let s = User.temSecondAgendamentoAberto(this.user)
  
        if (f) {
          console.log("first")
          this._vs.registerFirstVacination(this.postoVacinacaoId, v.idLote, this.user.id).subscribe(
            (data) => {
              console.log("sucess first")
              this.getUsers();
            },
            (error) => {
              console.log("failure first")
              this.erroConfirmacao = true;
            }
          )
        }
  
        else if (!f && s) {
          console.log("second")
          this._vs.registerSecondVacination(this.postoVacinacaoId, v.idLote, this.user.id).subscribe(
            (data) => {
              console.log("sucess second")
              this.getUsers();
            },
            (error) => {
              console.log("failure second")
              this.erroConfirmacao = true;
            }
          )
        }
      }
    }
    
  }

  search() {
    let field = this.filterForm.value;

    let search = ""

    this.currentPage = 1;

    if (field.cpf != "") {
      search = search + "&" +  "cpf=" + field.cpf ;
    }

    this.filterOptions = search;
    this.getUsers();
  }

  goBack() {
    this.router.navigate(['gpv']);   
  }

  test(event) {
    this.currentPage = event;
    this.getUsers();
  }

  getDoseAgendamentoAberto(user: User): number {
    if (!!user.firstSlotId && !user.firstVaccine) {
        return 1
    }
    else if (!!user.secondSlotId && !user.secondVaccine) {
        return 2
    }
    else {
        return 0
    }
  }

}
