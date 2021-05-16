import { Component, OnInit } from '@angular/core';
import { AdminNavigation } from 'src/app/core/_path/admin/admin-navigation';
import { StandartNavigation } from 'src/app/core/_path/standart/standart-navigation';
import { LoggedOptions } from 'src/app/core/_path/unlogged/logged-options';

@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  topOptions: LoggedOptions = new LoggedOptions();

  navigation: StandartNavigation = new StandartNavigation();

  constructor() { }

  ngOnInit(): void {
  }

}
