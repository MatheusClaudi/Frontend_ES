import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  getUserById(id: number): Observable<any> {
    let path = this.API + "/user/" + id;
    return this.http.get(path);
  } 

  createUser(object): Observable<any> {
    let path = this.API + "/user/";
    return this.http.post(path, object);
  }

  getAllUsers(): Observable<any> {
    let path = this.API + "/user/";
    return this.http.get(path);
  }

  getPageOfUsers(page: number, size: number): Observable<any> {
    let path = this.API + "/user/?page="+ page + "&pageSize=" + size;
    return this.http.get(path);
  }

  getPageOfUsersFilter(page: number, size: number, filter: string): Observable<any> {
    let path = this.API + "/user/?page="+ page + "&pageSize=" + size + "&" + filter;
    return this.http.get(path);
  }

  removeUserById(id: number): Observable<any> {
    let path = this.API + "/user/" + id;
    return this.http.delete(path);
  }

  createPreUserGpv(cpf: string): Observable<any> {
    let path = this.API + "/preUser";
    return this.http.post(path, {cpf: cpf});
  }

  associatePostoUser(idUser: number, idPosto: number): Observable<any> {
    let path = this.API + "/user/" + idUser + "/associateStation/"+ idPosto;
    return this.http.put(path, null);
  }

  retrievePostoUser(idUser: number): Observable<any> {
    let path = this.API + "/user/" + idUser + "/removeAssociateStation";
    return this.http.put(path, null);
  }


  editUserName(id: number, name: string): Observable<any> {
    let path = this.API + "/user/" + id;
    return this.http.put(path, {name: name});
  }

  removeOpenAgendamentoUser(id: number, slot: number): Observable<any> {
    let path = this.API + "/user/" + id + "/cancel/"+ slot +"/";
    return this.http.put(path, null);
  }

}
