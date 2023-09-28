import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  /// Get All Basket Orders ///
  getAllOrders(filteredData: any): Observable<Object> {
    return this.http.post(
      environment.api + environment.getOrders,
      filteredData
    );
  }

  /// Get Each Order Details ///
  getItemOrder(id: number): Observable<Object> {
    return this.http.get(
      environment.api + environment.getOrderItems + `/${id}`
    );
  }

  /// Get Invidiual Item Details ///
  getItemOrderDetails(id: number) {
    return this.http.get(environment.getOrder + `/${id}`);
  }
}
