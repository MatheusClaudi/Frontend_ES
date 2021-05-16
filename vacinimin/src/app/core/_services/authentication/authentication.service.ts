import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../_models/user/User';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LocalVariable } from '../local-storage/local-variables';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API = environment.apiUrl;

  private httpOptions: object;


  constructor(
    private router: Router,
    private _ls_service: LocalStorageService,
    private http: HttpClient
  ) { 
 
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  public getLocalVariable(variable: LocalVariable): any {
    return this._ls_service.get(variable);
  }

  public setLocalVariable(variable: LocalVariable, value) {
    this._ls_service.set(variable, value);
  }

  public removeLocalVariable(variable: LocalVariable) {
    this._ls_service.remove(variable);
  }

  login(email: string, password: string): Observable<any> {

    let object = { email: email, password: password};
    let path = this.API + "/auth/";
    return this.http.post(path, object, this.httpOptions)
  }

  sendEmailRecoverPassword(email: string) : Observable<any> {
    let path = this.API + "/password/forgotPassword";
    return this.http.post(path, {email: email});
  }

  chengePasswordFromToken(token: string, password: string) : Observable<any> {
    let path = this.API + "/password/resetPassword?token=" + token;
    return this.http.post(path, {password: password});
  }

  logout(){
    this.removeLocalVariable(LocalVariable.GPVStationId);
    this.removeLocalVariable(LocalVariable.Role);
    this.removeLocalVariable(LocalVariable.Token);
    this.removeLocalVariable(LocalVariable.UserId);
  }
}
