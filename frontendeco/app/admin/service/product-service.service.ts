import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';  // URL de l'API codée en dur

  constructor(private http: HttpClient) {}

  // Récupérer tous les produits avec gestion des erreurs
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des produits :', error);
        return throwError(error); // Relance l'erreur pour les abonnés
      })
    );
  }

  // Supprimer un produit par ID avec gestion des erreurs
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`).pipe(
      catchError(error => {
        console.error(`Erreur lors de la suppression du produit ${productId} :`, error);
        return throwError(error);
      })
    );
  }

  // Ajouter un nouveau produit avec gestion des erreurs
  addProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optionnel
    return this.http.post<Product>(`${this.apiUrl}`, product, { headers }).pipe(
      catchError(error => {
        console.error('Erreur lors de l\'ajout du produit :', error);
        return throwError(error);
      })
    );
  }
}