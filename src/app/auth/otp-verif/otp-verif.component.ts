import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-verif',
  templateUrl: './otp-verif.component.html',
  styleUrls: ['./otp-verif.component.css']
})
export class OtpVerifComponent implements OnInit {
  email: string = '';
  otpInputs: string[] = ['', '', '', '', '', '']; // Pour stocker les valeurs des 6 champs d'entrée

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }
  onOtpInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    this.otpInputs[index] = input.value;
  
    if (input.value && index < 5) {
      // Déplacez le focus vers le champ suivant si ce n'est pas le dernier champ
      const nextInput = (event.target as HTMLElement).nextElementSibling as HTMLInputElement;
      nextInput?.focus();
    }
  
    // Si tous les champs d'entrée sont remplis, activez le bouton "Continue"
    const isOtpComplete = this.otpInputs.every(otp => otp.length === 1);
    if (isOtpComplete) {
      // Ici, vous pouvez activer le bouton ou déclencher une autre action si nécessaire
    }
  }

  navigateToSetNewPassword(): void {
    const otp = this.otpInputs.join('');
    if (otp.length === 6) {
      this.router.navigate(['/auth/reset-password/set'], { queryParams: { email: this.email, otp } });
    } else {
      // Ici, vous pouvez afficher un message d'erreur si l'OTP n'est pas complet
    }
  }
}