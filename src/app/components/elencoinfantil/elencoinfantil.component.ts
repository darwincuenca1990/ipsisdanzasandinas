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
      image: 'assets/images/infantil/I1.jpeg',
      title: 'Intiraymi infantil'
    },
    {
      image: 'assets/images/infantil/I2.jpeg',
      title: 'Intiraymi infantil'
    },
    {
      image: 'assets/images/infantil/I3.jpeg',
      title: 'Intiraymi infantil'
    },
    {
      image: 'assets/images/infantil/O1.png',
      title: 'Otavalo infantil'
    },
    {
      image: 'assets/images/infantil/O2.jpeg',
      title: 'Otavalo infantil'
    },
    {
      image: 'assets/images/infantil/O3.jpeg',
      title: 'Otavalo infantil'
    },
    {
      image: 'assets/images/infantil/PAN1.png',
      title: 'Pasacalle infantil'
    },            
    {
      image: 'assets/images/infantil/PAN2.png',
      title: 'Pasacalle infantil'
    },    
      {
      image: 'assets/images/infantil/PAN3.jpeg',
      title: 'Pasacalle infantil'
    },
    {
      image: 'assets/images/infantil/SAN1.jpeg',
      title: 'Saraguro infantil'
    },    
    {
      image: 'assets/images/infantil/SAN2.jpeg',
      title: 'Saraguro infantil'
    },    
    {
      image: 'assets/images/infantil/SAN3.jpeg',
      title: 'Saraguro infantil'
    },    
    {
      image: 'assets/images/infantil/SN1.png',
      title: 'Shuar infantil'
    },        
    {
      image: 'assets/images/infantil/SN2.jpeg',
      title: 'Shuar infantil'
    },        
    {
      image: 'assets/images/infantil/SN3.jpeg',
      title: 'Shuar infantil'
    },        
    {
      image: 'assets/images/infantil/ZN1.jpeg',
      title: 'Zumbahua infantil'
    },        
    {
      image: 'assets/images/infantil/ZN2.png',
      title: 'Zumbahua infantil'
    },        
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
