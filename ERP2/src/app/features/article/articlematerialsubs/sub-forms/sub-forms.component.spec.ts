import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormsComponent } from './sub-forms.component';

describe('SubFormsComponent', () => {
  let component: SubFormsComponent;
  let fixture: ComponentFixture<SubFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
