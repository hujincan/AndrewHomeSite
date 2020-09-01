import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  tabs: string[] = ['#home', '#blog', '#uses', '#photos'];

  ngOnInit(): void {
    this.setupSelected();
  }

  openDialog(): void {
    this.dialog.open(ActionBarDialogComponent, {
      maxWidth: 600,
      autoFocus: false
    });
  }

  more(): void {
    this.openSnackBar('没有更多了😌', '好吧');
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  selected(id: string): void {
    for (const idName of this.tabs) {
      const ele = document.querySelector(idName);
      this.removeClass(ele, 'is-active');
      if (id === idName) {
        this.addClass(ele, 'is-active');
      }
    }
  }

  setupSelected(): void {
    const url = window.location.pathname;
    if (!(url.indexOf('/blog/md-page/-1') === -1)) {
      this.selected('#uses');
    } else if (!(url.indexOf('blog') === -1)) {
      this.selected('#blog');
    } else if (!(url.indexOf('photos') === -1)) {
      this.selected('#photos');
    }
  }

  toggleClass(ele, cls): void {
    if (this.hasClass(ele, cls)) {
      this.removeClass(ele, cls);
    } else {
      this.addClass(ele, cls);
    }
  }

  hasClass(ele, cls): boolean {
    return ele.className.match(new RegExp('\\s|^' + cls + '(\\s|$)'));
  }
  private addClass(ele, cls): void {
    if (!this.hasClass(ele, cls)) {
      ele.className += ' ' + cls;
    }
  }
  private removeClass(ele, cls): void {
    if (this.hasClass(ele, cls)) {
      const reg = RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, '');
    }
  }

  toggleBurger(): void {
    this.toggleClass(document.querySelector('.navbar-burger'), 'is-active');
    this.toggleClass(document.querySelector('.navbar-menu'), 'is-active');
  }
}

@Component({
  selector: 'app-action-bar-dialog',
  templateUrl: './action-bar-dialog.component.html',
  styleUrls: ['./action-bar-dialog.component.scss']
})
export class ActionBarDialogComponent {
  constructor(public dialogRef: MatDialogRef<ActionBarDialogComponent>, private snackBar: MatSnackBar) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  copyQQNumber(): void {
    const btn = document.querySelector('#btn');
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', '677026563');
    document.body.appendChild(input);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('复制成功');
    }
    document.body.removeChild(input);
    this.openSnackBar('已复制到剪贴板', '好的');
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
