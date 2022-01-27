import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import {
  ImageManipulationService,
  TransformType,
} from '../../services/image-manipulation/image-manipulation.service';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective implements AfterViewInit {
  @Input()
  rotate: string = '0';

  @Input()
  step: string = '10';

  private domElement: HTMLElement | null = null;

  constructor(
    private element: ElementRef,
    private imageManipulationService: ImageManipulationService
  ) {}

  ngAfterViewInit() {
    this.domElement = this.element.nativeElement;

    this.applyRotation(Number(this.rotate));
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const rotationDirection = event.shiftKey ? -1 : 1;
    const parsedStep = Number(this.step);
    this.applyRotation(parsedStep * rotationDirection);
  }

  private currentRotation(): number {
    const elementTransform = this.domElement?.style.transform;
    let extractedRotation: string = '';

    if (elementTransform) {
      const extractedRotationStartIndex = elementTransform.indexOf('rotate(');
      const extractedRotationEndIndex = elementTransform.indexOf(
        'deg)',
        extractedRotationStartIndex
      );
      extractedRotation = elementTransform.substring(
        extractedRotationStartIndex + 7,
        extractedRotationEndIndex
      );
    }

    return Number(extractedRotation);
  }

  private applyRotation(degrees: number) {
    if (this.domElement) {
      const currentTransform = this.domElement.style.transform;
      const newRotation = (this.currentRotation() || 0) + degrees;

      this.domElement.style.transform =
        this.imageManipulationService.applyTransformProperty(
          currentTransform,
          newRotation.toString(),
          TransformType.Rotate
        );
    }
  }
}
