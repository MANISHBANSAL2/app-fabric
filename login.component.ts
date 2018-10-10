import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <label for="email">Email</label>
                        <br/>
                        <input [(ngModel)]="user.email" id="email" 
                            type="email" class="validate">                        
                    </div>
                </div>
 
                <div class="row">
                    <div class="input-field col s12">
                        <label for="password">Password</label>
                        <br/>
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">                        
                    </div>
                </div>
                
                <button (click)='login()' class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
                    <span>{{errorMsg}}</span>
            </div>
        </div>
    	`
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}