import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMessagesMComponent } from './account-messages-m.component';

describe('AccountMessagesMComponent', () => {
  let component: AccountMessagesMComponent;
  let fixture: ComponentFixture<AccountMessagesMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountMessagesMComponent]
    });
    fixture = TestBed.createComponent(AccountMessagesMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
