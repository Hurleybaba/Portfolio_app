import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhGalleryComponent } from './ph-gallery.component';

describe('PhGalleryComponent', () => {
  let component: PhGalleryComponent;
  let fixture: ComponentFixture<PhGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
