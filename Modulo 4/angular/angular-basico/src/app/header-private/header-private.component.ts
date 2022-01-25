import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss'],
})
export class HeaderPrivateComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  userName() {
    return this.authService.getUserName();
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
