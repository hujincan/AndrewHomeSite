import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ActionBarDialogComponent, {
      maxWidth: 600,
      autoFocus: false
    });
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
