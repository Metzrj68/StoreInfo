import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAttributesComponent } from './store-attributes.component';

describe('StoreAttributesComponent', () => {
  let component: StoreAttributesComponent;
  let fixture: ComponentFixture<StoreAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
