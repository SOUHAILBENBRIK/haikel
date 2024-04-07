import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredential } from '../_Interfaces/ICredential';
import { IToken } from '../_Interfaces/IToken';
import { Observable, tap } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  URL='http://localhost:8081';

  constructor(private http: HttpClient , private stateService:StateService) { }

  public register(credentials: any): any {
    return this.http.post(this.URL+ '/auth/register', credentials);
  }

  public login(credentials: ICredential) {
    return this.http.post<IToken>(this.URL+ '/auth/login', credentials).pipe(
      tap(response => {
        // Stockez le token si nécessaire
        // ...
        // Mettez à jour le StateService avec le firstName et lastName
        this.stateService.setFirstName(response.user.firstName);
        this.stateService.setLastName(response.user.lastName);
        this.stateService.setProfileImageUrl(response.user.photoUrl);

        // Mettez à jour les autres informations d'état au besoin
        // ...
      })
    );
  }
  


  public regenerateOtp(email: string): Observable<string> {
    // Utilisez une surcharge de type pour spécifier que le responseType est 'text'
    return this.http.put(this.URL + '/users/regenerate-otp?email=' + email, {}, { responseType: 'text' });
  }

  public resetPasswordWithOTP(email: string, otp: string, newPassword: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('otp', otp)
      .set('newPassword', newPassword);
    
      return this.http.put(`${this.URL}/users/reset-password-with-otp`, null, { params, responseType: 'text' });
    }

  
    public refreshToken(refreshToken: string): Observable<IToken> {
      // Créez des headers pour inclure le refresh token dans l'Authorization header
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${refreshToken}`
      });
    
      // Puisque le backend n'a pas besoin de corps pour cette requête, envoyez un objet vide.
      return this.http.post<IToken>(`${this.URL}/auth/refresh-token`, {}, { headers });
    }

    public logout(): Observable<any> {
      return this.http.post(this.URL + '/logout', {}).pipe(
        tap(() => {
          this.stateService.clearUserDetails(); // Effacez toutes les données utilisateur
          // Autres nettoyages si nécessaire...
        })
      );
    }
    
    
   
   
    
    
    
  


}
