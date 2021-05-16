import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { Endereco } from 'src/app/core/_models/util/Endereco';
import { DateService } from 'src/app/core/_services/date/date.service';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';

@Component({
  selector: 'app-posto-vacinacao-table',
  templateUrl: './posto-vacinacao-table.component.html',
  styleUrls: ['./posto-vacinacao-table.component.css']
})
export class PostoVacinacaoTableComponent implements OnInit {

  page = 1;

  numberOfPages = 0;

  postosVacinacao = new Array<PostoVacinacao>();  

  filterForm: FormGroup;

  filterOptions: string = "";


  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService, private _ps: PostoService) { 
    this.createForms();
 
    this.getPostoList()
   }

  createForms() {
  this.filterForm = this.fb.group({
      name: new FormControl({value: '', disabled: false}, Validators.compose([])),
      zipCode: new FormControl({value: '', disabled: false}, Validators.compose([])),
      city: new FormControl({value: '', disabled: false}, Validators.compose([])),
  });
  }

  ngOnInit(): void {
  }

  createPostoVacinacao() {
    this.router.navigate(['admin', 'createPostoVacinacao']);  
  }

  editPostoVacinacao(postoVacinacao: PostoVacinacao) {
    this.router.navigate(['admin', 'editPostoVacinacao'], { queryParams: { id: postoVacinacao.id } });  
  }

  removePosto(id) {
    this._ps.removePostoById(id).subscribe(() => {
      this.getPostoList();
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

  test(event) {
    this.page = event;
    this.getPostoList()
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

    if (field.zipCode != "") {
      if (search == "") {
        search = search + "zipCode=" + field.zipCode
      }
      else {
        search = search + "&" +  "zipCode=" + field.zipCode ;
      }
    }

    if (field.city != "") {
      if (search == "") {
        search = search + "city=" + field.city;
      }
      else {
        search = search  + "&" +  "city=" + field.city;
      }
    }

    this.filterOptions = search;
    this.getPostoList()
    
  }

}