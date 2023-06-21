import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcaFormComponent } from './qca-form.component';

describe('QcaFormComponent', () => {
  let component: QcaFormComponent;
  let fixture: ComponentFixture<QcaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
