import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvuserComponent } from './invuser.component';

describe('InvuserComponent', () => {
  let component: InvuserComponent;
  let fixture: ComponentFixture<InvuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
