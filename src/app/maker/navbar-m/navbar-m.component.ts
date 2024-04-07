
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthServices } from 'src/app/_services/auth.service';
import { StateService } from 'src/app/_services/state.service';
import { TokenService } from 'src/app/_services/token.service';
@Component({
  selector: 'app-navbar-m',
  templateUrl: './navbar-m.component.html',
  styleUrls: ['./navbar-m.component.css']
})

export class NavbarMComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  firstName: string | null = null;
  lastName: string | null = null;
  userRole: string | null = null;
  pathToProfileImage: string | null = null;
  private subscriptions = new Subscription();


  constructor(
    private authService: AuthServices, 
    private tokenService: TokenService,
    private stateService: StateService // Injectez StateService
  ) {}
  ngOnInit() {
    this.isLoggedIn = this.tokenService.isLogged();
    this.userRole = this.tokenService.getUserRole();
    this.subscriptions.add(
      this.stateService.getFirstName().subscribe(name => this.firstName = name)
    );
    this.subscriptions.add(
      this.stateService.getLastName().subscribe(name => this.lastName = name)
    );
    this.subscriptions.add(
      this.stateService.getProfileImageUrl().subscribe(url => this.pathToProfileImage = url)
    );
    
    
   
  }

  ngOnDestroy() {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscriptions.unsubscribe();
  }

 /* logout() {
    this.authService.logout().subscribe(() => {
      this.tokenService.signOut();
      this.stateService.clearUserDetails(); // Nettoyage des données utilisateur
    });
  }*/

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        // L'opération de déconnexion a réussi côté serveur, maintenant nettoyez le côté client
        this.tokenService.signOut(); // Supprimez le token stocké localement
        this.stateService.clearUserDetails(); // Effacez toutes les données d'utilisateur dans le StateService
        // Redirigez l'utilisateur vers la page de connexion ou la page d'accueil après la déconnexion
      },
      error: (error) => {
        // Gérer l'erreur de déconnexion ici
        console.error('Erreur lors de la déconnexion', error);
      }
    });
  }
  






}