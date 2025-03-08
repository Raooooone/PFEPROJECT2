import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [CommonModule, LoginComponent, SignupComponent, HttpClientModule]
})
export class AuthComponent {
  activeTab: 'login' | 'signup' = 'login';
  loginSuccessful: boolean = false;

  constructor(private router: Router) {}

  switchTab(tab: 'login' | 'signup'): void {
    this.activeTab = tab;
  }

  onLoginSuccess(): void {
    this.loginSuccessful = true; // Mettre à jour l'état lorsque l'utilisateur est connecté
  }

  shouldHideAuthComponent(): boolean {
    return this.loginSuccessful;
  }
}
