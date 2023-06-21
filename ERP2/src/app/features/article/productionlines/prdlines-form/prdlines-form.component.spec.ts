import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdlinesFormComponent } from './prdlines-form.component';

describe('PrdlinesFormComponent', () => {
  let component: PrdlinesFormComponent;
  let fixture: ComponentFixture<PrdlinesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdlinesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdlinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
