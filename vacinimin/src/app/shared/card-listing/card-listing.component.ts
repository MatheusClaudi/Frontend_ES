import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.css']
})
export class CardListingComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() info1: string;
  @Input() info2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
