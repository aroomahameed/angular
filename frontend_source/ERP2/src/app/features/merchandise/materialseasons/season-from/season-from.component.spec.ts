import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonFromComponent } from './season-from.component';

describe('SeasonFromComponent', () => {
  let component: SeasonFromComponent;
  let fixture: ComponentFixture<SeasonFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
