import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [FormsModule],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  currentName = '';
  editMode: string | null = null;
  userRole: string | null = null;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  startEdit(user: any): void {
    this.editMode = user._id;
    this.currentName = user.name;
  }

  saveUser(): void {
    const name = this.currentName.trim();
    if (!name) return;

    const request = this.editMode
      ? this.usersService.updateUser(this.editMode, name)
      : this.usersService.addUser(name);

    request.subscribe(() => {
      this.loadUsers();
      this.resetForm();
    });
  }

  deleteUser(user: any): void {
    if (confirm('Вы уверены, что хотите удалить пользователя?')) {
      this.usersService.deleteUser(user._id).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  resetForm(): void {
    this.currentName = '';
    this.editMode = null;
  }

  logout(): void {
    this.authService.logout();
  }
}
