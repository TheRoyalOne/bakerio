import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioAComponent } from './recetario-a.component';

describe('RecetarioAComponent', () => {
  let component: RecetarioAComponent;
  let fixture: ComponentFixture<RecetarioAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetarioAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetarioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
