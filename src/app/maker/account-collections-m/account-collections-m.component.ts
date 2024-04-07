import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/_services/auth.service';
import { StateService } from 'src/app/_services/state.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-account-collections-m',
  templateUrl: './account-collections-m.component.html',
  styleUrls: ['./account-collections-m.component.css']
})
export class AccountCollectionsMComponent implements OnInit{

  constructor(private http: HttpClient ,
    private authService : AuthServices ,
    private tokenservice : TokenService, 
     private stateService: StateService) { }


  ngOnInit(): void {
      
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.tokenservice.signOut();
      this.stateService.clearUserDetails(); // Nettoyage des données utilisateur
    });
  }

}
