import { Component } from '@angular/core';
import { PaisService } from '../../Services/pais.service';
import {  Country } from '../../Interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

    termino: string = '';
    hayerror : boolean = false;
    paises : Country[] = [];

    constructor(private PaisService: PaisService) {

    }

    buscar () {
      this.hayerror = false;
      console.log(this.termino)

      this.PaisService.buscarPais(this.termino)
      .subscribe( (Paises) => {
        console.log(Paises);
        this.paises = Paises;

        
        
      }, (err) => {
        this.hayerror = true;
        this.paises= [];
      }
      );
    }
}
