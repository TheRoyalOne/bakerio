import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqGComponent } from './faq-g.component';

describe('FaqGComponent', () => {
  let component: FaqGComponent;
  let fixture: ComponentFixture<FaqGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
