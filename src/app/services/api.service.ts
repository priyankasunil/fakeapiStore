import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductById(id : any){
    return this.http.get<any>("https://fakestoreapi.com/products/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
