import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';
import { PostoService } from 'src/app/core/_services/http/posto/posto.service';
import { LocalVariable } from 'src/app/core/_services/local-storage/local-variables';

@Component({
  selector: 'app-controle-posto',
  templateUrl: './controle-posto.component.html',
  styleUrls: ['./controle-posto.component.css']
})
export class ControlePostoComponent implements OnInit {

  postoVacinacaoDataForm: FormGroup;

  posto: PostoVacinacao;

  stationId;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private _ps: PostoService, private _auth_service: AuthenticationService) { 
    this.route.queryParams.subscribe(params => {
      let stationId = this._auth_service.getLocalVariable(LocalVariable.GPVStationId)
      this.stationId = stationId;
      
      this.loadStation();
  });
  }

  ngOnInit(): void {
  }

  loadStation() {
    this._ps.getPostoById(this.stationId).subscribe(
      (data) => {
        this.posto = data.station;
        this.createForms();
      },
      (err) => {
        this.cancelFormSubmition();
      }
    )
  }

  createForms() {

    let u = this.posto;

    this.postoVacinacaoDataForm = this.fb.group({
      id: new FormControl({value: u.id, disabled: true}, Validators.compose([Validators.required])),
      qtdVaccine: new FormControl({value: u.qtdVaccine, disabled: true}, Validators.compose([Validators.required])),
      name: new FormControl({value: u.name, disabled: true}, Validators.compose([Validators.required])),
      city: new FormControl({value: u.city, disabled: true}, Validators.compose([Validators.required])),
      zipCode: new FormControl({value: u.zipCode, disabled: true}, Validators.compose([Validators.required])),
      address: new FormControl({value: u.address, disabled: true}, Validators.compose([Validators.required])),
      state: new FormControl({value: u.state, disabled: true}, Validators.compose([Validators.required])),
      district: new FormControl({value: u.district, disabled: true}, Validators.compose([Validators.required])),
    });

  }

  cancelFormSubmition() {
    this.router.navigate(['standart']);   
  }

}
