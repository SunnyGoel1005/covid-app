import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean;
  constructor(private authService : AuthService, private router:Router) { }

  ngOnInit() {
    this.isAdminLoggedIn();
    this.authService.fireIsLoggedIn.subscribe( data => this.isLoggedIn = data);
  }

  isAdminLoggedIn(){
    this.isLoggedIn = this.authService.getLoggedInStatus('isAdminLoggedIn');
  }

  logout(){
    this.authService.setLoggedInStatus('isAdminLoggedIn', 'false');
    this.isAdminLoggedIn();
    this.router.navigate(['login']);
  }
}
