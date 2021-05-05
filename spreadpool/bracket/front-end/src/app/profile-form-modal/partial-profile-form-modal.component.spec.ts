import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialProfileFormModalComponent } from './profile-form-modal.component';

describe('PartialProfileFormModalComponent', () => {
  let component: PartialProfileFormModalComponent;
  let fixture: ComponentFixture<PartialProfileFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialProfileFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialProfileFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
