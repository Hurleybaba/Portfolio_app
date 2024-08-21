import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MiniAchievementsComponent } from '../mini-achievements/mini-achievements.component';
import { MiniGalleryComponent } from '../mini-gallery/mini-gallery.component';
import { PhGalleryComponent } from '../ph-gallery/ph-gallery.component';
import { MiniContactComponent } from '../mini-contact/mini-contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    DashboardComponent,
    MiniAchievementsComponent,
    MiniGalleryComponent,
    PhGalleryComponent,
    MiniContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
