import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  title = 'Postos de vacinação';

  constructor() { }

  ngOnInit(): void {
  }

}
