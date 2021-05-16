import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/_models/user/User';
import { UserService } from 'src/app/core/_services/http/user/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  page = 1;

  numberOfPages = 0;

  users = new Array<User>();  

  filterForm: FormGroup;

  filterOptions: string = "";

  constructor(private fb: FormBuilder, private router: Router, private _us: UserService) { 
    this.createForms();
 
    this.getUserList()
  }

  createForms() {
  this.filterForm = this.fb.group({
      name: new FormControl({value: '', disabled: false}, Validators.compose([])),
      email: new FormControl({value: '', disabled: false}, Validators.compose([])),
      cpf: new FormControl({value: '', disabled: false}, Validators.compose([])),
      role: new FormControl({value: '', disabled: false}, Validators.compose([])),

  });
  }

  ngOnInit(): void {
  }

  createUser() {
    this.router.navigate(['admin', 'createUser']);  
  }
  editUser(user: User) {
    this.router.navigate(['admin', 'editUser'], { queryParams: { id: user.id } });  
  }

  removeUser(id) {
    this._us.removeUserById(id).subscribe(() => {
      this.getUserList();
    });
  }

  getUserList() {
  
    this._us.getPageOfUsersFilter(this.page, 3, this.filterOptions).subscribe(
      (data) => {
        console.log(data)
        this.users = data.users.rows;
        this.numberOfPages = data.users.pages
      }
    )
  }

  test(event) {
    this.page = event;
    this.getUserList()
  }

  search() {
    let field = this.filterForm.value;

    let search = ""

    this.page = 1;

    if (field.name != "") {
      if (search == "") {
        search = search + "name=" + field.name
      }
      else {
        search = search + "&" +  "name=" + field.name ;
      }
    }

    if (field.email != "") {
      if (search == "") {
        search = search + "email=" + field.email
      }
      else {
        search = search + "&" +  "email=" + field.email ;
      }
    }

    if (field.cpf != "") {
      if (search == "") {
        search = search + "cpf=" + field.cpf
      }
      else {
        search = search  + "&" +  "cpf=" + field.cpf ;
      }
    }

    if (field.role != "") {
      if (search == "") {
        search = search + "role=" + field.role
      }
      else {
        search = search + "&" +  "role=" + field.role ;
      }
    }

    this.filterOptions = search;
    this.getUserList()
    
  }

}
