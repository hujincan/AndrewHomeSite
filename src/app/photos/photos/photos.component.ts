import {Component, Inject, OnInit} from '@angular/core';
import { PHOTOS } from '../../data/photos';
import * as $ from 'src/assets/js/jquery-3.5.1.min.js';
import {Photo} from '../../data/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos = PHOTOS;
  photo: Photo = null;
  isLoading = true;

  ngOnInit(): void {
    this.imageView();
  }

  clickPhoto(photo: Photo): void {
    this.photo = photo;
  }

  clearPhoto(): void {
    this.photo = null;
  }

  getImageWidth(url, callback): void {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      callback(img.width, img.height);
    } else {
      img.onload = () => {
        callback(img.width, img.height);
      };
    }
  }

  imgbox(obj, i): void {
    const imgSrc = $(obj).find('img').attr('src');
    this.getImageWidth(imgSrc, (w, h) => {
      $(obj).find('i').css({'padding-bottom': h / w * 100 + '%'});
      $(obj).css({ flexGrow: (w * 100) / h, flexBasis: (w * 240) / h + 'px' });
      if (i === 1 && this.isLoading) {
        this.isLoading = false;
      }
    });
  }

  async imageView(): Promise<void> {

    const photoX = await this.asyncCheck(() => document.querySelector('.img_x'));

    const imgs = document.getElementById('img_wrap').getElementsByClassName('img_x');
    console.log(imgs.length);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < imgs.length; i++) {
      this.imgbox(imgs[i], imgs.length - i);
    }
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
