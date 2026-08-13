import { CommonModule,Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proximos-eventos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proximos-eventos.html',
  styleUrls: ['./proximos-eventos.css'],
})
export class ProximosEventos {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
