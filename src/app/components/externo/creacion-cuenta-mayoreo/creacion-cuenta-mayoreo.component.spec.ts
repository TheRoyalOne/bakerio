import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCuentaMayoreoComponent } from './creacion-cuenta-mayoreo.component';

describe('CreacionCuentaMayoreoComponent', () => {
  let component: CreacionCuentaMayoreoComponent;
  let fixture: ComponentFixture<CreacionCuentaMayoreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionCuentaMayoreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionCuentaMayoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
