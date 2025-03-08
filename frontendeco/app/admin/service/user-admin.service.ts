import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  private apiUrl = 'http://localhost:8080/api/users'; // Vérifiez que cette URL correspond à votre backend

  constructor(private http: HttpClient) {}

  /**
   * Récupérer la liste des utilisateurs
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Ajouter un nouvel utilisateur
   */
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  /**
   * Mettre à jour un utilisateur existant
   */
  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
  }

  /**
   * Supprimer un utilisateur
   */
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
