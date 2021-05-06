import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpv-vaccine-list',
  templateUrl: './gpv-vaccine-list.component.html',
  styleUrls: ['./gpv-vaccine-list.component.css']
})
export class GpvVaccineListComponent implements OnInit {

  public title: string = "Lotes de cavina";

  getNumDose(i: number){
    return "(" + this.vaccinesList[i].quantidade + "/100)"
  }

  getDose(i: number){
    return this.vaccinesList[i].dose + "ª Dose"
  }

  getValidade(i: number){
    return "Validade: " + this.vaccinesList[i].validade
  }

  vaccinesList = [
    {
      "nome": "Coronavac",
      "validade": "26/11/2020",
      "dose": "2",
      "quantidade": 40
    },
    {
      "nome": "Jonhson Jonhson",
      "validade": "26/11/2020",
      "dose": "1",
      "quantidade": 50
    },
    {
      "nome": "Sputnik",
      "validade": "26/11/2020",
      "dose": "2",
      "quantidade": 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
