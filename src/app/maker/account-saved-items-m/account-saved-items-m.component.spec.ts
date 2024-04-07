import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSavedItemsMComponent } from './account-saved-items-m.component';

describe('AccountSavedItemsMComponent', () => {
  let component: AccountSavedItemsMComponent;
  let fixture: ComponentFixture<AccountSavedItemsMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSavedItemsMComponent]
    });
    fixture = TestBed.createComponent(AccountSavedItemsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
