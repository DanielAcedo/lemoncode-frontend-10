import { Injectable } from '@angular/core';

export enum TransformType {
  Scale = 'scale',
  Rotate = 'rotate',
}

@Injectable({
  providedIn: 'root',
})
export class ImageManipulationService {
  constructor() {}

  /**
   * Tranforma el string de CSS transform introducido para cambiar el valor de la propiedad deseada y dejar intactas el resto de propiedades
   * @param transform CSS transform a modificar
   * @param propertyValue Nuevo valor para la propiedad
   * @param transformType Nombre de la propiedad a reemplazar
   * @returns CSS transform modificado
   */
  public applyTransformProperty(
    transform: string,
    propertyValue: string,
    transformType: TransformType
  ): string {
    let resultTransform: string = transform;
    const currentTransformRotateIndex = transform.indexOf(`${transformType}(`);
    const transformUnit = this.getTransformPropertyUnit(transformType);

    if (currentTransformRotateIndex === -1) {
      resultTransform += ` ${transformType}(${propertyValue}${transformUnit})`;
    } else {
      // Captura en distintos grupos "rotate(" o "scale(", el valor (1, 1.2 etc) y "unidad)"
      const regex = RegExp(
        `(${transformType}\\()(-?\\d+\\.?\\d*)(${transformUnit}\\))`
      );
      resultTransform = transform.replace(regex, `$1${propertyValue}$3`);
    }

    return resultTransform;
  }

  private getTransformPropertyUnit(transformType: TransformType) {
    switch (transformType) {
      case TransformType.Rotate:
        return 'deg';
      default:
        return '';
    }
  }
}
