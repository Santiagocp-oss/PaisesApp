import { Component } from '@angular/core';
import { Country } from '../../Interfaces/pais.interfaces';
import { PaisService } from '../../Services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
  
  `
]
})
export class PorCapitalComponent {

  terminoc : string = '';
  hayerror : boolean = false;
  capital : Country[] = [];

  capitalSugeridos : Country[] = [];
  mostrarSugerencias : boolean = false;

  constructor( private CapitalService : PaisService) {

  }

  Buscar ( terminoc: string){

    this.hayerror = false;
    this.terminoc = terminoc;

    this.CapitalService.buscarCapital(this.terminoc)
    .subscribe ((Capitales)=>{
      console.log(Capitales);
      this.capital = Capitales;
      
    },(err) => {
      this.hayerror = true;
      this.capital = [];
    }
    );

  }

  sugerencias(terminoc : string){
    this.hayerror = false; 
    this.terminoc = terminoc;
    this.mostrarSugerencias= true;

    this.CapitalService.buscarCapital( this.terminoc)
    .subscribe(capital => this.capitalSugeridos = capital.splice(0,5),
    (err)=> this.capitalSugeridos = []
    // TODO : CREAR SUGERENCIAS
    )

  }
    buscarSugerido( terminoc : string){
      this.Buscar(terminoc),
      this.mostrarSugerencias = false;

    }


}
