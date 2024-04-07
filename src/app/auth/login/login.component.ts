import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredential } from 'src/app/_Interfaces/ICredential';
import { IToken } from 'src/app/_Interfaces/IToken';
import { AuthServices } from 'src/app/_services/auth.service';
import { TokenService } from '../../_services/token.service';
import { ToastrService } from 'ngx-toastr';
declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form : ICredential ={
    email : '',
    password :'' 
  }


  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:'969118750568-5klmqr9vvl409tbm6d78fj6a5oorfifs.apps.googleusercontent.com',
      callback:(resp:any)=>this.handleLogin(resp)
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      width:350,

    })
      
  }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split('.')[1]))
  }
  handleLogin(resp:any){
    if(resp){

      //decode token 
      const payload= this.decodeToken(resp.credential);

      //store in session 
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload))
      //navigate to home/browse
      this.router.navigate(['/auth/register'])
    }
  }

  constructor(private http: HttpClient, private router: Router,
                      private loginService :  AuthServices, 
                      private tokenservice : TokenService,
                      ) {

    } // Injectez Router ici



  onSubmit(): void {
    console.log(this.form);
    this.login();

  }

  login (){
    this.loginService.login(this.form).subscribe(
      (data: IToken) => { // Utilisez 'any' ici si vous ne pouvez pas contrôler la forme de 'data'
          this.tokenservice.saveToken(data.access_token);
          this.tokenservice.saveRefreshToken(data.refresh_token);  // Assurez-vous de sauvegarder le refresh_token
        console.log("accessToken",data.access_token);
        console.log("refreshToken",data.refresh_token);
        this.tokenservice.saveToken(data.access_token)
        const role =  data.user.role; // Utilisez une vérification pour éviter les erreurs d'exécution
        this.tokenservice.saveRole(role); // Sauvegarde du rôle de l'utilisateur

        if (role) {
          const redirectPath = role === 'CLIENT' ? '/client' : role === 'MAKER' ? '/maker' : null;
          redirectPath ? this.router.navigateByUrl(redirectPath) : console.error('Role not recognized or missing');
        } else {
          console.error('No role provided');
        }
        
      },
      (err: any) => console.log(err)
    );
  }

  
  
}
