import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductService } from '../service/product-service.service';
 // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-productmanagement',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, HttpClientModule, MatToolbarModule],
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent {
  isProductManagement: boolean = true;
  products: any[] = [];
  newProduct: any = {
    image: null,
    name: '',
    description: '',
    price: null
  };

  
  imagePreview: string | null = null;

  constructor(private productService: ProductService) { }

  showProductManagement(): void {
    this.isProductManagement = true;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.newProduct.image = file;
    if (file) {
     
      this.imagePreview = URL.createObjectURL(file);
    }
  }

  
  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      this.productService.addProduct(this.newProduct).subscribe({
        next: (createdProduct) => {
         
          this.products.push({
            ...createdProduct,
            imageUrl: this.imagePreview
          });
          
          this.newProduct = { image: null, name: '', description: '', price: null };
          this.imagePreview = null;
        },
        error: (error) => {
          console.error('Erreur lors de l’ajout du produit :', error);
          alert('Une erreur est survenue lors de l’ajout du produit.');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
