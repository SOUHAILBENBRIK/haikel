import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void {
      
  }
  constructor( private lougouservice: AuthServices , private router : Router){

  }

 onLogout() {
    this.lougouservice.logout().subscribe({
      next: (response) => {
        this.router.navigateByUrl('/auth/login'); // Utilisez navigateByUrl pour une URL spécifique
      },
      error: (error) => {
console.log(error)     }
    });
  }
}


