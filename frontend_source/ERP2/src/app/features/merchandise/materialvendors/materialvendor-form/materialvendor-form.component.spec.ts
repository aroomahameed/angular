import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialvendorFormComponent } from './materialvendor-form.component';

describe('MaterialvendorFormComponent', () => {
  let component: MaterialvendorFormComponent;
  let fixture: ComponentFixture<MaterialvendorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialvendorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialvendorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
