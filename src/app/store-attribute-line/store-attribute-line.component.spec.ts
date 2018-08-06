import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAttributeLineComponent } from './store-attribute-line.component';

describe('StoreAttributeLineComponent', () => {
  let component: StoreAttributeLineComponent;
  let fixture: ComponentFixture<StoreAttributeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAttributeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAttributeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
