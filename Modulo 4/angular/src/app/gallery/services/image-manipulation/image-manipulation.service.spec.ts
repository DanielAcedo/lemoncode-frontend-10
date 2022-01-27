import { TestBed } from '@angular/core/testing';

import { ImageManipulationService } from './image-manipulation.service';

describe('ImageManipulationService', () => {
  let service: ImageManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
