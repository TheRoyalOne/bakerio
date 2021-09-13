import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanLaboralComponent } from './plan-laboral.component';

describe('PlanLaboralComponent', () => {
  let component: PlanLaboralComponent;
  let fixture: ComponentFixture<PlanLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
