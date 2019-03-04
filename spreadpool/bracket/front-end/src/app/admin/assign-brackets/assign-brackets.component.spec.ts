import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBracketsComponent } from './assign-brackets.component';

describe('AssignBracketsComponent', () => {
  let component: AssignBracketsComponent;
  let fixture: ComponentFixture<AssignBracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
