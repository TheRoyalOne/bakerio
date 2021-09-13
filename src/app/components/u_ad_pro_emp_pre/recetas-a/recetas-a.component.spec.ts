import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasAComponent } from './recetas-a.component';

describe('RecetasAComponent', () => {
  let component: RecetasAComponent;
  let fixture: ComponentFixture<RecetasAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
