import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrivateComponent } from './header-private.component';

describe('HeaderPrivateComponent', () => {
  let component: HeaderPrivateComponent;
  let fixture: ComponentFixture<HeaderPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
