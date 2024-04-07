import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

    
}
navigateToManufacturerSignup() {
  this.router.navigate(['/auth/register/manufacturer'],{ queryParams: { role: 'MAKER' } }); // Remplacez '/auth/register/manufacturer' par le chemin approprié
}
navigateToCustomerSignup() {
  this.router.navigate(['/auth/register/customer'],{ queryParams: { role: 'CLIENT' } }); // Remplacez '/auth/register/manufacturer' par le chemin approprié
}
}