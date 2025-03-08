import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserManagermentComponent } from '../user-managerment/user-managerment.component';
import { ProductmanagementComponent } from '../productmanagement/productmanagement.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-accueil',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    UserManagermentComponent,
    ProductmanagementComponent,
    ProductListComponent // ✅ Import du composant de la liste des produits
  ],
  templateUrl: './admin-accueil.component.html',
  styleUrls: ['./admin-accueil.component.css']
})
export class AdminAcceuilComponent {
  isUserManagement: boolean = true;
  isProductManagement: boolean = false;
  isProductList: boolean = false; // ✅ Nouvelle variable pour afficher la liste des produits

  constructor(private router: Router) { }

  showUserManagement(): void {
    this.isUserManagement = true;
    this.isProductManagement = false;
    this.isProductList = false;
  }

  showProductManagement(): void {
    this.isProductManagement = true;
    this.isUserManagement = false;
    this.isProductList = false;
  }

  showProductList(): void { // ✅ Nouvelle méthode
    this.isProductList = true;
    this.isProductManagement = false;
    this.isUserManagement = false;
  }
}
