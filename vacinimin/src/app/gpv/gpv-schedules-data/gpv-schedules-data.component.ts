import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpv-schedules-data',
  templateUrl: './gpv-schedules-data.component.html',
  styleUrls: ['./gpv-schedules-data.component.css']
})
export class GpvSchedulesDataComponent implements OnInit {

  public title: string = "Agendamento";

  showPopUp = false;

  schedule = {
    "nome": "Fulano",
    "cpf": "123.123.454-85",
    "data": "2028-10-02",
    "hora": "11:00 - 12:00",
    "dose": "1",
    "dataAbertura": "2025-10-02",
    "loteVacina": "Lote 01 - Coronavac",
    "status": "cancelado",
    "comentario": "O cliente associado ao agendamento não compareceu ao respectivo posto."
  }

  onClickEfetivar() {
    this.showPopUp = !this.showPopUp;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
