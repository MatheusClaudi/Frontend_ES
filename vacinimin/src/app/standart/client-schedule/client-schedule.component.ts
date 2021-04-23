import { Component, Inject, NgModule, OnInit } from '@angular/core';
import  {JSCalendar} from "vanilla-js-calendar";

@Component({
  selector: 'app-client-schedule',
  templateUrl: './client-schedule.component.html',
  styleUrls: ['./client-schedule.component.css']
})
export class ClientScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const calendar = document.getElementsByClassName("calendar")[0];

  }

}
