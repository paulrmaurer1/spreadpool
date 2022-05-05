import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileFormModalComponent } from './admin-profile-form-modal.component';

describe('AdminProfileFormModalComponent', () => {
  let component: AdminProfileFormModalComponent;
  let fixture: ComponentFixture<AdminProfileFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
