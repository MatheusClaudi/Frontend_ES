import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';

@Component({
  selector: 'app-stantardt-post-data',
  templateUrl: './stantardt-post-data.component.html',
  styleUrls: ['./stantardt-post-data.component.css']
})
export class StantardtPostDataComponent implements OnInit {

  posto: PostoVacinacao;

  postoVacinacaoId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _ps: PostoService) { 
    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['id'];
      
      
      this.loadPosto(this.postoVacinacaoId);
      
      if (!this.postoVacinacaoId) {
        this.cancelFormSubmition();
      }
    })
  }

  ngOnInit(): void {
  }

  loadPosto(id) {
    this._ps.getPostoById(id).subscribe(
      (data) => {
        this.posto = data.station;
      },
      (err) => {
        this.cancelFormSubmition();
      }
    )
  }

  cancelFormSubmition() {
    this.router.navigate(['standart', 'posts']);   
  }

  goToHorarios() {
    this.router.navigate(['standart', 'agendamento'], { queryParams: { idPosto: this.postoVacinacaoId } })
  }

}
