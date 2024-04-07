import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServices } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';
import { StateService } from 'src/app/_services/state.service';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/_services/_editProfile/profile.service';
import { UserForm } from 'src/app/_Interfaces/UserForm';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { UploadService } from '../../_services/_editProfile/upload.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  countriesAndCities: any = {};
  countries: string[] = [];
  selectedCountry?: string;
  cities: string[] = [];
  firstName: string | null = null;
  lastName: string | null = null;

  user: UserForm = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    //password: '',
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
  files: File[]= [];
  private subscriptions = new Subscription();

  @ViewChild('hiddenFileInput') hiddenFileInput: ElementRef;

  triggerFileInput() {
    // Déclenchez le clic sur le champ de saisie de fichier caché
    this.hiddenFileInput.nativeElement.click();
  }

  photoUrll : string ="haykouilphoto";

  



  constructor(private http: HttpClient ,
    private authService : AuthServices ,
    private tokenservice : TokenService, 
     private stateService: StateService,
     private router :Router ,
     private countryService: CountryService,
     private profileService: ProfileService,
     private toastr: ToastrService,
     private uploadService: UploadService,
     private changeDetectorRef: ChangeDetectorRef
     ) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countriesAndCities = data;
      this.countries = Object.keys(data);
      this.subscriptions.add(
        this.stateService.getFirstName().subscribe(name => this.firstName = name)
      );
      this.subscriptions.add(
        this.stateService.getLastName().subscribe(name => this.lastName = name)
      );
  });

  this.loadUserInfo();
 // this.updateUserProfilePicture(this.photoUrll);

  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

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

onSelect(event:any){
  console.log(event);
  this.files.push(...event.addedFiles);

}
onRemove (event:any){
  console.log(event);
  this.files.splice(this.files.indexOf(event),1)

}
uploadFiles() {
  if (this.files.length > 0) {
    const fileData = this.files[0];
    const formData = new FormData();
    formData.append('file', fileData);
    formData.append('upload_preset', 'ml_default');
    formData.append('cloud_name', 'dcwdkktos');
    
    this.uploadService.uploadImage(formData).subscribe(
      (res) => {

        this.stateService.setProfileImageUrl(res.secure_url); // Mettez à jour le StateService


        this.updateUserProfilePicture(res.secure_url);

        this.hiddenFileInput.nativeElement.value = ''; // Réinitialiser le champ fichier
        this.files = []; // Réinitialiser le tableau de fichiers
      },
      (error) => {
        this.toastr.error('Problème lors de l\'upload de l\'image');
        console.error(error);
      }
    );
  } else {
    this.toastr.warning('Veuillez sélectionner une image à uploader');
  }
}


updateUserProfilePicture(photoUrl: string) {
  const uniqueUrl = photoUrl + '?timestamp=' + new Date().getTime();
  
  this.profileService.updateUserProfilePicture(uniqueUrl).subscribe(
    (res) => {
      this.user.photoUrl = uniqueUrl;
      this.toastr.success('Image de profil mise à jour avec succès');
      this.changeDetectorRef.detectChanges();
      this.loadUserInfo(); // Recharger les informations de l'utilisateur
      // Récupérer l'URL mise à jour de l'image de profil et la stocker dans le StateService
      this.stateService.setProfileImageUrl(uniqueUrl); // Mettre à jour l'URL dans StateService

    },
    (error) => {
      this.toastr.error('Problème lors de la mise à jour de l\'image de profil');
      console.error(error);
    }
  );
}

handleImageError() {
  // Incorporez une logique ici pour gérer une erreur de chargement d'image
  // Par exemple, en affectant une image de substitution ou en réessayant le chargement de l'image
  // ou forcer le rechargement de l'image
  this.user.photoUrl += `?dummy=${new Date().getTime()}`;
}



}

