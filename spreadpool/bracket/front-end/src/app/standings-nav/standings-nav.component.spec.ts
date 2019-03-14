import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsNavComponent } from './standings-nav.component';

describe('StandingsNavComponent', () => {
  let component: StandingsNavComponent;
  let fixture: ComponentFixture<StandingsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
