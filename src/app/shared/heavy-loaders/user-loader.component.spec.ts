import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoaderComponent } from './user-loader.component';

describe('UserLoaderComponent', () => {
  let component: UserLoaderComponent;
  let fixture: ComponentFixture<UserLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
