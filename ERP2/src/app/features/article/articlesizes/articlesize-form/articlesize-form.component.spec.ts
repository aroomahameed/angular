import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesizeFormComponent } from './articlesize-form.component';

describe('ArticlesizeFormComponent', () => {
  let component: ArticlesizeFormComponent;
  let fixture: ComponentFixture<ArticlesizeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesizeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
