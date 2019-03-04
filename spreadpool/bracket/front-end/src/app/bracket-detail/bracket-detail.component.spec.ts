import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketDetailComponent } from './bracket-detail.component';

describe('BracketDetailComponent', () => {
  let component: BracketDetailComponent;
  let fixture: ComponentFixture<BracketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
