import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAdminService } from '../service/user-admin.service';

@Component({
  selector: 'app-user-managerment',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './user-managerment.component.html',
  styleUrls: ['./user-managerment.component.css']
})
export class UserManagermentComponent implements OnInit {
  users: any[] = [];
  isEditing: boolean = false;
  selectedUser: any = { id: null, username: '', email: '' };

  constructor(private userService: UserAdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  /**
   * Charger la liste des utilisateurs
   */
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs', error);
      }
    );
  }

  /**
   * Préparer l'édition d'un utilisateur
   */
  editUser(user: any): void {
    this.selectedUser = { ...user };
    this.isEditing = true;
  }

  /**
   * Annuler la modification
   */
  cancelEdit(): void {
    this.isEditing = false;
    this.selectedUser = { id: null, username: '', email: '' };
  }

  /**
   * Enregistrer les modifications d'un utilisateur
   */
  saveUser(): void {
    if (this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser).subscribe(
        () => {
          this.isEditing = false;
          this.loadUsers(); // Rafraîchir la liste après modification
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
        }
      );
    }
  }

  /**
   * Supprimer un utilisateur et rafraîchir la liste localement
   */
  deleteUser(userId: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          // Mise à jour locale : on filtre l'utilisateur supprimé
          this.users = this.users.filter(user => user.id !== userId);
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'utilisateur', error);
        }
      );
    }
  }
}