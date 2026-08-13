import { CommonModule,Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-elencoinfantil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './elencoinfantil.component.html',
  styleUrls: ['./elencoinfantil.component.css']
})
export class ElencoinfantilComponent  implements OnInit {
 constructor(private location: Location) {}

 directiva = {
  image: 'assets/images/directivas/DirectivaInfantil.jpeg',
  title: 'Directiva Elenco Infantil'
};

  instructores = [
  {
    name: 'Jennifer Vazques',
    role: 'Instructor',
    description: 'Danza andina y formación coreográfica.',
    image: 'assets/images/instructores/Jennifer.jpeg'
  },
  {
    name: 'Angie',
    role: 'Instructor',
    description: 'Danza andina y formación coreográfica.',
    image: 'assets/images/instructores/Angie.jpeg'
  },
  {
    name: 'Sarita Poma',
    role: 'Instructor',
    description: 'Danza andina y formación coreográfica.',
    image: 'assets/images/instructores/Sarita.jpeg'
  },
  {
    name: 'Marco ',
    role: 'Instructor',
    description: 'Danza andina y formación coreográfica.',
    image: 'assets/images/instructores/Marco.jpeg'
  },
  {
    name: 'Daissy Alulima',
    role: 'Instructor',
    description: 'Danza andina y formación coreográfica.',
    image: 'assets/images/instructores/Daisy.jpeg'
  }
];

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

    ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }

  goBack(): void {
    this.location.back();
  }
}
