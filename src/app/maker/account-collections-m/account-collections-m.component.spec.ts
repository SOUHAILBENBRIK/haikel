import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCollectionsMComponent } from './account-collections-m.component';

describe('AccountCollectionsMComponent', () => {
  let component: AccountCollectionsMComponent;
  let fixture: ComponentFixture<AccountCollectionsMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountCollectionsMComponent]
    });
    fixture = TestBed.createComponent(AccountCollectionsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
