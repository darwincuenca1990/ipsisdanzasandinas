import { CommonModule,Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estructura-organizacional',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './estructura-organizacional.html',
  styleUrls: ['./estructura-organizacional.css'],
})
export class EstructuraOrganizacional implements OnInit {
 constructor(private location: Location) {}
  director = {
    nombre: 'Mgtr. Darwin Cuenca',
    cargo: 'Dirección General',
    foto: 'assets/images/estructuraOrganizacional/Darwin.JPEG'
  };

  subdirectora = {
    nombre: 'Ing. Viviana Cabrera',
    cargo: 'Subdirectora General',
    foto: 'assets/images/estructuraOrganizacional/Vivi1.jpeg'
  };

  contabilidad = {
    nombre: 'Mgtr. Daissy Alulima',
    cargo: 'Contabilidad',
    foto: 'assets/images/estructuraOrganizacional/Daisy.jpeg'
  };

  communityManager = {
    nombre: 'Dayanna Tamay',
    cargo: 'Community Manager',
    foto: 'assets/images/estructuraOrganizacional/Daya.jpeg'
  };

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
