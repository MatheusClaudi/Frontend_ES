import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoteVacinaService {

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

  createVacineStation(stationId: number, vacine): Observable<any> {
    let path = this.API + "/station/" + stationId + "/vaccine";
    return this.http.post(path, vacine);
  }

  increaseVacineQuantity(stationId: number, vaccineId: number, quantity: number): Observable<any> {
    let path = this.API + "/station/" + stationId + "/vaccine/" + vaccineId + "/add";
    return this.http.put(path, {quantity: quantity});
  }

  editVacineName(stationId: number, vaccineId: number, name: string): Observable<any> {
    let path = this.API + "/station/" + stationId + "/vaccine/" + vaccineId + "/edit";
    return this.http.put(path, {name: name});

  }

  getPageOfVacineFilter(stationId: number, page: number, size: number, filter: string): Observable<any> {
    let path = this.API + "/station/" + stationId + "/vaccine?page="+ page + "&pageSize=" + size + "&" + filter;
    return this.http.get(path);
  }

  registerFirstVacination(stationId: number, vaccineId: number, userId: number): Observable<any> {
    let path  = this.API + "/station/" + stationId + "/vaccine/" + vaccineId + "/user/" + userId + "/firstVaccine";
    return this.http.post(path, {});
  }

  
  registerSecondVacination(stationId: number, vaccineId: number, userId: number): Observable<any> {
    let path  = this.API + "/station/" + stationId + "/vaccine/" + vaccineId + "/user/" + userId + "/secondVaccine";
    return this.http.post(path, {});
  }


}
