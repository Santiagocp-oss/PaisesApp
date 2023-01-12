import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../Interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais ( termino: string) : Observable<Country[]> { 

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url);
  }

  buscarCapital (terminoc : string): Observable<Country[]>{
   
    const url = `${this.apiUrl}/capital/${terminoc}`;
    return this.http.get<Country[]>( url);
  }
  
  buscarRegion (terminor : string): Observable<Country[]>{
   
    const url = `${this.apiUrl}/region/${terminor}`;
    return this.http.get<Country[]>( url);
  }


  getPaisPorAlpha(id : string): Observable<Country[]>{
   
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>( url);
  }

}
