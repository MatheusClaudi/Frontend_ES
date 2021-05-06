import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  page = 0;

  users = new Array();

  constructor() {
    let user = {firstName: "nome", email:"dsdsds@sasashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhha.com"};
    let user2 = {firstName: "nome", email:"dsdsds@sasashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhha.com"};
    let user3 = {firstName: "nome", email:"dsdsds@sasashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhha.com"};
    let user4 = {firstName: "nome", email:"dsdsds@sasashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhha.com"};
    let user5 = {firstName: "nome", email:"dsdsds@sasashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhha.com"};

    this.users.push(user);
    this.users.push(user2);
    this.users.push(user3);
    this.users.push(user4);
    this.users.push(user5);
   }

  ngOnInit(): void {
  }

}
