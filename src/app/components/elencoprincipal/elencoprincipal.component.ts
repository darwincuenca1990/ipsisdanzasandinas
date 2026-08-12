import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-elencoprincipal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './elencoprincipal.component.html',
  styleUrls: ['./elencoprincipal.component.css']
})
export class ElencoprincipalComponent {
  gallery = [
    { image: 'assets/images/bannerPlanta.jpeg', title: 'Presentación principal' },
    { image: 'assets/images/bannerInfantil.jpeg', title: 'Ensayo y energía' },
    { image: 'assets/images/bannerMaster.png', title: 'Tradición en movimiento' },
    { image: 'assets/images/Logo2024.jpeg', title: 'Logo IPSIS' }
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
