import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estructura-organizacional',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './estructura-organizacional.html',
  styleUrls: ['./estructura-organizacional.css'],
})
export class EstructuraOrganizacional {
 director = {
    nombre: 'Mgtr. Darwin Cuenca',
    cargo: 'Dirección General',
    foto: 'assets/images/estructuraOrganizacional/Darwin.JPEG'
  };

  subdirectora = {
    nombre: 'Ing. Viviana Cabrera',
    cargo: 'Subdirectora General',
    foto: 'assets/images/estructuraOrganizacional/Vivi.jpeg'
  };

  contabilidad = {
    nombre: 'Mgtr. Daissy Alulima',
    cargo: 'Contabilidad',
    foto: 'assets/images/estructuraOrganizacional/daissy-alulima.jpg'
  };

  communityManager = {
    nombre: 'Dayanna Tamay',
    cargo: 'Community Manager',
    foto: 'assets/images/estructuraOrganizacional/Daya.jpeg'
  };
}
