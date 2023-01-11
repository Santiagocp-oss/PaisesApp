import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './Pages/por-capital/por-capital.component';
import { PorPaisComponent } from './Pages/por-pais/por-pais.component';
import { PorRegionComponent } from './Pages/por-region/por-region.component';
import { VerPaisComponent } from './Pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { appRoutingModule } from '../app-roating.module';
import { PaisTablaComponent } from './Components/pais-tabla/pais-tabla.component';
import { PaisImputComponent } from './Components/pais-imput/pais-imput.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisImputComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    appRoutingModule
  ]
})
export class PaisesModule { }
