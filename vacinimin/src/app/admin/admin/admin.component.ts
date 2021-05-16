import { Component, OnInit } from '@angular/core';
import { AdminNavigation } from 'src/app/core/_path/admin/admin-navigation';
import { LoggedOptions } from 'src/app/core/_path/unlogged/logged-options';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  topOptions: LoggedOptions = new LoggedOptions();

  navigation: AdminNavigation = new AdminNavigation();

  constructor() { }

  ngOnInit(): void {
  }

}
