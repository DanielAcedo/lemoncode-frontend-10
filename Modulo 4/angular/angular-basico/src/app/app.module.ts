import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPublicComponent } from './header-public/header-public.component';
import { HeaderPrivateComponent } from './header-private/header-private.component';
import { FooterComponent } from './footer/footer.component';
import { HomeScreenComponent } from './routed-screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './routed-screens/login-screen/login-screen.component';
import { AboutScreenComponent } from './routed-screens/about-screen/about-screen.component';
import { DashboardScreenComponent } from './routed-screens/dashboard-screen/dashboard-screen.component';
import { GalleryScreenComponent } from './routed-screens/gallery-screen/gallery-screen.component';
import { CrudScreenComponent } from './routed-screens/crud-screen/crud-screen.component';
import { ProfileScreenComponent } from './routed-screens/profile-screen/profile-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { GalleryComponent } from './gallery/components/gallery/gallery.component';
import { ZoomDirective } from './gallery/directives/zoom/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    AboutScreenComponent,
    DashboardScreenComponent,
    GalleryScreenComponent,
    CrudScreenComponent,
    ProfileScreenComponent,
    GalleryComponent,
    ZoomDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
