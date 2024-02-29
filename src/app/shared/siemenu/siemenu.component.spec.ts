import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiemenuComponent } from './siemenu.component';

describe('SiemenuComponent', () => {
  let component: SiemenuComponent;
  let fixture: ComponentFixture<SiemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiemenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
