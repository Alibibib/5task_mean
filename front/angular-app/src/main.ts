import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { AppComponent } from './app/app.component'; // Не забудь импортировать!
import { ProtectedComponent } from './app/protected/protected.component';

bootstrapApplication(AppComponent, {

  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      { path: 'protected', component:ProtectedComponent }
    ])
  ]
});
