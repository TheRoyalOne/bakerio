import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroaComponent } from './registroa.component';

describe('RegistroaComponent', () => {
  let component: RegistroaComponent;
  let fixture: ComponentFixture<RegistroaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
