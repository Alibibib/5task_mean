import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-protected',
  standalone: true,
  templateUrl: './protected.component.html',
})
export class ProtectedComponent {
  userRole: string = '';
  role: string | null = null;
  username: string | null = null;

  constructor(private authService: AuthService) {
    const token = this.authService.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.role = payload.role || null;
        this.username = payload.username || null;
      } catch (error) {
        console.error('Ошибка при декодировании токена', error);
      }
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
