import { Component, OnInit } from '@angular/core';
import {Social} from '../../data/Social';

@Component({
  selector: 'app-jump-icons',
  templateUrl: './jump-icons.component.html',
  styleUrls: ['./jump-icons.component.scss']
})
export class JumpIconsComponent implements OnInit {

  social: Social[];

  constructor() { }

  ngOnInit(): void {
    this.socialList();
    this.pathColor();
  }

  socialList(): void {
    this.social = [
      {name: 'Twitter', url: 'https://twitter.com/Googleyeahs', icon: 'assets/images/twitter.svg'},
      {name: 'Instagram', url: 'https://www.instagram.com/andrewmartin791/', icon: 'assets/images/instagram.svg'},
      {name: 'Coolapk', url: 'http://www.coolapk.com/u/620606', icon: 'assets/images/coolapk.svg'},
      {name: 'PlayStore', url: 'https://play.google.com/store/apps/dev?id=6609504255163731953', icon: 'assets/images/bxl-play-store.svg'},
      {name: 'QQ', url: 'tencent://Message/?Uin=2530767709&websiteName=q-zone.qq.com&Menu=yes', icon: 'assets/images/qq.svg'},
      {name: 'Github', url: 'https://github.com/hujincan', icon: 'assets/images/github.svg'}
    ];
  }

  async pathColor(): Promise<void> {

    const path = await this.asyncCheck(() => document.querySelector('path'));
    const paths = document.querySelectorAll('path');
    // tslint:disable-next-line:prefer-for-of
    const style = document.createElement('style');
    document.head.appendChild(style);
    const sheet = style.sheet;
    // tslint:disable-next-line:prefer-for-of
    sheet.insertRule('.social-logo:hover path{fill: white;}');
  }

  asyncCheck = async<T> (getter: () => T, checkSize = 100, timeout = 1000) => {
    return new Promise<T>(x => {
      const check = (num = 0) => {
        const target = getter();
        if (target !== undefined && target !== null) {
          x(target);
        } else if (num > timeout / checkSize) {// 超时
          x(target);
        } else {
          setTimeout(() => check(++num), checkSize);
        }
      };
      check();
    });
  }
}
