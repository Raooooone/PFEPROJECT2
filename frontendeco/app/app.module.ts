import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
   
   
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,   
    MatIconModule,      
    MatButtonModule,   
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    SignupComponent,
    LoginComponent,
    MatDialogModule,
    HttpClientModule,
    AuthComponent,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: []
})
export class AppModule { }
