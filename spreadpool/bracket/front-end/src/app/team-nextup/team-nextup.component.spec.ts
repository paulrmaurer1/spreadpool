import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNextupComponent } from './team-nextup.component';

describe('TeamNextupComponent', () => {
  let component: TeamNextupComponent;
  let fixture: ComponentFixture<TeamNextupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamNextupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNextupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
