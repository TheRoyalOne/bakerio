import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDetallesComponent } from './tareas-detalles.component';

describe('TareasDetallesComponent', () => {
  let component: TareasDetallesComponent;
  let fixture: ComponentFixture<TareasDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
