import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveReject } from './approve-reject';

describe('ApproveReject', () => {
  let component: ApproveReject;
  let fixture: ComponentFixture<ApproveReject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveReject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveReject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
