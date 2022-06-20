import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpecialistsService {
  BASE_API_URL = environment.baseURL;

  constructor(private http: HttpClient) {}

  getAllSpecialist(): Observable<any> {
    return this.http.get(`${this.BASE_API_URL}/specialists`);
  }
}
