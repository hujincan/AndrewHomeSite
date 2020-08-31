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
      {icon: '../../../assets/images/160-160.png', name: 'Project', content: 'Dashboard for creating Android Icons apps.',
        url: 'https://github.com/hujincan'},
      {icon: '../../../assets/images/160-160.png', name: 'Project', content: 'Dashboard for creating Android Icons apps.',
        url: 'https://github.com/hujincan'},
      {icon: '../../../assets/images/160-160.png', name: 'Project', content: 'Dashboard for creating Android Icons apps.',
        url: 'https://github.com/hujincan'}
    ];
  }
}
