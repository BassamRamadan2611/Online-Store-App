import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email:string=''
  constructor(private auth:AuthService){}


  forgotPasssword(){

    this.auth.forgotPasssword(this.email);
    this.email='';


  }
}
