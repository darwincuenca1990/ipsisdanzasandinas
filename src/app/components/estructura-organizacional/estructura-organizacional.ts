import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estructura-organizacional',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './estructura-organizacional.html',
  styleUrl: './estructura-organizacional.css',
})
export class EstructuraOrganizacional {

}
