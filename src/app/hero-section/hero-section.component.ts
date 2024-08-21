import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSectionComponent {}
