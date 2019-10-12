import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioEypComponent } from './recetario-eyp.component';

describe('RecetarioEypComponent', () => {
  let component: RecetarioEypComponent;
  let fixture: ComponentFixture<RecetarioEypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetarioEypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetarioEypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
