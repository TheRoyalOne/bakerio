import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaaComponent } from './cajaa.component';

describe('CajaaComponent', () => {
  let component: CajaaComponent;
  let fixture: ComponentFixture<CajaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
