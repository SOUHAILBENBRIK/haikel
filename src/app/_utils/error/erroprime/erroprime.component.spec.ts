import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroprimeComponent } from './erroprime.component';

describe('ErroprimeComponent', () => {
  let component: ErroprimeComponent;
  let fixture: ComponentFixture<ErroprimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroprimeComponent]
    });
    fixture = TestBed.createComponent(ErroprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
