import { Component, OnInit } from '@angular/core';
import {Markdown} from '../../data/markdown';
import {MARKDOWNS} from '../../data/markdowns';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  markdowns = MARKDOWNS;
  constructor() { }

  ngOnInit(): void {
  }

}
