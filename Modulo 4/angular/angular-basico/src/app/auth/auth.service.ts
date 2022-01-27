import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthModel } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageUserKey: string = 'loggedUser';
  private loggedUser?: AuthModel | null;

  constructor() {
    this.loadLoggedUserFromStorage();
  }

  login(model: AuthModel): Observable<boolean> {
    const { userName, password } = model;
    let result$: Observable<boolean> = of(false);

    if (userName === 'master8@lemoncode.net' && password === '12345678') {
      this.saveLoggedUser(model);
      result$ = of(true);
    }

    return result$.pipe(delay(2000));
  }

  logout() {
    this.saveLoggedUser(null);
  }

  isLogged(): boolean {
    return !!this.loggedUser;
  }

  getUserName(): string {
    return this.loggedUser?.userName || '';
  }

  private saveLoggedUser(model?: AuthModel | null) {
    this.loggedUser = model;
    localStorage.setItem(this.localStorageUserKey, JSON.stringify(model));
  }

  private loadLoggedUserFromStorage() {
    const savedUserRaw = localStorage.getItem(this.localStorageUserKey);

    if (savedUserRaw) {
      this.loggedUser = JSON.parse(savedUserRaw);
    }
  }
}
