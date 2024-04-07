import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/_services/_editProfile/profile.service';
import { AuthServices } from 'src/app/_services/auth.service';
import { StateService } from 'src/app/_services/state.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-account-security-c',
  templateUrl: './account-security-c.component.html',
  styleUrls: ['./account-security-c.component.css']
})
  export class AccountSecurityCComponent implements OnInit{
  
    currentPassword: string = '';
    newPassword: string = '';
    confirmationPassword: string = '';
    passwordMismatch: boolean = false;
  
    constructor(private http: HttpClient ,
      private authService : AuthServices ,
      private tokenservice : TokenService, 
       private stateService: StateService,
       private profileService: ProfileService,
       private toastr: ToastrService
       ) { }
  
  
    ngOnInit(): void {
        
    }
  
    changePassword() {
      if (this.newPassword !== this.confirmationPassword) {
        this.passwordMismatch = true;
        this.toastr.error('The passwords do not match.');
        return;
      }
      this.passwordMismatch = false;
    
      const changePasswordRequest = {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        confirmationPassword: this.confirmationPassword
      };
    
      this.profileService.changePassword(changePasswordRequest).subscribe({
        next: (response: any) => {
          this.toastr.success('Password updated successfully');
        },
        error: (error: any) => {
          // Ici, on essaye d'afficher le message d'erreur renvoyé par le backend
          const errorMsg = error.error?.message || 'Unknown error occurred.';
          this.toastr.error(`Error updating Password: ${errorMsg}`);
        }
      });
    }
    
  
    logout() {
      this.authService.logout().subscribe(() => {
        this.tokenservice.signOut();
        this.stateService.clearUserDetails(); // Nettoyage des données utilisateur
      });
    }
  
  
  }
  