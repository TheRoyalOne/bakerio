import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioProduccionVComponent } from './inventario-produccion-v.component';

describe('InventarioProduccionVComponent', () => {
  let component: InventarioProduccionVComponent;
  let fixture: ComponentFixture<InventarioProduccionVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioProduccionVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioProduccionVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
