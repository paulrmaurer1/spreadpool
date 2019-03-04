import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBracketsComponent } from './create-brackets.component';

describe('CreateBracketsComponent', () => {
  let component: CreateBracketsComponent;
  let fixture: ComponentFixture<CreateBracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
