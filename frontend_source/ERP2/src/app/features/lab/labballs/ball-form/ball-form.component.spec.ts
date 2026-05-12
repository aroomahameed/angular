import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallFormComponent } from './ball-form.component';

describe('BallFormComponent', () => {
  let component: BallFormComponent;
  let fixture: ComponentFixture<BallFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
