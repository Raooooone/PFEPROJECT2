import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminAcceuilComponent } from './admin-accueil/admin-accueil.component';
import { UserManagermentComponent } from './user-managerment/user-managerment.component';
import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' }, // Redirection par défaut pour 'admin'
  { path: 'acceuil', component: AdminAcceuilComponent },
  { path: 'users', component: UserManagermentComponent },
  { path: 'product', component: ProductmanagementComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
