import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoheadFormComponent } from './pohead-form.component';

describe('PoheadFormComponent', () => {
  let component: PoheadFormComponent;
  let fixture: ComponentFixture<PoheadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoheadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoheadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
