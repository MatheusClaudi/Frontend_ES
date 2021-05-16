import { Component, OnInit } from '@angular/core';
import { GpvNavigation } from 'src/app/core/_path/gpv/gpv-navigation';
import { StandartNavigation } from 'src/app/core/_path/standart/standart-navigation';
import { LoggedOptions } from 'src/app/core/_path/unlogged/logged-options';

@Component({
  selector: 'app-gpv',
  templateUrl: './gpv.component.html',
  styleUrls: ['./gpv.component.css']
})
export class GpvComponent implements OnInit {

  topOptions: LoggedOptions = new LoggedOptions();

  navigation: GpvNavigation = new GpvNavigation();


  constructor() { }

  ngOnInit(): void {
  }

}
