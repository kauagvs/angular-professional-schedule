import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
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

  getSpecialistDetails(id: number) {
    return this.http.get(`${this.BASE_API_URL}/specialists/${id}`);
  }
}
