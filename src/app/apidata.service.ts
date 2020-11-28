import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(public http: HttpClient) { }


  getData(): Observable<Country[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '6af220483dmshe35ac42f40b703fp185d4cjsnfb32c02a5481'
      })
    };

    const url = 'https://covid-193.p.rapidapi.com/statistics';
    return this.http.get<Country[]>(url, httpOptions);
  }
}
