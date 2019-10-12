import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEnvioComponent } from './detalles-envio.component';

describe('DetallesEnvioComponent', () => {
  let component: DetallesEnvioComponent;
  let fixture: ComponentFixture<DetallesEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
