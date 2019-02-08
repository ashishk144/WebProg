import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {
  login: boolean = false;
  products: any;
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any> {
      console.log("products received");
      this.products = this.http.get('http://127.0.0.1:3000')
      console.log(this.products);
      return this.products;
  }
  validate(item: any) {
    this.http.post('http://localhost:3000/login', item).subscribe(next => 
      console.log(next)
    );
  }
  register(user: any) {
    this.http.post('http://localhost:3000/register', user).subscribe(next => console.log(next));
  }
}
