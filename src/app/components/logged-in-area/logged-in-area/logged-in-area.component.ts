import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-logged-in-area',
  templateUrl: './logged-in-area.component.html',
  styleUrls: ['./logged-in-area.component.css']
})
export class LoggedInAreaComponent implements OnInit {

  constructor(private router: Router, private auth: AuthServiceService) { }

  ngOnInit(): void {
    
    if(!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
    }
    
    
  }

}
