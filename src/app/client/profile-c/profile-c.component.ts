import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServices } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { StateService } from 'src/app/_services/state.service';
import { CountryService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/_services/_editProfile/profile.service';
import { UserForm } from 'src/app/_Interfaces/UserForm';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-c',
  templateUrl: './profile-c.component.html',
  styleUrls: ['./profile-c.component.css']
})
export class ProfileCComponent implements OnInit {
  countriesAndCities: any = {};
  countries: string[] = [];
  selectedCountry?: string;
  cities: string[] = [];

  user: UserForm = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
   // password: '',
    //confirmPassword: '',
    country: '',
    city: '',
    role: '',
    photoUrl:'',
    phoneNumber:'',
    codepostal:'',
    agreeTerms: false
  };
  formSubmitted: boolean = false;
  updateSuccess: boolean = false; // Ajouté pour suivre l'état de la mise à jour
  isEditMode: boolean = false;



  constructor(private http: HttpClient ,
    private authService : AuthServices ,
    private tokenservice : TokenService, 
     private stateService: StateService,
     private countryService: CountryService,
     private profileService: ProfileService,
     private toastr: ToastrService

     ) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countriesAndCities = data;
      this.countries = Object.keys(data);
  });
  this.http.get('http://localhost:8081/demo/hello').subscribe(
    data=>console.log(data),
    err=>console.log(err)
  )
  this.loadUserInfo();

}
toggleEditMode() {
  this.isEditMode = !this.isEditMode;
}



//onClick(): void {
  // Logique à exécuter lorsque le bouton est cliqué
 // console.log('Button clicked!');
 // console.log('refresh token', this.tokenservice.getRefreshToken())*/

 

 // this.refreshtoken();
  // Vous pouvez appeler d'autres méthodes ici si nécessaire
// }
logout() {
  this.authService.logout().subscribe(() => {
    this.tokenservice.signOut();
    this.stateService.clearUserDetails(); // Nettoyage des données utilisateur
  });
}
onCountryChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedCountry = selectElement.value;
  this.cities = this.selectedCountry ? this.countriesAndCities[this.selectedCountry] : [];
}

updateProfile() {
  this.formSubmitted = true;
  this.profileService.updateUser(this.user).subscribe({
    next: (response: any) => {
      if (this.user.firstName) {
        this.stateService.setFirstName(this.user.firstName);
      }
      if (this.user.lastName) {
        this.stateService.setLastName(this.user.lastName);
      }
      console.log('Before toastr call');
      this.toastr.success('Account updated successfully');
      console.log('After toastr call');
      // ...
    },
    error: (error: any) => {
      console.error('Failed to update profile', error);
      this.toastr.error('Error updating account');

      // ...
    }
  });
}



loadUserInfo() {
  this.profileService.getUserInfo().subscribe(user => {
    this.user = { ...this.user, ...user };
    // Assurez-vous de gérer les erreurs et de définir les champs nécessaires
  }, error => {
    console.error("Erreur lors de la récupération des informations de l'utilisateur", error);
    // Gestion des erreurs (par exemple, redirection vers la page de connexion)
  });
}




}


