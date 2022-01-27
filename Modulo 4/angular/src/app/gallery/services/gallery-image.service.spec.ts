import { TestBed } from '@angular/core/testing';

import { GalleryImageService } from './gallery-image.service';

describe('GalleryImageService', () => {
  let service: GalleryImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
