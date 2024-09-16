import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isSticky: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    // const sticky = header ? header.offsetTop : 0;

    if (window.pageYOffset > 75) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
