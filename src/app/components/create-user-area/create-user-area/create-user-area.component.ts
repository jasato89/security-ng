import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-create-user-area',
  templateUrl: './create-user-area.component.html',
  styleUrls: ['./create-user-area.component.css']
})
export class CreateUserAreaComponent implements OnInit {

  form: FormGroup;
  nameField: FormControl;
  emailField: FormControl;
  passwordField: FormControl;
  dateOfBirthField: FormControl;
  jobField: FormControl;

  name: string = '';

  constructor(private auth: AuthServiceService) {
    // Initialize Form Control fields
    this.nameField = new FormControl('', [Validators.required]);
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
    this.passwordField = new FormControl('', [Validators.required, Validators.minLength(7)]);
    this.dateOfBirthField = new FormControl('', [Validators.required]);
    this.jobField = new FormControl('', [Validators.required]);


    // Initialzie Form Group
    this.form = new FormGroup({
      name: this.nameField,
      email: this.emailField,
      password: this.passwordField,
      dateOfBirth: this.dateOfBirthField,
      job: this.jobField
    });
  }


  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
