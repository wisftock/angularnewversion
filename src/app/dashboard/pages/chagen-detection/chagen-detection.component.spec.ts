import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChagenDetectionComponent } from './chagen-detection.component';

describe('ChagenDetectionComponent', () => {
  let component: ChagenDetectionComponent;
  let fixture: ComponentFixture<ChagenDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChagenDetectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChagenDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
