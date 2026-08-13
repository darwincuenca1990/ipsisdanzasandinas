import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-elencomaster',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './elencomaster.component.html',
  styleUrls: ['./elencomaster.component.css']
})
export class ElencomasterComponent {
instructores = [
  {
    name: 'Karla Cartuche',
    role: 'Instructor',
    description: 'Danza andina y formación coreográfica.',
    image: 'assets/images/instructores/Jennifer.jpeg'
  },
  
];


  gallery = [
    { image: 'assets/images/master/P1.JPG', title: 'Máster en escena' },
    { image: 'assets/images/master/P2.JPG', title: 'Máster en escena' },
    { image: 'assets/images/master/P3.JPG', title: 'Máster en escena' },
    { image: 'assets/images/master/P4.JPG', title: 'Máster en escena' }
  ];

  selectedIndex = 0;
  lightboxOpen = false;

  openLightbox(index: number): void {
    this.selectedIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  prevImage(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.gallery.length) % this.gallery.length;
  }

  nextImage(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.gallery.length;
  }
}
