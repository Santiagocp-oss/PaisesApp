import { Component } from '@angular/core';
import { Country } from '../../Interfaces/pais.interfaces';
import { PaisService } from '../../Services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  terminor : string ='';
  hayerror : boolean = false;
  Region : Country[]=[];

  constructor (private RegionService : PaisService){

  }


  Buscar ( terminor : string) {

    this.hayerror = false;
    this.terminor = terminor;

    this.RegionService.buscarRegion(this.terminor)
    .subscribe ((Regiones) =>{
      console.log(Regiones);
      this.Region = Regiones;
      
    },  (err)=> {
      this.hayerror = true;
      this.Region =[];
    }
    );
  }

}
