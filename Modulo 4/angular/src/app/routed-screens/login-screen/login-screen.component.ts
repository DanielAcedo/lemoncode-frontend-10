import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/auth/auth.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  public authModel: AuthModel = { userName: '', password: '' };
  public loading: boolean = false;
  public invalidLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.authService.login(this.authModel).subscribe(
      (isLoginValid) => {
        this.invalidLogin = !isLoginValid;

        if (isLoginValid) {
          this.router.navigate(['/dashboard']);
        }
      },
      null,
      () => (this.loading = false)
    );
  }
}
