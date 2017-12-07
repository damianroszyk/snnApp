import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Product  {
  productID: number;
  price: number;
  name: string;
  description: string;
}

@Injectable()
export class ProductsService {
  productsUrl = `${environment.apiUrl}Products`;
  private _products$ = new BehaviorSubject<Product[]>(null);
  products$ = this._products$.asObservable();

  constructor(private http: HttpClient) {}

  // load products and emit observable to subscribers
  getProducts(): void {
    const subscription = this.http.get<Product[]>(this.productsUrl)
      .subscribe(
        (products: Product[]) => {
          this._products$.next(products);
        },
        // proper error handling for this should be implemented
  error => console.log(error)
      );
  }

  // add new product to list ( no ID on creation )
  addProduct(form): void {
    const subscription = this.http.post(this.productsUrl, form)
      .subscribe(response => {
        this._products$.next([...this._products$.value, form]);
      },
  error => console.log(error)
      );
  }

  // delete product from the list
  deleteProduct(id: number): void {
    const subscription = this.http.delete(`${this.productsUrl}/${id}`)
      .subscribe(response => {
        this._products$.next(this._products$.value.filter(product => product.productID !== id));
      },
  error => console.log(error)
      );
  }
}
