import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAcceuilComponent } from './admin-accueil/admin-accueil.component';
import { UserManagermentComponent } from './user-managerment/user-managerment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    
    
 


   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,   
    MatIconModule,      
    MatButtonModule,   
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    HttpClientModule,
    UserManagermentComponent,
    ReactiveFormsModule,
    AdminAcceuilComponent,
    ProductmanagementComponent,
    ProductListComponent,
  ]
})
export class AdminModule { }
