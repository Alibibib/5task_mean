import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const registerData = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    }

    this.http.post<any>('http://localhost:3000/register', registerData).subscribe();
  }
}
