import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommEquipmentComponent } from './comm-equipment.component';

describe('CommEquipmentComponent', () => {
  let component: CommEquipmentComponent;
  let fixture: ComponentFixture<CommEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
