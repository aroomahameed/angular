import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenifirerFormComponent } from './idenifirer-form.component';

describe('IdenifirerFormComponent', () => {
  let component: IdenifirerFormComponent;
  let fixture: ComponentFixture<IdenifirerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdenifirerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdenifirerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
