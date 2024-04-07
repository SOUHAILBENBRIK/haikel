import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxgfxComponent } from './parallaxgfx.component';

describe('ParallaxgfxComponent', () => {
  let component: ParallaxgfxComponent;
  let fixture: ComponentFixture<ParallaxgfxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxgfxComponent]
    });
    fixture = TestBed.createComponent(ParallaxgfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
