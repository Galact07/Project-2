import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePolicyModalComponent } from './update-policy-modal.component';

describe('UpdatePolicyModalComponent', () => {
  let component: UpdatePolicyModalComponent;
  let fixture: ComponentFixture<UpdatePolicyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePolicyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePolicyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
