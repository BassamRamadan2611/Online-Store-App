import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import{GoogleAuthProvider} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

loginMode:boolean = false

  constructor( private fireAuth: AngularFireAuth, private router:Router,private http:HttpClient) { }


  //login method
  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((res:any)=>{
      console.log(res.user.uid)
      console.log(res.user.email)

      localStorage.setItem("user_Id",res.user.uid)
      localStorage.setItem("user_Email",res.user.email)
      localStorage.setItem("token","true")
      alert("login successfully")
      this.loginMode  = true


this.router.navigate(['/products'])


    },err=>{
   alert("something went wrong");
   this.router.navigate(['/login'])
    })
  }


  //register
  register(email:string,password:string){
this.fireAuth.createUserWithEmailAndPassword(email,password).then(res=>{
  alert("Registration successfull")
  this.router.navigate(['/login']);
  this.sendEmailForVerivication()
},err=>{
  alert(err.message);
  this.router.navigate(['/register']);

})
  }


  //logout
  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("user_Id");
      localStorage.removeItem("user_Email");

      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
    })
  }

  //forgot password
  forgotPasssword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(( )=>{
      window.alert('Password reset email sent, check your inbox.');
   //this.router.navigate(['/varify-email'])

    },err=>{
      alert("something went worng")
    })
  }
  //verify email
  sendEmailForVerivication(){
    return this.fireAuth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email']);
    });
  }

  // sign in wuth google

  googleSignIn(){
    this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      alert("login successfully")
      this.router.navigate(['/products'])
      localStorage.setItem("token",JSON.stringify(res.user?.uid))

    },err=>{
      alert(err.message)
    })
  }

  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('token')!);
    return token !== null
  }



}
