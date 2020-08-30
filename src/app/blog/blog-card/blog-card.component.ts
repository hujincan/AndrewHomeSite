import { Component, OnInit } from '@angular/core';
import {Markdown} from '../../data/Markdown';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  markdowns: Markdown[];
  constructor() { }

  ngOnInit(): void {
    this.getMarkdowns();
  }

  getMarkdowns(): void {
    this.markdowns = [
      { id: 0, image: '../../../assets/images/blog-image.jpg', title: 'BlogTitle', content: 'Get to know the software and hardware I use',
        date: '2020.8.30-15.54'},
      { id: 1, image: '../../../assets/images/blog-image.jpg', title: 'BlogTitle', content: 'Get to know the software and hardware I use',
        date: '2020.8.30-15.54'},
      { id: 2, image: '../../../assets/images/blog-image.jpg', title: 'BlogTitle', content: 'Get to know the software and hardware I use',
        date: '2020.8.30-15.54'},
      { id: 3, image: '../../../assets/images/blog-image.jpg', title: 'BlogTitle', content: 'Get to know the software and hardware I use',
        date: '2020.8.30-15.54'},
    ];
  }

}
