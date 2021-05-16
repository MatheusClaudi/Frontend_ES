import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { SlotHorario } from 'src/app/core/_models/slot/SlotHorario';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';
import { SlotService } from 'src/app/core/_services/http/slot/slot.service';
import { SlotHorarioFormErrors } from '../../../../core/_models/slot/slot-horario-form-errors';

@Component({
  selector: 'app-controle-slot',
  templateUrl: './controle-slot.component.html',
  styleUrls: ['./controle-slot.component.css']
})
export class ControleSlotComponent implements OnInit {

  postoVacinacaoId;

  calendarId;

  slotFormErrors: SlotHorarioFormErrors = new SlotHorarioFormErrors();

  postoDateStr;

  slots: Array<SlotHorario>;

  slotDataForm: FormGroup;

  showCriation: boolean;

  errorBranco = false;
  errorCriar = false;

  constructor(private router: Router, private route: ActivatedRoute,  private fb: FormBuilder, private _ss: SlotService, private _ps: PostoService) { 

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



    this.createForms();
  }

  createForms() {

    this.slotDataForm = this.fb.group({

      initialDate: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      finalDate: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      qtdVaccine: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      priority: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
  }

  dateSelected(event) {
    this.postoDateStr = event;
    this.getSlots()
  }

  goBack() {
    this.router.navigate(['admin', 'editPostoVacinacao'], { queryParams: { id: this.postoVacinacaoId }});   
  }
  goToSlotContent(slot) {
    this.router.navigate(['admin', 'editSlot'], { queryParams: { idPosto: this.postoVacinacaoId, idCalendar: this.calendarId}, state: {obj: slot}});   
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

  removeAllSlots() {
    this.slots = new Array<SlotHorario>();
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  getFieldValue(form: FormGroup, field: string) {
    return form.get(field).value;
  }

  create() {
    if (this.slotDataForm.valid) {
      this.errorBranco = false;
      let v = this.slotDataForm.value;

      v.initialDate = moment(this.postoDateStr + "-" + v.initialDate,"DD/MM/YYYY-HH:mm").format("YYYY-MM-DDTHH:mm:ss")
      v.finalDate = moment(this.postoDateStr + "-" + v.finalDate,"DD/MM/YYYY-HH:mm").format("YYYY-MM-DDTHH:mm:ss")

      console.log()
      this._ss.createSlot(this.postoVacinacaoId, this.calendarId, v).subscribe(
        (data) => {
          this.errorCriar = false;
          this.slotDataForm.reset()
          this.showCriation = false;
          this.getSlots();
        },
        (error) => {
          this.errorCriar = true;
        }
      )
    }
    else {
      this.errorBranco =true;
    }
  
  }

  removeSlot(slot) {
    this._ss.removeSlot(this.postoVacinacaoId, this.calendarId, slot.id).subscribe(
      (data) => {
        this.getSlots()
      }
    )
  }

  showCreate() {
    this.showCriation = true;
  }

  cancelCreation() {
    this.showCriation = false;
  }

}
