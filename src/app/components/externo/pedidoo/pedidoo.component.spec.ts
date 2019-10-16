import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidooComponent } from './pedidoo.component';

describe('PedidooComponent', () => {
  let component: PedidooComponent;
  let fixture: ComponentFixture<PedidooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
