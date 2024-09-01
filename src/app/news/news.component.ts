import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  newsList = [
    {
      id: 100,
      img: 'images/IMGS/972343b4952d1d3547391031bb810d9e_XL.jpg',
      title:
        'UNIOSUN Felicitates Prof. Olukoya Ogen on His Induction as Fellow',
      content:
        'Professor Olukoya Ogen of Osun State University was inducted as a Fellow of the Historical Society of Nigeria (HSN) on October 14, 2021, during the 66th Annual Congress in Enugu. The fellowship is the highest honor from HSN, recognizing significant contributions to historical scholarship and leadership. Other inductees included Brigadier General Shuaibu Ibrahim, Senator Professor Sandy Onor, and Professor Okechukwu Edward Okeke...',
    },
    {
      img: 'images/IMGS/images.jpeg',
      date: ' December 1, 2017',
      title: 'US Varsity Appoints Ogen, ACE Provost As Research Professor',
      content:
        'Professor Olukoya Ogen, Provost of Adeyemi College of Education, Ondo, was appointed as a Senior Mentoring Scholar and full Professor of Research at the Southern University, International Center for Information Technology and Development (ICITD) in Baton Rouge, Louisiana. His role involves leading research activities and mentoring Ph.D. students and junior lecturers. ',
    },
  ];
}
