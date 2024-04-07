import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterblackComponent } from './footerblack.component';

describe('FooterblackComponent', () => {
  let component: FooterblackComponent;
  let fixture: ComponentFixture<FooterblackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterblackComponent]
    });
    fixture = TestBed.createComponent(FooterblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
