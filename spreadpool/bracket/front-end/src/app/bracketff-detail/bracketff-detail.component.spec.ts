import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketffDetailComponent } from './bracketff-detail.component';

describe('BracketffDetailComponent', () => {
  let component: BracketffDetailComponent;
  let fixture: ComponentFixture<BracketffDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketffDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
