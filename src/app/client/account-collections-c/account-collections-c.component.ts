import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/_services/auth.service';
import { StateService } from 'src/app/_services/state.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-account-collections-c',
  templateUrl: './account-collections-c.component.html',
  styleUrls: ['./account-collections-c.component.css']
})
export class AccountCollectionsCComponent implements OnInit{

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

