import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMessagesCComponent } from './account-messages-c.component';

describe('AccountMessagesCComponent', () => {
  let component: AccountMessagesCComponent;
  let fixture: ComponentFixture<AccountMessagesCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountMessagesCComponent]
    });
    fixture = TestBed.createComponent(AccountMessagesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
