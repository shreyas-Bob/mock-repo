import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root',
})
export class ApiService{
    /** GET heroes from the server */
    constructor(
        private http: HttpClient){
    }
    private url='https://localhost:4200';
getHeroes(): Observable<any> {
    const baseUrl= `${this.url}/get`
    return this.http.get(baseUrl)
  }
}