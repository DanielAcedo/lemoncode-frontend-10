import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss'],
})
export class HeaderPublicComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLogged() {
    return this.authService.isLogged();
  }
}
