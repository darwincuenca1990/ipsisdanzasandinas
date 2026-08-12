import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nuestras-presentaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestras-presentaciones.html',
  styleUrls: ['./nuestras-presentaciones.css'],
})
export class NuestrasPresentaciones {
  activeTab: 'obras' | 'presentaciones' = 'obras';

  setTab(tab: 'obras' | 'presentaciones'): void {
    this.activeTab = tab;
  }
}
