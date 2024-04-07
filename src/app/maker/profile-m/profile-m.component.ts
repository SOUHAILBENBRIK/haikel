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
import { Observable } from 'rxjs';
import { UploadService } from '../../_services/_editProfile/upload.service';


@Component({
  selector: 'app-profile-m',
  templateUrl: './profile-m.component.html',
  styleUrls: ['./profile-m.component.css']
})
export class ProfileMComponent implements OnInit {
  countriesAndCities: any = {};
  countries: string[] = [];
  selectedCountry?: string;
  cities: string[] = [];

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
  });
  this.http.get('http://localhost:8081/demo/hello').subscribe(
    data=>console.log(data),
    err=>console.log(err)
  )
  this.loadUserInfo();
 // this.updateUserProfilePicture(this.photoUrll);

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

/*private updateUserProfilePicture(photoUrl: string) {
  this.profileService.updateUserProfilePicture(photoUrl).subscribe(
    (response: any) => {
      console.log(response);
      this.toastr.success('Profile picture updated successfully!');
    },
    (error: any) => {
      console.error('Failed to update profile picture:', error);
      this.toastr.error('Failed to update profile picture.');
    }
  );
}*/










// This method is triggered when the user selects a file
/*onSelect(event: any): void {
  this.files = event.target.files; // If you're handling multiple files, you would push to an array
  if (this.files.length > 0) {
    this.uploadFiles();
  }
}

onRemove (event:any){
  console.log(event);
  this.files.splice(this.files.indexOf(event),1)

}



// This method uploads the file to Cloudinary and gets the image URL
uploadFiles(): void {
  const file_data = this.files[0]; // We're assuming single file upload here
  const data = new FormData();
  data.append('file', file_data);
  data.append('upload_preset', 'ml_default'); // Your Cloudinary upload preset
  data.append('cloud_name', 'dcwdkktos'); // Your Cloudinary cloud name

  // Call your UploadService method to handle the Cloudinary upload
  this.uploadService.uploadImage(data).subscribe((res) => {
    // If successful, res should contain the URL of the uploaded image
    this.updateUserProfilePicture(res.secure_url); // Call another method to update the user's profile picture
  }, (error) => {
    // Handle upload error
    console.error("Error uploading file: ", error);
  });
}



// This method updates the user's profile picture URL in the database
updateUserProfilePicture(photoUrl: string): void {
  this.profileService.updateUserProfilePicture(photoUrl).subscribe((response) => {
    // Handle successful update
    this.user.photoUrl = photoUrl; // Update the user object's photo URL to refresh the image displayed
  }, (error) => {
    // Handle error in update
    console.error("Error updating profile picture: ", error);
  });
}

}*/


