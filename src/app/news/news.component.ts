import { Component, OnInit } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [AsideComponent, RouterLink, RouterLinkActive],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.newsList = this.sharedService.getDataList();
  }
}
