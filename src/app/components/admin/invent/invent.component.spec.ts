import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventComponent } from './invent.component';

describe('InventComponent', () => {
  let component: InventComponent;
  let fixture: ComponentFixture<InventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
