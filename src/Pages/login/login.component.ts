import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  onFormSubmit() {
    console.log('profile form');
    console.log(this.profileForm.value);
  }
  loggarForm() {
    console.log(this.profileForm.value);
  }
  profileForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl(''),
  });

  constructor() {
    console.log(this.profileForm);
  }
}
