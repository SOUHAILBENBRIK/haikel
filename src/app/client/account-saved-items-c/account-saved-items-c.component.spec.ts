import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSavedItemsCComponent } from './account-saved-items-c.component';

describe('AccountSavedItemsCComponent', () => {
  let component: AccountSavedItemsCComponent;
  let fixture: ComponentFixture<AccountSavedItemsCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSavedItemsCComponent]
    });
    fixture = TestBed.createComponent(AccountSavedItemsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
