import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class LoginService{

  private baseUrl = 'https://my-covid-ap.herokuapp.com';
  private usersUrl = '/users';  // URL to web api
  userList : User[];

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + this.usersUrl);
  }

  isValidUser(loggedInUser:User, userList:User[]){

    let isValid = false;
    userList.forEach(user => {
      if(user.username  == loggedInUser.username && user.password  == loggedInUser.password){
        isValid = true;
      }
    });
    return isValid;
  }
}