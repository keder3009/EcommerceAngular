import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from "@angular/router";

//firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "../../modules/login/services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailU: string;
  passwordU: string;


  constructor(public router: Router, public angularfireAuth: AngularFireAuth, private authService: AuthService,) { }

  ngOnInit(): void {
  }

  Onlogin(): void {
    this.authService.loginEmail(this.emailU, this.passwordU).then((res) => {
      this.router.navigate(['/']);
    }).catch(err => console.log(err));
  }

  onLogout(){
    this.authService.logoutUser().then((res)=>{
      this.router.navigate(['/']);
    }).catch(err => console.log(err));
  }

}
