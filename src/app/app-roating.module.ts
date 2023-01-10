import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './Paises/Pages/por-pais/por-pais.component';
import { PorRegionComponent } from './Paises/Pages/por-region/por-region.component';
import { PorCapitalComponent } from './Paises/Pages/por-capital/por-capital.component';
import { VerPaisComponent } from './Paises/Pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
        path:'',
        component: PorPaisComponent,
        pathMatch:'full'
    },
    {
        path: 'region',
        component: PorRegionComponent        
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule

    ],
})
export class appRoutingModule{

}