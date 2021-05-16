import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SlotHorario } from 'src/app/core/_models/slot/SlotHorario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  private API = environment.apiUrl;

  private httpOptions: object;


  constructor(
    private router: Router,
    private http: HttpClient
  ) { 

    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  createSlot(stationId: number, calendarId: number, slot: SlotHorario): Observable<any> {
      let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot";
      return this.http.post(path, slot);
  }

  removeSlot(stationId: number, calendarId: number, slotId: number): Observable<any> {
    let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot/" + slotId + "/removeSlot";
    return this.http.delete(path);
  }

  getAllSlotsByDateInterval(stationId: number, calendarId: number, initialDate: string, endDate: string): Observable<any>  {
    let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot/?initialDate=" + initialDate + "&endDate=" + endDate;
    return this.http.get(path);
  }

  getSlotsUsers(stationId: number, calendarId: number, slotId: number, page: number, pageSize: number): Observable<any>  {
    let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot/" + slotId + "/users?page=" + page + "&pageSize=" + pageSize; 
    return this.http.get(path);
  }

  getSlotsUsersFilter(stationId: number, calendarId: number, slotId: number, page: number, pageSize: number, filter: string): Observable<any>  {
    let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot/" + slotId + "/users?page=" + page + "&pageSize=" + pageSize + filter; 
    return this.http.get(path);
  }

  firstAssociateSlotToUser(stationId: number, calendarId: number, slotId: number, userId: number): Observable<any>  {
    let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot/" + slotId + "/user/"+ userId + "/firstAssociate";
    return this.http.post(path, {});
  }

  secondAssociateSlotToUser(stationId: number, calendarId: number, slotId: number, userId: number): Observable<any>  {
    let path = this.API + "/station/" + stationId + "/calendar/" + calendarId + "/slot/" + slotId + "/user/" + userId + "/secondAssociate";
    return this.http.post(path, {});
  }


}
