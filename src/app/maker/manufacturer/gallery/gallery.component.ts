import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UploadService } from 'src/app/_services/_editProfile/upload.service';
import { StateService } from 'src/app/_services/state.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  files:File[]=[]
  private subscriptions = new Subscription();

  @ViewChild('hiddenFileInput') hiddenFileInput: ElementRef;

  triggerFileInput() {
    // Déclenchez le clic sur le champ de saisie de fichier caché
    this.hiddenFileInput.nativeElement.click();
  }
  
  constructor(private http: HttpClient ,
    private tokenservice : TokenService, 
     private stateService: StateService,
     
     private toastr: ToastrService,
     private uploadService: UploadService,
     ) { }

  ngOnInit(): void {
      
  }

  user = {
    photoUrl: 'path-to-your-placeholder-image.png'
  };

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles)
    // Handle file selection
    
    // Commencez le processus de téléchargement immédiatement après la sélection du fichier
    this.uploadFiles();
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
         // ... gérer la réponse du téléchargement
         this.toastr.success('Image uploaded successfully!');
         this.hiddenFileInput.nativeElement.value = '';
         this.files = [];

      //  this.stateService.setProfileImageUrl(res.secure_url); // Mettez à jour le StateService


        //this.updateUserProfilePicture(res.secure_url);

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

  onRemove (event:any){
    console.log(event);
    this.files.splice(this.files.indexOf(event),1)
  
  }

}
