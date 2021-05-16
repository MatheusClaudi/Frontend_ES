import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';

@Component({
  selector: 'app-standart',
  templateUrl: './standart-posts-list.component.html',
  styleUrls: ['./standart-posts-list.component.css']
})
export class StandartPostListsComponent implements OnInit {

  page = 1;

  numberOfPages = 0;

  postosVacinacao = new Array<PostoVacinacao>();  


  filterForm: FormGroup;

  filterOptions: string = "";


  constructor(private fb: FormBuilder, private router: Router, private _ps: PostoService) {
    this.createForms();
 
    this.getPostoList()
  }

  ngOnInit(): void {
  }


  createForms() {
    this.filterForm = this.fb.group({
        city: new FormControl({value: '', disabled: false}, Validators.compose([])),
    });
  }

  getPostoList() {
  
    this._ps.getPageOfPostosFilter(this.page, 3, this.filterOptions).subscribe(
      (data) => {
        console.log(data)
        this.postosVacinacao = data.station.rows;
        this.numberOfPages = data.station.pages
      }
    )
  }

  goToPostoVacinacao(postoVacinacao: PostoVacinacao) {
    this.router.navigate(['standart', 'postData'], { queryParams: { id: postoVacinacao.id } });  
  }

  search() {
    let field = this.filterForm.value;

    let search = ""

    this.page = 1;

    if (field.city != "") {
      if (search == "") {
        search = search + "city=" + field.city
      }
      else {
        search = search + "&" +  "city=" + field.city ;
      }
    }

    this.filterOptions = search;
    this.getPostoList()
    
  }

  test(event) {
    this.page = event;
    this.getPostoList()
  }

}
