import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookserviceService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  updateUser(id: string, updatedData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, updatedData);
  }
}

