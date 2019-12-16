import { Injectable } from '@angular/core';
import { Cars } from './cars';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  cars: Cars[] =[]  
  private productUrl = 'http://localhost:4200/assets/cars.json';
  
  constructor( private http: HttpClient) { }  
  
  getCars() : Observable<Cars []>{ 
    return this.http.get<Cars[]>(this.productUrl);    
  }
  
}
