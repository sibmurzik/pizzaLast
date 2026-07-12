import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, retry, tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  private products: ProductType[] = [];

  getProducts() : Observable<ProductType[]> {
    //ajax

    return this.http.get<ProductType[]>(environment.apiUrl + 'pizzas');

  }

  getProduct(id: number) :Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiUrl + 'pizzas?id=${id}');
  }

  createOrder(data:{product: string, address:string, phone:string}) {
    return this.http.post<{success:boolean, message?:string}>(environment.apiUrl+'order-pizza', data);

  }


}
