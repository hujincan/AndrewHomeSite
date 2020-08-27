import { Component, OnInit } from '@angular/core';
import {Social} from '../data/Social';

@Component({
  selector: 'app-and-features',
  templateUrl: './and-features.component.html',
  styleUrls: ['./and-features.component.scss']
})
export class AndFeaturesComponent implements OnInit {

  social: Social[];

  constructor() { }

  ngOnInit(): void {
    this.socialList();
  }

  socialList(): void {
    this.social = [
      {name: 'Twitter', url: 'https://twitter.com/Googleyeahs', icon: 'assets/images/twitter.svg'},
      {name: 'Instagram', url: 'https://www.instagram.com/andrewmartin791/', icon: 'assets/images/instagram.svg'},
      {name: 'Coolapk', url: 'http://www.coolapk.com/u/620606', icon: 'assets/images/coolapk.svg'},
      {name: 'QQ', url: 'tencent://Message/?Uin=2530767709&websiteName=q-zone.qq.com&Menu=yes', icon: 'assets/images/qq.svg'},
      {name: 'Github', url: 'https://github.com/hujincan', icon: 'assets/images/github.svg'}
    ];
  }

}
