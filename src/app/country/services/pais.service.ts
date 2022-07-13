import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http:HttpClient) { };

  buscarPais(termino:string):Observable<Country[]>{
    const URL=`${this.apiUrl}/name/${termino}?fields=flag,name,population,capital,alpha2Code`;
    

    return this.http.get<Country[]>(URL);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const URL=`${this.apiUrl}/capital/${termino}?fields=flag,name,population,capital,alpha2Code`;
    

    return this.http.get<Country[]>(URL);
  }

  getPaisPorAlpha(id:string):Observable<Country[]>{
    const URL=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(URL);
  }

  getCountryByRegion(region:string):Observable<Country[]>{
    const URL=`${this.apiUrl}/regionalbloc/${region}?fields=flag,name,population,capital,alpha2Code`;
    return this.http.get<Country[]>(URL);
  }
}
