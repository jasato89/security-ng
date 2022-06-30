import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserAreaComponent } from './components/create-user-area/create-user-area/create-user-area.component';
import { LoggedInAreaComponent } from './components/logged-in-area/logged-in-area/logged-in-area.component';
import { LoginAreaComponent } from './components/login-area/login-area/login-area.component';

const routes: Routes = [
  { path: '', component: LoggedInAreaComponent},
  { path: 'login', component: LoginAreaComponent },
  {path: 'create-user', component: CreateUserAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
