import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCuentaMenudeoComponent } from './creacion-cuenta-menudeo.component';

describe('CreacionCuentaMenudeoComponent', () => {
  let component: CreacionCuentaMenudeoComponent;
  let fixture: ComponentFixture<CreacionCuentaMenudeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionCuentaMenudeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionCuentaMenudeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
