import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_API_URL = environment.baseURL;

  constructor(private http: HttpClient, private router: Router) {}

  authenticate(credentials: { email: string; password: string }) {
    const params = new HttpParams().set('email', credentials.email);
    return this.http
      .get<User[]>(`${this.BASE_API_URL}/account`, { params })
      .pipe(
        map((result) => {
          const user = result.find((account: User) => {
            return (
              account.email === credentials.email &&
              account.password === credentials.password
            );
          });
          if (user) {
            const sessionAuthToken = `user-${user.email}-${user.name}-token`;
            localStorage.setItem(
              'sessionAuthToken',
              JSON.stringify(sessionAuthToken)
            );

            localStorage.setItem('sessionUserName', JSON.stringify(user.name));

            return 'success';
          } else {
            return 'invalid';
          }
        })
      );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('sessionAuthToken');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  getUserName(): String | null {
    const userName = localStorage.getItem('sessionUserName');

    if (userName) {
      return JSON.parse(userName);
    }

    return null;
  }
}
