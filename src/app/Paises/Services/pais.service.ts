import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Country } from '../Interfaces/pais.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1';

  get HttpParams () {
    return new HttpParams().set('fields', 'name,capital,cca2,ccn3,flags,population')
  }

  constructor( private http: HttpClient) { }

  buscarPais ( termino: string) : Observable<Country[]> { 

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url, {params : this.HttpParams});
  }

  buscarCapital (terminoc : string): Observable<Country[]>{
   
    const url = `${this.apiUrl}/capital/${terminoc}`;
    return this.http.get<Country[]>( url, {params : this.HttpParams});
  }
  
  // buscarRegion (terminor : string): Observable<Country[]>{
   
  //   const url = `${this.apiUrl}/region/${terminor}`;
  //   return this.http.get<Country[]>( url);
  // }


  getPaisPorAlpha(id : string): Observable<Country>{
   
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>( url);
  }

  buscarRegion(region :string): Observable<Country[]>{


    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>( url, {params : this.HttpParams})
    .pipe(
      tap(console.log)
      )    

  }

}
