import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { 

  }

  

  saveToken (token : string) : void {
    localStorage.setItem("accessToken", token);
    //this.router.navigate(['auth'])

  }

  isLogged(): boolean{
    const token = localStorage.getItem('accessToken')
    console.log(token)
    return !! token // transform un variable en boollean 
  }

  clearTokenExpired(): void{
    localStorage.removeItem('accessToken')
    //this.router.navigate(['auth'])
  }

  getToken (): string  | null {
    return localStorage.getItem('accessToken')
  }

  saveRole(role: string): void {
    localStorage.setItem("userRole", role);
  }
  getUserRole(): string | null {
    return localStorage.getItem("userRole");
  }
  clearUserRole(): void {
    localStorage.removeItem('userRole');
  }

  // ... dans TokenService

signOut(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userRole');

  // Redirigez l'utilisateur vers la page de connexion
  this.router.navigate(['auth/login']);
}



  //  My  refreshtoken

saveRefreshToken(token: string): void {
  localStorage.setItem('refreshToken', token);
}

getRefreshToken(): string | null {
  return localStorage.getItem('refreshToken');
}

clearRefreshToken(): void {
  localStorage.removeItem('refreshToken');
}

  
  

}
