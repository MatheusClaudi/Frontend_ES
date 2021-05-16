import { Component, OnInit } from '@angular/core';
import { UnloggedOptions } from 'src/app/core/_path/unlogged/unlogged-options';

@Component({
  selector: 'app-unlogged',
  templateUrl: './unlogged.component.html',
  styleUrls: ['./unlogged.component.css']
})
export class UnloggedComponent implements OnInit {

  topOptions: UnloggedOptions = new UnloggedOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
