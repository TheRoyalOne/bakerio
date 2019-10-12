import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioProduccionGComponent } from './inventario-produccion-g.component';

describe('InventarioProduccionGComponent', () => {
  let component: InventarioProduccionGComponent;
  let fixture: ComponentFixture<InventarioProduccionGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioProduccionGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioProduccionGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
