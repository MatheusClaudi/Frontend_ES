import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DateService } from 'src/app/core/_services/date/date.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
 
  date
  
  @Output() newDateSelected = new EventEmitter<string>();

  constructor(private _ds: DateService) { }

  ngOnInit(): void {
  }

  onDateSelected(event){
    this.date = this._ds.getDateFormatFromString(event.value);
    this.newDateSelected.emit(this.date);
  }
}
