import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaComponent } from './merma.component';

describe('MermaComponent', () => {
  let component: MermaComponent;
  let fixture: ComponentFixture<MermaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MermaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
