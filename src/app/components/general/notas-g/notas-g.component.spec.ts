import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasGComponent } from './notas-g.component';

describe('NotasGComponent', () => {
  let component: NotasGComponent;
  let fixture: ComponentFixture<NotasGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
