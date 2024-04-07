import { Component, OnInit } from '@angular/core';
import {  CountryService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserForm } from 'src/app/_Interfaces/UserForm';
import { HttpClient } from '@angular/common/http';
import { AuthServices } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { accelerate } from '@cloudinary/url-gen/actions/effect';

@Component({
  selector: 'app-manufacturersignup',
  templateUrl: './manufacturersignup.component.html',
  styleUrls: ['./manufacturersignup.component.css']
})
export class ManufacturersignupComponent implements OnInit {
  
  countriesAndCities: any = {}; // Utilisez 'any' ou créez une interface appropriée
  countries: string[] = [];
  selectedCountry?: string;
  cities: string[] = [];

  userForm: UserForm = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    city: '',
    role: '',
    agreeTerms: false
  };
  passwordMismatch: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  formSubmitted: boolean = false;
  passwordFieldTouched: boolean = false;
  confirmPasswordFieldTouched: boolean = false;


  constructor(private http: HttpClient, private router: Router , 
              private contrySevices: CountryService , 
              private authServices : AuthServices,
              private route : ActivatedRoute ,
              private toastr: ToastrService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userForm.role = params['role'] || ''; // Utilisez une valeur par défaut si 'role' n'est pas spécifié
    });
    
    this.contrySevices.getCountries().subscribe(data => {
      this.countriesAndCities = data;
      this.countries = Object.keys(data);
    });
  }


  onCountryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCountry = selectElement.value;
    this.cities = this.selectedCountry ? this.countriesAndCities[this.selectedCountry] : [];
  }
  change(): void {
    // Your custom logic here
    console.log('Link clicked');
    alert("fsdfsdf")
  }
  checkPasswordMatch() {
    // Mettre à jour les états touchés
    this.passwordFieldTouched = true;
    this.confirmPasswordFieldTouched = true;
    // Vérifier la correspondance des mots de passe
    this.passwordMismatch = this.userForm.password !== this.userForm.confirmPassword;
  }

  onSubmit() {
    this.formSubmitted = true; // Marquer le formulaire comme soumis
    this.checkPasswordMatch();
    this.toastr.info(`Please verify your email: ${this.userForm.email}`, 'Verification Required');

    if (!this.passwordMismatch) {
      console.log('Form submitted', this.userForm);
  
      // Effectuer l'appel au service d'inscription sans attendre la réponse pour rediriger
      this.authServices.register(this.userForm).subscribe({
        next: (response: any) => {
          console.log(response);
          // Ici, vous pouvez gérer la réponse de succès si nécessaire
        },
        error: (error: any) => {
          console.error('Registration failed', error);
          // Ici, vous pouvez gérer l'échec de l'inscription si nécessaire
        }
      });
  
      // Rediriger immédiatement vers la page de connexion
      this.router.navigateByUrl('/auth');
    } else {
      console.error('The passwords must match');
      // Afficher un message d'erreur si les mots de passe ne correspondent pas
    }
  }
  
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }



}


