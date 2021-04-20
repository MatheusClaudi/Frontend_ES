import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart-schedules',
  templateUrl: './standart-schedules.component.html',
  styleUrls: ['./standart-schedules.component.css']
})
export class StandartSchedulesComponent implements OnInit {

  title: string = "Agendamentos";

  listSchedules = [
    {
    "nomePosto": "Campestre",
    "status": "Pendente",
    "data": "26/12/2021",
    "hora": "14:00",
    "dose": "1ª dose"
    },
    {
      "nomePosto": "Campestre",
      "status": "Cancelado",
      "data": "18/12/2021",
      "hora": "14:00",
      "dose": "2ª dose"
    },
    {
      "nomePosto": "Campestre",
      "status": "Cumprida",
      "data": "26/03/2021",
      "hora": "14:00",
      "dose": "2ª dose"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
