import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-authorization',
  templateUrl: './login-authorization.component.html',
  styleUrls: ['./login-authorization.component.sass']
})
export class LoginAuthorizationComponent implements OnInit {

  public loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        'test@mail.ru',
        [
          Validators.required,
          Validators.email,
        ]
      ),
      password: new FormControl(
        'test12345',
        [
          Validators.required
        ]
      )
    });


  }
  }

}
