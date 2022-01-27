import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { images } from '../models/image/image.mock';
import { Image } from '../models/image/image.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryImageService {
  constructor() {}

  public getImages(): Observable<Image[]> {
    return of(images);
  }
}
