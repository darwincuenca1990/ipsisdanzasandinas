import { CommonModule } from '@angular/common';
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
  activeTab: 'obras' | 'presentaciones' = 'obras';

  setTab(tab: 'obras' | 'presentaciones'): void {
    this.activeTab = tab;
  }
}
