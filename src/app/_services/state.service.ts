import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private firstName = new BehaviorSubject<string | null>(this.cookieService.get('firstName'));
  private lastName = new BehaviorSubject<string | null>(this.cookieService.get('lastName'));
  private profileImageUrl = new BehaviorSubject<string | null>(this.cookieService.get('profileImageUrl'));
  private email = new BehaviorSubject<string | null>(this.cookieService.get('email'));
  private address = new BehaviorSubject<string | null>(this.cookieService.get('address'));
  private city = new BehaviorSubject<string | null>(this.cookieService.get('city'));
  private country = new BehaviorSubject<string | null>(this.cookieService.get('country'));
  private phoneNumber = new BehaviorSubject<string | null>(this.cookieService.get('phoneNumber'));
  private codepostal = new BehaviorSubject<string | null>(this.cookieService.get('codepostal'));





  constructor(private cookieService: CookieService) { }

  // Utilisez le service CookieService pour gérer les informations d'état
  setFirstName(name: string): void {
    // Supprimez l'ancien cookie avant d'en définir un nouveau
    this.cookieService.delete('firstName', '/');
    this.cookieService.set('firstName', name, { path: '/'});
    this.firstName.next(name);
  }
  getFirstName(): Observable<string | null> {
    return this.firstName.asObservable();
  }

  setLastName(name: string): void {
    // Supprimez l'ancien cookie avant d'en définir un nouveau
    this.cookieService.delete('lastName', '/');
    this.cookieService.set('lastName', name, { path: '/'});
    this.lastName.next(name);
  }
  getLastName(): Observable<string | null> {
    return this.lastName.asObservable();
  }

  clearUserDetails(): void {
    this.cookieService.delete('firstName');
    this.cookieService.delete('lastName');
    this.cookieService.delete('profileImageUrl');
    this.cookieService.delete('email');
    this.cookieService.delete('address');
    this.cookieService.delete('city');
    this.cookieService.delete('country');
    this.cookieService.delete('phoneNumber');
    this.cookieService.delete('codepostal');


    this.firstName.next(null);
    this.lastName.next(null);
    this.profileImageUrl.next(null);
    this.email.next(null);
    this.address.next(null);
    this.city.next(null);
    this.country.next(null);
    this.phoneNumber.next(null);
    this.codepostal.next(null);



  }

  setProfileImageUrl(url: string): void {
    // Empêche la mise en cache du navigateur en ajoutant un timestamp à l'URL
    const uniqueUrl = url + '?timestamp=' + new Date().getTime();
  
    // Supprimez l'ancien cookie avant d'en définir un nouveau
    this.cookieService.delete('profileImageUrl', '/');
    this.cookieService.set('profileImageUrl', uniqueUrl, { path: '/' });
  
    // Notifie tous les abonnés de la nouvelle valeur
    this.profileImageUrl.next(uniqueUrl);
  }
  
  
  getProfileImageUrl(): Observable<string | null> {
    return this.profileImageUrl.asObservable();
  }
  
  clearProfileImageUrl(): void {
    this.cookieService.delete('profileImageUrl');
    this.profileImageUrl.next('');
  }


  // Utilisez le service CookieService pour gérer les informations d'état
  setEmail(name: string): void {
    this.cookieService.delete('email', '/');
    console.log('Setting email:', name);
    this.cookieService.set('email', name, { path: '/'});
    this.email.next(name);
  }
  getEmail(): Observable<string | null> {
    return this.email.asObservable();
  }

  //address:
  setAddress(name: string): void {
    this.cookieService.delete('address', '/');
    this.cookieService.set('address', name, { path: '/'});
    this.address.next(name);
  }
  getAddress(): Observable<string | null> {
    return this.address.asObservable();
  }

  //city
  setCity(name: string): void {
    this.cookieService.delete('city', '/');
    this.cookieService.set('city', name, { path: '/'});
    this.city.next(name);
  }
  getCity(): Observable<string | null> {
    return this.city.asObservable();
  }

  //country
  setCountry(name: string): void {
    this.cookieService.delete('country', '/');
    this.cookieService.set('country', name, { path: '/'});
    this.country.next(name);
  }
  getCountry(): Observable<string | null> {
    return this.country.asObservable();
  }

//phoneNumber

setPhoneNumber(name: string): void {
  this.cookieService.delete('phoneNumber', '/');
  this.cookieService.set('phoneNumber', name, { path: '/'});
  this.phoneNumber.next(name);
}
getPhoneNumber(): Observable<string | null> {
  return this.phoneNumber.asObservable();
}

//codepostal

setCodepostal(name: string): void {
  this.cookieService.delete('codepostal', '/');
  this.cookieService.set('codepostal', name, { path: '/'});
  this.codepostal.next(name);
}
getCodepostal(): Observable<string | null> {
  return this.codepostal.asObservable();
}
}