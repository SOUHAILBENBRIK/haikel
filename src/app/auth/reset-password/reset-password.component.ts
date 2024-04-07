import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServices } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
  otp: string = '';
  email: string = '';
  password: string = ''; // Assurez-vous d'avoir cette propriété pour le ngModel
  confirmPassword: string = '';


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.otp = params['otp'];
    });

    console.log(this.email);
    console.log(this.otp);
    console.log(this.password);
  }

  constructor( private router: Router, private authServices :  AuthServices,private route: ActivatedRoute  ) {
  }
  resetpasswordWithOTP() {
    if (!this.password) {
      // Afficher une erreur si le mot de passe n'est pas saisi
      console.error("Password is required");
      return;
    }
    if (this.password !== this.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    this.authServices.resetPasswordWithOTP(this.email, this.otp, this.password).subscribe(
      (response) => {
        // Traiter la réponse en cas de succès
        console.log("Password reset successful!", response);
        // Ici, redirigez l'utilisateur vers la page de connexion ou affichez un message de succès
        this.router.navigate(['/auth']);
      },
      (error) => {
        // Traiter les erreurs
        console.error("Password reset failed", error);
        // Ici, affichez un message d'erreur à l'utilisateur
      }
    );
  }


 
  

}
