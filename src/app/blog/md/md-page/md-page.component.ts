import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MARKDOWNS} from '../../../data/markdowns';

@Component({
  selector: 'app-md-page',
  templateUrl: './md-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./md-page.component.scss']
})
export class MdPageComponent implements OnInit {

  markdowns = MARKDOWNS;

  constructor(private route: ActivatedRoute) { }

  content: string;

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === -1) {
      this.initMarkdown('../../../../../assets/markdown/Uses.md');
    } else {
      this.initMarkdown(this.markdowns[id].url);
    }
  }

  initMarkdown(url): void {
    const md = require('markdown-it')({
      html: true,
      linkify: true,
      typographer: true
    }).use(require('markdown-it-deflist'));

    let xmlhttp: XMLHttpRequest;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      console.log('浏览器不支持');
    }
    if (xmlhttp != null) {
      xmlhttp.open('get', url, true);
      xmlhttp.send();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          const mdContent = xmlhttp.responseText;
          const result = md.render(mdContent);
          this.content = result;
          // document.querySelector('.md-content').insertAdjacentHTML('afterend', result);
        }
      };
    }
  }

}
