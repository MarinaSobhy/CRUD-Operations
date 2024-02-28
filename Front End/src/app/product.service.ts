import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:50134/api/products';

  constructor(private http: HttpClient) { }

  AddProduct(product:any):Observable<any>{
    return this.http.post(this.url,product);
  }

  GetProducts(){
    return this.http.get(this.url);
  }
  UpdateProduct(id:number , product:any):Observable<any>{
    return this.http.put(this.url+"/"+id,product);
  }
  DeleteProduct(id:number):Observable<any>{
    const options = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
      }),
    };
    return this.http.delete(this.url+"/"+id,options)
  }
}
