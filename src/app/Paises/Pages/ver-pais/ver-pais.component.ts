import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../Services/pais.service';
import { Country } from '../../Interfaces/pais.interfaces';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent  implements OnInit{

  pais!: Country;

  constructor (
    private activatedRoute : ActivatedRoute,
    private PaisService: PaisService) {
      
  }

  ngOnInit(): void {

    this.activatedRoute.params
   .pipe(
    switchMap(({id}) => this.PaisService.getPaisPorAlpha(id)),
    tap(console.log)
   )
      .subscribe(pais =>{ this.pais = pais[0]});
      
    }
  }
