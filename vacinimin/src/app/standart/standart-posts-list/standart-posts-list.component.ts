import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart',
  templateUrl: './standart-posts-list.component.html',
  styleUrls: ['./standart-posts-list.component.css']
})
export class StandartPostListsComponent implements OnInit {

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

  pathCheck = "../../../assets/icons/GreenFlag.svg";
  pathNotCheck = "../../../assets/icons/RedFlag.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
