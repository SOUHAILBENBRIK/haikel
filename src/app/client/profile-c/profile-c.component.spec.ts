import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCComponent } from './profile-c.component';

describe('ProfileCComponent', () => {
  let component: ProfileCComponent;
  let fixture: ComponentFixture<ProfileCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCComponent]
    });
    fixture = TestBed.createComponent(ProfileCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
