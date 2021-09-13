import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreElaboradosComponent } from './pre-elaborados.component';

describe('PreElaboradosComponent', () => {
  let component: PreElaboradosComponent;
  let fixture: ComponentFixture<PreElaboradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreElaboradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreElaboradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
