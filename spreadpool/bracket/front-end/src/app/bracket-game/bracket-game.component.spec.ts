import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketGameComponent } from './bracket-game.component';

describe('BracketGameComponent', () => {
  let component: BracketGameComponent;
  let fixture: ComponentFixture<BracketGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
