import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInsumosGComponent } from './inventario-insumos-g.component';

describe('InventarioInsumosGComponent', () => {
  let component: InventarioInsumosGComponent;
  let fixture: ComponentFixture<InventarioInsumosGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioInsumosGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioInsumosGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
