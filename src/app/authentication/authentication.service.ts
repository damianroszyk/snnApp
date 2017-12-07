import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface TokenResponse {
  access_token: string;
  expires_in: number;
}

@Injectable()
export class AuthenticationService {

  constructor(private router: Router, private injector: Injector) { }

  isAuthenticated(): string | null {
    const token = this.getToken();

    if (!token) {
      this.redirectToLogin();
    }

    return token;
  }

  login(form: {password: string, username: string}) {
    const http = this.injector.get(HttpClient);
    return http.post(`${environment.apiUrl}Jwt`, `UserName=${form.username}&Password=${form.password}`);
  }

  logout() {
    this.redirectToLogin();
  }

  getToken(): string {
    return localStorage.getItem(environment.token);
  }

  setToken(token: TokenResponse): void {
    localStorage.setItem(environment.token, token.access_token);
  }

  redirectToLogin() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
