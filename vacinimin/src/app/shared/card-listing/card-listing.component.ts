import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.css']
})
export class CardListingComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() subtitle2: string;
  @Input() info1: string;
  @Input() info2: string;

  //permite escolher entre exibir imagem ou exibir texto
  @Input() imagem: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
