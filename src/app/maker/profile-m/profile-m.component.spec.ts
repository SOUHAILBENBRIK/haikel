import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMComponent } from './profile-m.component';

describe('ProfileMComponent', () => {
  let component: ProfileMComponent;
  let fixture: ComponentFixture<ProfileMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileMComponent]
    });
    fixture = TestBed.createComponent(ProfileMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
