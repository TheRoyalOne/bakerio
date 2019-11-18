import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparadosComponent } from './preparados.component';

describe('PreparadosComponent', () => {
  let component: PreparadosComponent;
  let fixture: ComponentFixture<PreparadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
