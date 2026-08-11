import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit, OnDestroy {
  currentSlide = 0;

  slides = [
    {
      image: 'assets/images/bannerInfantil.jpeg',
      title: 'IPSIS DANZAS ANDINAS',
      subtitle: 'Cultura y tradición',
      description: 'Expresiones andinas que celebran nuestras raíces.'
    },
    {
      image: 'assets/images/bannerPlanta.jpeg',
      title: 'Nuestra danza',
      subtitle: 'Escenario y movimiento',
      description: 'Cada paso cuenta la historia de nuestra identidad.'
    },
    {
      image: 'assets/images/bannerMaster.png',
      title: 'Nuestras raíces',
      subtitle: 'Pasión y herencia',
      description: 'Transmitimos la cultura a nuevas generaciones.'
    }
  ];

  private intervalId?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
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
