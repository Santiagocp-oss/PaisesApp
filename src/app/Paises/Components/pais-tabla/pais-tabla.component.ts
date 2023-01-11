import { Component, Input } from '@angular/core';
import { Country } from '../../Interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() paises : Country[] = [];

}
