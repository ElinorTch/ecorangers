import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'localhost:3000/housing';

  constructor(private httpClient: HttpClient) {}

  getHouses(filter?: string): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
