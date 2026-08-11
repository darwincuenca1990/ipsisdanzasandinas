import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-elencoinfantil',
  standalone: true,
  imports: [CommonModule],
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
}
