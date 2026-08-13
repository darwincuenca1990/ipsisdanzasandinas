import { CommonModule,Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nuestras-presentaciones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nuestras-presentaciones.html',
  styleUrls: ['./nuestras-presentaciones.css'],
})
export class NuestrasPresentaciones {
  constructor(private location: Location) {}
  
  activeTab: 'obras' | 'presentaciones' = 'obras';

  setTab(tab: 'obras' | 'presentaciones'): void {
    this.activeTab = tab;
  }

  presentations = [
  {
    title: 'Presentación IPSIS Danzas Andinas',
    category: 'Presentación',
    description:
      'Una muestra del trabajo artístico y cultural de IPSIS Danzas Andinas.',
    url: 'https://www.youtube.com/watch?v=m51WofWW1Vg',
    thumbnail: 'https://img.youtube.com/vi/m51WofWW1Vg/hqdefault.jpg'
  },

  {
    title: 'Presentación de danza andina',
    category: 'Presentación',
    description:
      'Una presentación que celebra nuestras raíces a través de la danza.',
    url: 'https://youtu.be/uuHC8dC8DGk',
    thumbnail: 'https://img.youtube.com/vi/uuHC8dC8DGk/hqdefault.jpg'
  },

  {
    title: 'Presentación IPSIS',
    category: 'Presentación',
    description:
      'Parte del repertorio artístico de IPSIS Danzas Andinas.',
    url: 'https://youtu.be/FbRz78Wavkg',
    thumbnail: 'https://img.youtube.com/vi/FbRz78Wavkg/hqdefault.jpg'
  },

  {
    title: 'Danza Andina',
    category: 'Presentación',
    description:
      'Una muestra de nuestra expresión artística y cultural.',
    url: 'https://youtu.be/grVU7xrDagk',
    thumbnail: 'https://img.youtube.com/vi/grVU7xrDagk/hqdefault.jpg'
  },

  {
    title: 'IPSIS Danzas Andinas',
    category: 'Presentación',
    description:
      'Presentación de nuestro elenco en escena.',
    url: 'https://youtu.be/vsmpTyrP77Y',
    thumbnail: 'https://img.youtube.com/vi/vsmpTyrP77Y/hqdefault.jpg'
  }
];

  goBack(): void {
    this.location.back();
  }
}
