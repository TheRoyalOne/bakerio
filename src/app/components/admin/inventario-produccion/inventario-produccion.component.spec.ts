import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioProduccionComponent } from './inventario-produccion.component';

describe('InventarioProduccionComponent', () => {
  let component: InventarioProduccionComponent;
  let fixture: ComponentFixture<InventarioProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
