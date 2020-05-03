import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean;
  wrongPassowordError : boolean;
  loginForm: FormGroup;
  submitted = false;

  constructor(private loginService: LoginService,  private router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
    
    this.loginService.getUsers().subscribe( usersList => { 
      let isValidUser =  this.loginService.isValidUser(new User(this.loginForm.value.username, this.loginForm.value.password), usersList);
      if(isValidUser){
        this.authService.setLoggedInStatus('isAdminLoggedIn', 'true');
        this.router.navigate(['news']);
       }
       else{
        this.wrongPassowordErrorMessage();
       }
    });  
    
  }

  get f() { return this.loginForm.controls; }

  wrongPassowordErrorMessage() {
    this.wrongPassowordError = true
    window.scroll(0,0);
    setTimeout(() => {
      this.wrongPassowordError = false;
    }, 3000)
  }
}
