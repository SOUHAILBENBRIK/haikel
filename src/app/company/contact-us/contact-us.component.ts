import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../_services/_company/contactus.service';
import { IContactUs } from 'src/app/_Interfaces/IContactUs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsModel: IContactUs = {
    fullName: '',
    email: '', 
    phoneNumber: null,
    specialist: '',
    message: ''
  };


  ngOnInit(): void {
      
  }

  constructor(private contactusService :ContactusService,
              private toastr: ToastrService
            ){}

            onSubmit(form: NgForm) {
              if (form.valid) {
                this.contactusService.addContactUs(this.contactUsModel).subscribe({
                  next: (response) => {
                    console.log('Form Submitted!', response);
                    this.toastr.success('your email has been sent successfully sent'); // Affiche une notification de succès
                    form.reset();
                  },
                  error: (error) => {
                    console.error('Error:', error);
                    this.toastr.error('There was an error submitting the form'); // Affiche une notification d'erreur
                  }
                });
              }
            }
}
