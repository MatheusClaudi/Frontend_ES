import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart-scedules-data',
  templateUrl: './standart-scedules-data.component.html',
  styleUrls: ['./standart-scedules-data.component.css']
})
export class StandartScedulesDataComponent implements OnInit {

  title: string = "Agendamento:"

  schedule = {
      "posto": "Campestre",
      "vacina": "Coronavac",
      "data": "25/11/2029",
      "horario": "11:00 - 12:00",
      "nDose": "1",
      "dataAbertura": "18/11/2025"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
