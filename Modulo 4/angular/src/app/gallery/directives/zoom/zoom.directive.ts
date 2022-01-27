import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ImageManipulationService,
  TransformType,
} from '../../services/image-manipulation/image-manipulation.service';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective implements OnInit, OnChanges {
  @Input()
  multiplier: number = 1;

  private domElement: HTMLElement | null = null;

  constructor(
    private element: ElementRef,
    private imageManipulationService: ImageManipulationService
  ) {}

  ngOnInit() {
    this.domElement = HTMLElement = this.element.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyZoom();
  }

  applyZoom() {
    if (this.domElement) {
      const newTransform = this.imageManipulationService.applyTransformProperty(
        this.domElement.style.transform,
        this.multiplier.toString(),
        TransformType.Scale
      );
      this.domElement.style.transform = newTransform;
    }
  }
}
