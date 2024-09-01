import { Component, OnInit } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  news: any;
  newsId: any | undefined;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsId = this.route.snapshot.paramMap.get('id');
    const newsList = this.sharedService.getDataList();

    this.news = newsList.find((x) => {
      return x.id == this.newsId;
    });
  }
}
