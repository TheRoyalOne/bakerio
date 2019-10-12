import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaVComponent } from './venta-v.component';

describe('VentaVComponent', () => {
  let component: VentaVComponent;
  let fixture: ComponentFixture<VentaVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
