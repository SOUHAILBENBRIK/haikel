import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesMaterielComponent } from './machines-materiel.component';

describe('MachinesMaterielComponent', () => {
  let component: MachinesMaterielComponent;
  let fixture: ComponentFixture<MachinesMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinesMaterielComponent]
    });
    fixture = TestBed.createComponent(MachinesMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
