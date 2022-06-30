import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn : boolean = false;


  constructor(private auth : AuthServiceService, private route: Router) { }

  ngOnInit(): void {
    this.auth.restoreSession();
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/login']);
    
  }

}
