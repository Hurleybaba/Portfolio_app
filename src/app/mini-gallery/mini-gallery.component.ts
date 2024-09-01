import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-mini-gallery',
  standalone: true,
  imports: [],
  templateUrl: './mini-gallery.component.html',
  styleUrl: './mini-gallery.component.scss',
})
export class MiniGalleryComponent {
  notes = [
    {
      details: 'hHello',
    },
    {
      details: 'Details 2',
    },
    {
      details: 'Details 3',
    },
    {
      details: 'Details 4',
    },
    {
      details: 'Details 5',
    },
  ];
}
