import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  readonly rootUrl = 'http://localhost:8080';

  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;



  constructor(private http: HttpClient) { }


  registerUser(user: User) {
    return this.http.post<User>(this.rootUrl + '/create-user', user);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  loginUser(user: User): Observable<any> {
    this.username = user.email;
    this.password = user.password;
     var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password),
        
      })
    };

    return this.http.get(this.rootUrl + '/login',  httpOptions);

  }

  saveUserInfo(user: any) {
    localStorage.setItem('username', user['username']);
    this.isLoggedIn = true;
    console.log(localStorage.getItem('username'));
  }

  logout() {
    localStorage.removeItem('username');
    this.isLoggedIn = false;
  }
  restoreSession() {
    if (localStorage.getItem('username') != null) {
      this.isLoggedIn = true;
    }
  }

}
