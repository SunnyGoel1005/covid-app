import { Injectable, EventEmitter, Output } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable()
export class AuthService{

    @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

    setLoggedInStatus(key : string, value :string){
        this.fireIsLoggedIn.emit(value);
        sessionStorage.setItem(key, value);
    }

    getLoggedInStatus(key : string){
        return JSON.parse(sessionStorage.getItem(key));
    }
}