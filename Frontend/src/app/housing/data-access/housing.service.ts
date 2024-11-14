import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/housing/all';

  constructor(private httpClient: HttpClient) {}

  getHouses(filter?: string): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
