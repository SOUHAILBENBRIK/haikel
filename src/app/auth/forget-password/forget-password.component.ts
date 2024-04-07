import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthServices } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  mail: string = ''; // Propriété pour stocker l'e-mail
  formSubmitted: boolean = false;
  



  ngOnInit(): void { 
  }
 constructor( private router: Router, private authServices :  AuthServices,  ) {
}

onSubmit(){
  this.formSubmitted = true; // Marquer le formulaire comme soumis
  if (this.mail) { // Vérifiez si l'e-mail n'est pas vide
    this.regenerateOtp();
   // this.router.navigate(['/auth/reset-password/verify']);
   this.router.navigate(['/auth/reset-password/verify'], { queryParams: { email: this.mail } });

  }
  else {
    console.log("email vid");

  }

}

regenerateOtp() {
  this.authServices.regenerateOtp(this.mail).subscribe(
    (response: string) => { 
      if (response.includes('Email sent')) {
        // Le texte de la réponse indique que l'e-mail a été envoyé avec succès
        // Vous pouvez afficher un message à l'utilisateur ou rediriger vers une autre page
        //this.router.navigate(['/auth/reset-password/verify']);
        console.log('Response from server:', response);


      } else {
        // Sinon, il y a eu une erreur
        console.error('Error regenerating OTP:', response);
        // Afficher le message d'erreur à l'utilisateur ou effectuer toute autre action appropriée
      }
    },
    (error) => {
      console.error('Error regenerating OTP', error);
    }
  );
}

}
