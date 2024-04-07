import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../_services/token.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);  
  const tokenService: TokenService = inject(TokenService);
  const userRole = tokenService.getUserRole();
  const roles = route.data['roles'] as Array<string>;

  if (!tokenService.isLogged()) {
    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    return router.parseUrl('/auth');
  } else if (userRole && roles && !roles.includes(userRole)) {
    // Si l'utilisateur n'a pas le rôle requis, redirigez-le vers une page d'erreur ou la page d'accueil
    return router.parseUrl('/unauthorized'); // Redirigez vers une page 'Accès refusé' si vous en avez une
  }

  return true;
};
