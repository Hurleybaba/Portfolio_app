import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementComponent } from './achievement/achievement.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'achievement',
    title: 'Achievement',
    component: AchievementComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: '404',
    component: PageNotFoundComponent,
  },
];
