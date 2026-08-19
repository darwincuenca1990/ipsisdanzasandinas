import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-institucional',
  standalone: true,
  imports: [CommonModule, NgForOf, RouterLink],
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit, OnDestroy {
  currentSlide = 0;

  slides = [
    {
      image: 'assets/images/hayaUma.jpg',
      title: 'IPSIS DANZAS ANDINAS',
      subtitle: 'Cultura y tradición',
      description: 'Expresiones andinas que celebran nuestras raíces.'
    },
    {
      image: 'assets/images/bannerMaster.png',
      title: 'Nuestra danza',
      subtitle: 'Escenario y movimiento',
      description: 'Cada paso cuenta la historia de nuestra identidad.'
    },
    {
      image: 'assets/images/shuarninos.png',
      title: 'Nuestras raíces',
      subtitle: 'Pasión y herencia',
      description: 'Transmitimos la cultura a nuevas generaciones.'
    }
  ];

  logoImage = 'assets/images/Logo2024.jpeg';
  visionImage = 'assets/images/Wiki.jpg';
  closingImage = 'assets/images/bannerInfantil.jpeg';

  downloadUrl = 'assets/documents/PORTAFOLIO_IPSIS_DANZAS_ANDINAS_FINAL_1.pdf';
  previewUrl: SafeResourceUrl;
  isPdfPreviewOpen = false;
  private intervalId?: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.downloadUrl);
  }

  openPdfPreview(): void {
    this.isPdfPreviewOpen = true;
    document.body.classList.add('pdf-modal-open');
  }

  closePdfPreview(): void {
    this.isPdfPreviewOpen = false;
    document.body.classList.remove('pdf-modal-open');
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isPdfPreviewOpen) {
      this.closePdfPreview();
    }
  }

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    document.body.classList.remove('pdf-modal-open');
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.cdr.detectChanges();
  }

  previousSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.cdr.detectChanges();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.cdr.detectChanges();
  }
}
