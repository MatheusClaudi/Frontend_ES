import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart-schedules-data',
  templateUrl: './standart-schedules-data.component.html',
  styleUrls: ['./standart-schedules-data.component.css']
})
export class StandartSchedulesDataComponent implements OnInit {

  title: string = "Agendamento:"

  schedule = {
      "posto": "Campestre",
      "vacina": "Coronavac",
      "data": "2029-08-02",
      "horario": "11:00 - 12:00",
      "nDose": "1",
      "dataAbertura": "18-11-2025"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
