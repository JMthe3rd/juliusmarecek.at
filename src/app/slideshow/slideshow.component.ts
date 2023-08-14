import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['student.jpg', 'augarten-palace.jpg', 'htl.jpg', 'pan.jpg', 'laptop.jpg'];
  headlines = [
    'Bring self development to the next level',
    'From music', 
    'to technique', 
    'to gastronomy',
    'to coding'
  ];
  currentImage = 0;
  showImage =  true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
        this.currentImage++;
        this.currentImage = this.currentImage % this.images.length;
        this.showImage = false;

        setTimeout(() => {
          this.showImage = true;
        },10);
    },8000);
  }
}
