import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacina } from 'src/app/core/_models/loteVacina/LoteVacina';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';
import { LoteVacinaService } from 'src/app/core/_services/http/vacina/loteVacina.service';
import { LocalVariable } from 'src/app/core/_services/local-storage/local-variables';

@Component({
  selector: 'app-lote-list',
  templateUrl: './lote-list.component.html',
  styleUrls: ['./lote-list.component.css']
})
export class LoteListComponent implements OnInit {

  numberOfPages = 0;

  page = 1;

  stationId;

  posto: PostoVacinacao;

  lotes: Array<LoteVacina>;

  constructor(private route: ActivatedRoute, private router: Router, private _ps: PostoService, private _ls: LoteVacinaService , private _auth_service: AuthenticationService) { 
    this.route.queryParams.subscribe(params => {
      let stationId = this._auth_service.getLocalVariable(LocalVariable.GPVStationId)
      this.stationId = stationId;
      
      this.loadStation();
  });
  }

  loadStation() {
    this._ps.getPostoById(this.stationId).subscribe(
      (data) => {
        this.posto = data.station;
        this.loadLotes();
      },
      (err) => {
        this.cancelFormSubmition();
      }
    )
  }

  loadLotes() {
    this._ls.getPageOfVacineFilter(this.stationId, this.page, 3, "").subscribe(
      (data) => {
        this.lotes = data.vaccines.rows;
        this.numberOfPages = data.vaccines.pages;
        console.log(data);
      }
    )
  }

  goToLote(lote){
    this.router.navigate(['gpv', 'editLote'], { queryParams: { idPosto: this.stationId, idLote: lote.id}, state: {obj: lote}});  
  }

  ngOnInit(): void {
  }

  test(event){
    this.page = event;
    this.loadLotes()
  }

  cancelFormSubmition() {
    this.router.navigate(['standart']);   
  }

  create() {
    this.router.navigate(['gpv', 'createLote'], { queryParams: { idPosto: this.stationId}}); 
  }

}
