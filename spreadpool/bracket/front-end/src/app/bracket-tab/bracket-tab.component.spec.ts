import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketTabComponent } from './bracket-tab.component';

describe('BracketTabComponent', () => {
  let component: BracketTabComponent;
  let fixture: ComponentFixture<BracketTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
