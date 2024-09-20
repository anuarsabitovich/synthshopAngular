import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn(): void {
    this.authService.signIn(this.email, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.router.navigate(['/catalog']);
        } else {
          this.errorMessage = 'Login failed, please try again';
        }
      },
      (error) => {
        this.errorMessage;
      }
    );
  }
}
