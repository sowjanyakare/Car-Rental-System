import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarserviceService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPaymentDetails(payment: any): Observable<any> {
    return this.http.post(this.apiUrl, payment);
  }

  updateUser(id: string, updatedData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, updatedData);
  }
}
