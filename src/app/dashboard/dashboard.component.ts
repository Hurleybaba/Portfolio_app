import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MiniAchievementsComponent } from '../mini-achievements/mini-achievements.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, MiniAchievementsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
