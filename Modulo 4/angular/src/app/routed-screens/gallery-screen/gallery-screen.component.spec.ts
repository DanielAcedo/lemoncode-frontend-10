import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryScreenComponent } from './gallery-screen.component';

describe('GalleryScreenComponent', () => {
  let component: GalleryScreenComponent;
  let fixture: ComponentFixture<GalleryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
