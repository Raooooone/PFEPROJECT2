import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Connexion
  login(email: string, password: string): Observable<any> {
    const body = { email, password }; // Formater l'objet avec email et mot de passe
    return this.http.post(`${this.apiUrl}/login`, body).pipe(
      catchError(this.handleError)
    );
  }

  // Inscription
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  // Vérifier si un email est admin
  isAdmin(email: string): boolean {
    return email.endsWith('@admin.com');
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur inconnue est survenue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      errorMessage = `Code erreur : ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
