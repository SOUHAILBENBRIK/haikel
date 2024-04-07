import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, filter, finalize, switchMap, take, tap, throwError } from 'rxjs';
import { TokenService } from '../_services/token.service';
import { AuthServices } from '../_services/auth.service';
import { IToken } from '../_Interfaces/IToken';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private tokenService: TokenService, private authService: AuthServices) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Vérifiez si la requête est destinée à Cloudinary
  if (request.url.includes('cloudinary.com')) {
    // Si c'est le cas, transmettez la requête sans l'en-tête 'Authorization'
    return next.handle(request);
  }
 
    if (!this.isLoginOrRefreshTokenRequest(request)) {
      const token = this.tokenService.getToken();
      if (token) {
        request = this.addToken(request, token);
      }
    }
  

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !this.isLoginOrRefreshTokenRequest(request)) {
          return this.handle401Error(request, next);
        } else {
          const errorMsg = error.error?.message || error.statusText || "Unknown error occurred";
          return throwError(() => new Error(errorMsg));
        }
      })
    );
  }

  private isLoginOrRefreshTokenRequest(request: HttpRequest<any>): boolean {
    const loginPath = '/auth/login';
    const refreshTokenPath = '/auth/refresh-token';
    return request.url.endsWith(loginPath) || request.url.endsWith(refreshTokenPath);
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = this.tokenService.getRefreshToken();
  
      if (refreshToken) {
        return this.authService.refreshToken(refreshToken).pipe(
          switchMap((token: IToken) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.access_token);
            console.log('New access token:', token.access_token); // Log pour débogage
            console.log('New refresh token:', token.refresh_token); // Log pour débogage
            this.tokenService.saveToken(token.access_token);
            this.tokenService.saveRefreshToken(token.refresh_token);
            return next.handle(this.addToken(request, token.access_token));
          }),
          catchError((refreshError) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(null);
            this.tokenService.signOut();
            const refreshErrorMsg = refreshError.error?.message || refreshError.statusText || "Failed to refresh token";
            return throwError(() => new Error(refreshErrorMsg));
          }),
          finalize(() => this.isRefreshing = false)
        );
      } else {
        this.tokenService.signOut();
        return throwError(() => new Error('No refresh token available'));
      }
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(request, token!));
        })
      );
    }
  }
}




export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};
