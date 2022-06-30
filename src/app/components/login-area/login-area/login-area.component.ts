import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { User } from 'src/app/models/user/user';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.css']
})
export class LoginAreaComponent implements OnInit {
  form: FormGroup;
  emailField: FormControl;
  passwordField: FormControl;
  invalidLogin: boolean = false;
  constructor(private router: Router, private auth: AuthServiceService) {
    this.emailField = new FormControl('', [Validators.required]);
    this.passwordField = new FormControl('', [Validators.required]);

    this.form = new FormGroup({
      email: this.emailField,
      password: this.passwordField
    });

  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.auth.loginUser(new User(
      this.emailField.value, this.passwordField.value)
    ).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.auth.saveUserInfo(data);
          this.router.navigate(['']); 
        },
        error: (data) => {
          console.log(data)
          this.invalidLogin = true;
        }
      });

  }
}
