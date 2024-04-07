import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCollectionsCComponent } from './account-collections-c.component';

describe('AccountCollectionsCComponent', () => {
  let component: AccountCollectionsCComponent;
  let fixture: ComponentFixture<AccountCollectionsCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountCollectionsCComponent]
    });
    fixture = TestBed.createComponent(AccountCollectionsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
