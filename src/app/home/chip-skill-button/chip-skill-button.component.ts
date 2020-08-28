import { Component, OnInit } from '@angular/core';
import {Skill} from '../../data/Skill';

@Component({
  selector: 'app-chip-skill-button',
  templateUrl: './chip-skill-button.component.html',
  styleUrls: ['./chip-skill-button.component.scss']
})
export class ChipSkillButtonComponent implements OnInit {

  skills: Skill[];
  selectedSkill: Skill;

  ngOnInit(): void {
    this.getSkills();
    this.setSkillStyle();
  }

  getSkills(): void {
    this.skills = [
      {id: 0, title: 'Android', icon: 'assets/images/android.svg', primary: '#3DDC84', primaryDark: '#23A65D',
        titleColor: this.styleMethod02('#3DDC84'), rating: 60},
      {id: 1, title: 'Material Design', icon: 'assets/images/material-design.svg', primary: '#6717F6', primaryDark: '#3f1dcb',
        titleColor: this.styleMethod02('#6717F6'), rating: 30},
      {id: 2, title: 'Flutter', icon: 'assets/images/flutter.svg', primary: '#1187FB', primaryDark: '#0069c0',
        titleColor: this.styleMethod02('#0069c0'), rating: 12},
      {id: 3, title: 'Dart', icon: 'assets/images/dart.svg', primary: '#2BB7F6', primaryDark: '#0077c2',
        titleColor: this.styleMethod02('#2BB7F6'), rating: 12},
      {id: 4, title: 'Kotlin', icon: 'assets/images/language-kotlin.svg', primary: '#6779F6', primaryDark: '#26418f',
        titleColor: this.styleMethod02('#26418f'), rating: 55},
      {id: 5, title: 'Java', icon: 'assets/images/java.svg', primary: '#ED8B17', primaryDark: '#c77800',
        titleColor: this.styleMethod02('#c77800'), rating: 43},
      {id: 6, title: 'Angular', icon: 'assets/images/angular.svg', primary: '#DD0031', primaryDark: '#ab000d',
        titleColor: this.styleMethod02('#DD0031'), rating: 18},
      {id: 7, title: 'TypeScript', icon: 'assets/images/typescript.svg', primary: '#007ACC', primaryDark: '#004ba0',
        titleColor: this.styleMethod02('#007ACC'), rating: 24},
      {id: 8, title: 'CSS3', icon: 'assets/images/css-3-logo.svg', primary: '#1B84C2', primaryDark: '#004ba0',
        titleColor: this.styleMethod02('#1B84C2'), rating: 22},
      {id: 9, title: 'HTML5', icon: 'assets/images/html5.svg', primary: '#EA6228', primaryDark: '#c43e00',
        titleColor: this.styleMethod02('#EA6228'), rating: 24}
    ];
  }

  setSkillStyle(): void {
    for (const value of this.skills) {
      const style = document.createElement('style');
      document.head.appendChild(style);
      const sheet = style.sheet;
      sheet.insertRule(`.skill.skill-${value.id}:focus, .skill.skill-${value.id}.is-focused{border-color: ${this.skills[value.id].primary};}`);
      sheet.insertRule(`.skill.skill-${value.id}:focus:not(:active), .skill.skill-${value.id}.is-focused:not(:active) {
    box-shadow: 0 0.5em 1em -0.125em ${this.hexToRGBA('#000000', 0.2)}, 0 0px 0 0.125em ${this.skills[value.id].primaryDark};}`);
      sheet.insertRule(`.skill.skill-${value.id}:hover, .skill.skill-${value.id}.is-hovered{border-color: ${this.skills[value.id].primary};}`);
      sheet.insertRule(`.skill.skill-${value.id}:active, .skill.skill-${value.id}.is-active{border-color: ${this.skills[value.id].primary};}`);
    }
  }

  toRGB(color: string): string {
    let sColor = color.toLowerCase();

    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#';
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }

      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16));
      }
      return 'RGB(' + sColorChange.join(',') + ')';
    }
    return sColor;
  }

  private styleMethod02(color): string {
    let rgb = this.toRGB(color);
    rgb = rgb.replace('RGB(', '');
    rgb = rgb.replace(')', '');
    const arr = rgb.split(',');

    return (parseInt(arr[0], 10) + parseInt(arr[1], 10) + parseInt(arr[2], 10)) / 3 > 128 ? this.hexToRGBA('#000000', 0.8) : this.hexToRGBA('#ffffff', 0.8);
  }

  hexToRGBA(color, opacity): string {
    let sColor = color.toLowerCase();

    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#';
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }

      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16));
      }
      return 'rgba(' + sColorChange.join(',') + ',' + opacity + ')';
    }
    return sColor;
  }

  selectSkill(skill: Skill): void {
    this.selectedSkill = skill;
  }
}
