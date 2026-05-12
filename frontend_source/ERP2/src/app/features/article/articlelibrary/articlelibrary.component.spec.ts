import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlelibraryComponent } from './articlelibrary.component';

describe('ArticlelibraryComponent', () => {
  let component: ArticlelibraryComponent;
  let fixture: ComponentFixture<ArticlelibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlelibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlelibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
