import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sidebarOpened: boolean = false;

  constructor() {}

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
