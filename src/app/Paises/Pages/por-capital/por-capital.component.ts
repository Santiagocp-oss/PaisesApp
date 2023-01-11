import { Component } from '@angular/core';
import { Country } from '../../Interfaces/pais.interfaces';
import { PaisService } from '../../Services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  terminoc : string = '';
  hayerror : boolean = false;
  Capital : Country[] = [];

  constructor( private CapitalService : PaisService) {

  }

  Buscar ( terminoc: string){

    this.hayerror = false;
    this.terminoc = terminoc;

    this.CapitalService.buscarCapital(this.terminoc)
    .subscribe ((Capitales)=>{
      console.log(Capitales);
      this.Capital = Capitales;
      
    },(err) => {
      this.hayerror = true;
      this.Capital = [];
    }
    );

  }



}
