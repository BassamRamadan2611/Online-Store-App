import { Component, Input, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';

  @Input() isLogin: boolean = false;



  constructor( private auth:AuthService,private router: Router){

  }
  login(){
    if(this.email==''){
      alert("Please enter your email");
      return;
    }
    if(this.password==''){
      alert("Please enter your password");
      return;
    }

    this.auth.login(this.email,this.password);

    this.email='';
    this.password='';
this.isLogin = true
  }

  signInWithGoogle(){
    this.auth.googleSignIn();

  }


  forgotPasssword(){

    this.auth.forgotPasssword(this.email);
    this.email='';


  }


}


