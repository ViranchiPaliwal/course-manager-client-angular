import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router,
                private service: UserServiceClient) { }

    username;
    password;
    password2;
    isLoggedIn = false;
    isPasswordInvaild = false;
    isUsernameExist = false;
    register(username, password, password2) {
        if (password !== password2) {
            this.isPasswordInvaild = true;
            return;
        } else {
            this.isPasswordInvaild = false;
        }
        this.service.findUserByUserName(username)
            .then(user => {
                if (user.invalid) {
                    this.isUsernameExist = false;
                    this.service
                        .createUser(username, password)
                        .then(() =>
                            this.router.navigate(['profile']));
                } else {
                    this.isUsernameExist = true;
                }
            });
    }

    ngOnInit() {
    }
}
