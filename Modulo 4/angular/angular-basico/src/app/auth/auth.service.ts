import { Injectable } from '@angular/core';
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

  login(model: AuthModel): boolean {
    const { userName, password } = model;

    if (userName === 'master8@lemoncode.net' && password === '12345678') {
      this.saveLoggedUser(model);
      return true;
    }

    return false;
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
