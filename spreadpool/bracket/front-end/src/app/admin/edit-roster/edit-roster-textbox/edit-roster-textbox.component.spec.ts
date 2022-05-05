import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRosterTextboxComponent } from './edit-roster-textbox.component';

describe('EditRosterTextboxComponent', () => {
  let component: EditRosterTextboxComponent;
  let fixture: ComponentFixture<EditRosterTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRosterTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRosterTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
