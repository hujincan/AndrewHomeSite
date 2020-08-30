import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-md-page',
  templateUrl: './md-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./md-page.component.scss']
})
export class MdPageComponent implements OnInit {

  constructor() { }

  content: string;

  ngOnInit(): void {
    this.initMarkdown();
  }

  initMarkdown(): void {
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
      xmlhttp.open('get', '../../../../../assets/markdown/学习观的运用.md', true);
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
