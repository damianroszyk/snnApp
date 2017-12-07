import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanLoad {

  constructor(private auth: AuthenticationService) {}

  canLoad(route: Route): boolean {
    return !!this.auth.isAuthenticated();
  }
}
