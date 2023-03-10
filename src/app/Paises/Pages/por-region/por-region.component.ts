import { Component } from '@angular/core';
import { Country } from '../../Interfaces/pais.interfaces';
import { PaisService } from '../../Services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
    margin-bottom: 5px;

  }
  `
  ]
})
export class PorRegionComponent {


  regiones: string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva : string = '';
  paises :Country[] = [];

  constructor (private PaisService: PaisService){}

 getClaseCSS(region : string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': ' btn btn-outline-primary';
  }
 activarRegion( region: string) {


  if (region === this.regionActiva){ return; }
  
    this.regionActiva = region;
    this.paises = [];


    this.PaisService.buscarRegion (region)
    .subscribe(paises=>this.paises = paises)
  }

  //  terminor : string ='';
  //  hayerror : boolean = false;
  //  Region : Country[]=[];

  //  constructor (private RegionService : PaisService){

  //  }


  //  Buscar ( terminor : string) {

  //    this.hayerror = false;
  //    this.terminor = terminor;

  //    this.RegionService.buscarRegion(this.terminor)
  //    .subscribe ((Regiones) =>{
  //      console.log(Regiones);
  //      this.Region = Regiones;
      
  //    },  (err)=> {
  //      this.hayerror = true;
  //      this.Region =[];
  //    }
  //    );
  //  }

}
