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
  gallery = [
    { image: 'assets/images/bannerMaster.png', title: 'Máster en escena' },
    { image: 'assets/images/bannerInfantil.jpeg', title: 'Herencia y tradición' },
    { image: 'assets/images/bannerPlanta.jpeg', title: 'Pasión y experiencia' },
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
