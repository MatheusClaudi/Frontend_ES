import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpv-vaccine-data',
  templateUrl: './gpv-vaccine-data.component.html',
  styleUrls: ['./gpv-vaccine-data.component.css']
})
export class GpvVaccineDataComponent implements OnInit {
  
  public title: string = "Lote de vacina";
  vaccine = {
    "nome": "Coronavac",
    "criador": "Sinovac",
    "validade": "2025-11-25",
    "dose": "1",
    "total": 2,
    "usada": 2,
    "disponivel": 0,
    "liberada": 0
  }


  constructor() { }

  ngOnInit(): void {
  }

}
