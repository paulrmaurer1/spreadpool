import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterTextboxComponent } from './roster-textbox.component';

describe('RosterTextboxComponent', () => {
  let component: RosterTextboxComponent;
  let fixture: ComponentFixture<RosterTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
