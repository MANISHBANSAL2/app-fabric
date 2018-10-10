import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User{

    constructor(
        public email: string,
        public password: string
    
    ){}      
}
let users = [ new User('admin@admin.com','admin1'),
    new User('user1@gmail.com','u1'),
    new User('abc@admin.com','abcbbccbccc1'),
    new User('user1@gmail.com','u1')
];

@Injectable()
export class AuthenticationService {
    constructor(private _router: Router){}   
    
    logout(): void {
        localStorage.removeItem("user");
        this._router.navigate(['/Login']);
    }

    login(user: any) : boolean{
        var authenticatedUser = users.find( u => u === user.email);
        alert(user.email)
        if (authenticatedUser && authenticatedUser.password === user.password){
            localStorage.setItem("user", 'authenticatedUser');
            
            this._router.navigate(['/Home']);
            return true;
        }
        return false;
    }

    checkCredentials(){
        if (localStorage.getItem("user") === null){
            this._router.navigate(['/Login']);
        }
    }
}