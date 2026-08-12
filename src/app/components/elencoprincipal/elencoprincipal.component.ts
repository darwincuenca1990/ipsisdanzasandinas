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
    { image: 'assets/images/principal/F1.png', title: 'Fiesta de mi pueblo' },
    { image: 'assets/images/principal/F2.png', title: 'Fiesta de mi pueblo' },
    { image: 'assets/images/principal/F3.jpeg', title: 'Fiesta de mi pueblo' },
    { image: 'assets/images/principal/IPSIS 3.jpg', title: 'Fiesta de mi pueblo' },                
    { image: 'assets/images/principal/IPSIS 4.jpg', title: 'Fiesta de mi pueblo' },  
    { image: 'assets/images/principal/IPSIS6.jpg', title: 'Pasacalle' },
    { image: 'assets/images/principal/PAP1.png', title: 'Pasacalle' },    
    { image: 'assets/images/principal/PAP3.png', title: 'Pasacalle' },    
    { image: 'assets/images/principal/PAP2.jpeg', title: 'Pasacalle' },    
    { image: 'assets/images/principal/SP1.jpeg', title: 'Shuar' },    
    { image: 'assets/images/principal/SP2.jpeg', title: 'Shuar' },    
    { image: 'assets/images/principal/SP3.png', title: 'Shuar' },    


    { image: 'assets/images/principal/IPSIS 9.jpg', title: 'Chola Cuencana' },
    { image: 'assets/images/principal/IPSIS 11.jpg', title: 'Otavalo' },    
    { image: 'assets/images/principal/IPSIS 12.jpg', title: 'Otavalo' }, 
    { image: 'assets/images/principal/IPSIS 17.jpg', title: 'Aruchicus' },    
    { image: 'assets/images/principal/IPSIS 20.jpg', title: 'Aruchicus' },    
    { image: 'assets/images/principal/IPSIS 21.jpg', title: 'Intiraymi' },    
    { image: 'assets/images/principal/IPSIS 22.jpg', title: 'Intiraymi' },    
    { image: 'assets/images/principal/IPSIS 23.jpg', title: 'Intiraymi' },    
    { image: 'assets/images/principal/IPSIS 24.jpg', title: 'Saraguro' },    
    { image: 'assets/images/principal/IPSIS 27.jpg', title: 'Saraguro' },    
    { image: 'assets/images/principal/ZP1.jpeg', title: 'Zumbahua' },    
    { image: 'assets/images/principal/ZP2.jpeg', title: 'Zumbahua' },    
    { image: 'assets/images/principal/ZP3.png', title: 'Zumbahua' },    


    

    { image: 'assets/images/principal/C1.png', title: 'Caporal' },
    { image: 'assets/images/principal/C2.jpeg', title: 'Caporal' },    
    { image: 'assets/images/principal/H1.png', title: 'Huaylarsh' },
    { image: 'assets/images/principal/H2.jpeg', title: 'Huaylarsh' },
    { image: 'assets/images/principal/H3.jpeg', title: 'Huaylarsh' },
    { image: 'assets/images/principal/T1.png', title: 'Tinku' },    
    { image: 'assets/images/principal/T2.png', title: 'Tinku' },    
    { image: 'assets/images/principal/T3.png', title: 'Tinku' },    
    { image: 'assets/images/principal/TP2.jpeg', title: 'Tobas' },    
    { image: 'assets/images/principal/TP3.jpeg', title: 'Tobas' }   

               

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
