import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { AuthenticationService } from './authentication/authentication.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.auth.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }

    request = request.clone({
      setHeaders: {
        Accept: 'application/json'
      }
    });


    return next.handle(request).catch(err => this.handleAuthError(err));
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    // handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {

      this.auth.redirectToLogin();

      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return Observable.of(err.message);
    }
    return Observable.throw(err);
  }
}
