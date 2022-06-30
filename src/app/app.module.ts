import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAreaComponent } from './components/login-area/login-area/login-area.component';
import { CreateUserAreaComponent } from './components/create-user-area/create-user-area/create-user-area.component';
import { LoggedInAreaComponent } from './components/logged-in-area/logged-in-area/logged-in-area.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserResponseComponent } from './models/user/user-response/user-response.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAreaComponent,
    CreateUserAreaComponent,
    LoggedInAreaComponent,
    NavBarComponent,
    UserResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
