import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioProduccionComponent } from './recetario-produccion.component';

describe('RecetarioProduccionComponent', () => {
  let component: RecetarioProduccionComponent;
  let fixture: ComponentFixture<RecetarioProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetarioProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetarioProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
