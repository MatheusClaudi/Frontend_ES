import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  title = 'Postos de vacinação';
  // lista com informações dos postos
  listPosts = [
    {
      "nome": "Campestre",
      "endereco": "Rua ipsum Lorem dolor",
      "cep": "584511-000",
      "disponivel": true
    },
    {
      "nome": "Campestre",
      "endereco": "Rua Lorem ipsum dolor",
      "cep": "584511-000",
      "disponivel": true
    },
    {
      "nome": "Alto Branco",
      "endereco": "Rua Lorem ipsum dolor",
      "cep": "584511-080",
      "disponivel": false
    },
    {
      "nome": "Cruzeiro",
      "endereco": "Rua 3",
      "cep": "584511-080",
      "disponivel": false
    }
  ];

  pathCheck = "../../../assets/icons/vaccineCheck.svg";
  pathNotCheck = "../../../assets/icons/RedFlag.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
