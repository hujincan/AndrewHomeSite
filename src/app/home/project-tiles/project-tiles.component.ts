import { Component, OnInit } from '@angular/core';
import {Project} from '../../data/project';

@Component({
  selector: 'app-project-tiles',
  templateUrl: './project-tiles.component.html',
  styleUrls: ['./project-tiles.component.scss']
})
export class ProjectTilesComponent implements OnInit {
  projects: Project[];
  constructor() { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = [
      {icon: '../../../assets/images/1503048052816.png', name: 'And Home', content: '一个由Angular构建的个人主页网站。',
        url: 'https://github.com/hujincan/AndrewHomeSite'},
      {icon: '../../../assets/images/icon_pack.png', name: 'And IconPack', content: '这是一个Android 图标包模板应用程序。',
        url: 'https://github.com/hujincan/AndIconpack'},
      {icon: '../../../assets/images/open_design.png', name: 'Open Design', content: 'Open Design 是一个Android 开源效果集应用程序',
        url: 'https://github.com/hujincan/AndView'}
    ];
  }
}
