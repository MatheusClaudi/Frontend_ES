import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../_models/User';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;

  public user: Observable<User>;

  constructor(
    private router: Router,
    private _ls_service: LocalStorageService
  ) { 

    this.userSubject = new BehaviorSubject<User>(_ls_service.get('user'));
    this.user = this.userSubject.asObservable();

  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(cpf: string, password: string){}

  logout(){}
}
