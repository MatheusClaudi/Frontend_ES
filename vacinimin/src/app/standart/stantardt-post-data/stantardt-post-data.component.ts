import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stantardt-post-data',
  templateUrl: './stantardt-post-data.component.html',
  styleUrls: ['./stantardt-post-data.component.css']
})
export class StantardtPostDataComponent implements OnInit {

  title: string = "Dados de Posto:";

  posto = {
    "nome": "Campestre",
    "rua": "Rua Loren Ipsum",
    "bairro": "Bairro Ipsum",
    "cidade": "Campina Grande",
    "cep": "584800-000",
    "numero": "666",
    "horario": "8h - 16h"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
