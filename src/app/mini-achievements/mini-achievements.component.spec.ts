import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAchievementsComponent } from './mini-achievements.component';

describe('MiniAchievementsComponent', () => {
  let component: MiniAchievementsComponent;
  let fixture: ComponentFixture<MiniAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
