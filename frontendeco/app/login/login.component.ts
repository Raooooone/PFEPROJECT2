import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginSuccessful: boolean = false;  // Variable d'état pour masquer le formulaire

  // Définir un email et un mot de passe par défaut pour l'admin
  defaultAdminEmail: string = 'admin@admin.com';
  defaultAdminPassword: string = 'admin';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    // Vérification si les identifiants correspondent à ceux de l'admin
    if (this.email === this.defaultAdminEmail && this.password === this.defaultAdminPassword) {
      console.log('Connexion réussie en tant qu\'admin');
      this.loginSuccessful = true; // Cacher le formulaire de connexion
      this.router.navigate(['/admin/acceuil']);  // Rediriger vers la page admin
      return;
    }

    // Si ce n'est pas l'admin, effectuer l'appel API
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Connexion réussie', response);

        // Vérification si l'utilisateur est admin ou client
        this.loginSuccessful = true;  // Cacher le formulaire de connexion

        if (this.userService.isAdmin(this.email)) {
          this.router.navigate(['/admin/acceuil']);
        } else {
          this.router.navigate(['/client/home']);
        }
      },
      (error) => {
        this.errorMessage = "Email ou mot de passe incorrect.";
      }
    );
  }
}
