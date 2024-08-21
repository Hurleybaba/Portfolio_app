import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MiniAchievementsComponent } from './mini-achievements/mini-achievements.component';
import { MiniContactComponent } from './mini-contact/mini-contact.component';
import { MiniGalleryComponent } from './mini-gallery/mini-gallery.component';
import { PhGalleryComponent } from './ph-gallery/ph-gallery.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroSectionComponent,
    MiniAchievementsComponent,
    MiniGalleryComponent,
    PhGalleryComponent,
    MiniContactComponent,
    DashboardComponent,
    FooterComponent,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio_App';
}
