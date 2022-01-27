import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutScreenComponent } from './routed-screens/about-screen/about-screen.component';
import { CrudScreenComponent } from './routed-screens/crud-screen/crud-screen.component';
import { DashboardScreenComponent } from './routed-screens/dashboard-screen/dashboard-screen.component';
import { GalleryScreenComponent } from './routed-screens/gallery-screen/gallery-screen.component';
import { HomeScreenComponent } from './routed-screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './routed-screens/login-screen/login-screen.component';
import { ProfileScreenComponent } from './routed-screens/profile-screen/profile-screen.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutScreenComponent,
  },
  {
    path: 'crud',
    component: CrudScreenComponent,
  },
  {
    path: 'dashboard',
    component: DashboardScreenComponent,
  },
  {
    path: 'gallery',
    component: GalleryScreenComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'profile',
    component: ProfileScreenComponent,
  },
  {
    path: '**',
    component: HomeScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
