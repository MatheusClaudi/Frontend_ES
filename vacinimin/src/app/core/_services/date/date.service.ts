import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public getHoursFormat(date: Date) {
    let formattedDate = (moment(date)).format('HH:mm');
    return formattedDate;
  }

  public getDateFormat(date: Date) {
    let formattedDate = (moment(date)).format('DD/MM/yyyy');
    return formattedDate;
  }

  public getDateFormatFromString(string: string) {
    let formattedDate = (moment(string)).format('DD/MM/yyyy');
    return formattedDate;
  }
}
