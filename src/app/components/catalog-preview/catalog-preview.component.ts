import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PORTAFOLIO_GOOGLE_DRIVE_VIEWER_URL, PORTAFOLIO_GOOGLE_DRIVE_DOWNLOAD_URL } from '../../pdf.constants';

@Component({
  selector: 'app-catalog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog-preview.component.html',
  styleUrls: ['./catalog-preview.component.css'],
})
export class CatalogPreviewComponent {
  previewUrl: SafeResourceUrl;
  downloadUrl = PORTAFOLIO_GOOGLE_DRIVE_DOWNLOAD_URL;

  constructor(private sanitizer: DomSanitizer) {
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(PORTAFOLIO_GOOGLE_DRIVE_VIEWER_URL);
  }
}
