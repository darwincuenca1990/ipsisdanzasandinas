import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-elencoinfantil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './elencoinfantil.component.html',
  styleUrls: ['./elencoinfantil.component.css']
})
export class ElencoinfantilComponent {
  gallery = [
    {
      image: '/assets/images/bannerInfantil.jpeg',
      title: 'Presentación infantil'
    },
    {
      image: '/assets/images/bannerPlanta.jpeg',
      title: 'Ensayo y movimiento'
    },
    {
      image: '/assets/images/bannerMaster.png',
      title: 'Expresión y tradición'
    },
    {
      image: '/assets/images/Logo2024.jpeg',
      title: 'Logo IPSIS'
    }
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
    this.selectedIndex =
      (this.selectedIndex - 1 + this.gallery.length) % this.gallery.length;
  }

  nextImage(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.gallery.length;
  }
}
