import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {}
