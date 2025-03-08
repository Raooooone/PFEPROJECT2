import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../service/product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions']; // Columns to be displayed in the table

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // ✅ Charger la liste des produits depuis le backend
  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    });
  }

  // ✅ Supprimer un produit
  deleteProduct(productId: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          console.log(`Produit ${productId} supprimé avec succès`);
          this.products = this.products.filter(product => product.id !== productId);
        },
        error: (error) => {
          console.error(`Erreur lors de la suppression du produit ${productId}:`, error);
        }
      });
    }
  }
}
