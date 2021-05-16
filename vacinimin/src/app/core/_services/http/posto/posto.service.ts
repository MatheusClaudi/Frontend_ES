import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostoService {

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

  createPosto(object): Observable<any> {
    let path = this.API + "/station";
    return this.http.post(path, object);
  }

  getPostoById(id: number): Observable<any> {
    let path = this.API + "/station/" + id;
    return this.http.get(path);
  } 

  getPageOfPostosFilter(page: number, size: number, filter: string): Observable<any> {
    let path = this.API + "/station/?page="+ page + "&pageSize=" + size + "&" + filter;
    return this.http.get(path);
  }

  removePostoById(id: number): Observable<any> {
    let path = this.API + "/station/" + id;
    return this.http.delete(path);
  }

  editPosto(id: number, object): Observable<any> {
    let path = this.API + "/station/" + id;
    return this.http.put(path, object);
  }
}
