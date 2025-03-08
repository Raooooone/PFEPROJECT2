import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Ajout de CommonModule
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule,HttpClientModule], // Ajout de CommonModule
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = { username: '', email: '', password: '', adresse: '' };
  errorMessage: string = '';
  isSubmitting: boolean = false; // Add this flag

  constructor(private userService: UserService, private router: Router) {}

  register() {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    this.userService.register(this.user).subscribe(
      (response) => {
        console.log('Inscription réussie', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = error.message; // Display backend error message
        this.isSubmitting = false;
      }
    );
  }
}