import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective implements OnInit, OnChanges {
  @Input()
  multiplier: number = 1;

  private domElement: HTMLElement | null = null;
  private originalWidth: number = 0;
  private originalHeight: number = 0;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.domElement = HTMLElement = this.element.nativeElement;
    this.originalWidth = +(this.domElement?.style.width || 0);
    this.originalHeight = +(this.domElement?.style.height || 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyZoom();
  }

  applyZoom() {
    if (this.domElement) {
      this.domElement.style.transform = `scale(${this.multiplier.toString()})`;
    }
  }
}
