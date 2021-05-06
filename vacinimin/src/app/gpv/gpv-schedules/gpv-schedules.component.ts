import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpv-schedules',
  templateUrl: './gpv-schedules.component.html',
  styleUrls: ['./gpv-schedules.component.css']
})
export class GpvSchedulesComponent implements OnInit {

  public title: string = "Agendamentos"
  
  listSchedules = [
    {
      "nome": "Jorge Silva",
      "status": "Pendente",
      "data": "2020/11/26",
      "hora": "14:00",
      "cpf": "200.252.154-12"
    },
    {
      "nome": "Luiza Andrade",
      "status": "Cancelado",
      "data": "2020/11/18",
      "hora": "16:00",
      "cpf": "200.252.184-12"
    },
    {
      "nome": "Ze ninguem",
      "status": "Cumprida",
      "data": "2020/11/18",
      "hora": "16:00",
      "cpf": "254.252.184-12"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
