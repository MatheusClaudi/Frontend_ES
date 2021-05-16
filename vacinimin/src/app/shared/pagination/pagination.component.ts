import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  // Object containing numberOfPages and currentPage
  @Input() data; 

  @Output() newPageSelectedEvent = new EventEmitter<number>();

  numberOfPages;

  currentPage;

  pageList;

  TRES_PONTOS = 0;
  
  constructor() { 

  }

  ngOnInit(): void {}

  selectNewPage(page: number) {
    this.currentPage = page;
    this.updateViewPageSelection(this.numberOfPages);
    this.newPageSelectedEvent.emit(page);
  }

  updateNumberPages(numberPages: number) {
    this.updateViewPageSelection(numberPages);
    this.currentPage = 1;
  }

  updateViewPageSelection(numberPages: number) {
    if (numberPages <= 7) {
      let l = Array.from(Array(numberPages+1).keys());
      this.pageList =  l.slice(1, l.length);
    }

    else {
      
      let l = [];
      let condA = this.currentPage > 3;
      let condB = numberPages - this.currentPage > 4;

      if (condA) {
        l = l.concat([1, this.TRES_PONTOS]);
      }
      else{
        let aux = Array.from(Array(6).keys());
        l = l.concat(aux.slice(1, aux.length));
      }

      if (condA && condB) {
        let aux = [this.currentPage-1, this.currentPage, this.currentPage+1]
        l = l.concat(aux);
      }


      if (condB) {
        l = l.concat([this.TRES_PONTOS, numberPages]);
      }
      else {
        let aux = Array.from(Array(this.numberOfPages+1).keys());
        l = l.concat(aux.slice(aux.length-5, aux.length));
      }

      this.pageList = l;
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    let data: SimpleChange = changes.data;
    
    let currentPage = data.currentValue.currentPage;
    let numberOfPages = data.currentValue.numberOfPages;

    this.currentPage = currentPage;
    this.numberOfPages = numberOfPages;
    this.updateNumberPages(numberOfPages);
  }

}
