import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RutasComponent } from '../rutas/rutas.component';

describe('RutaComponent', () => {
  let component: RutasComponent;
  let fixture: ComponentFixture<RutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
