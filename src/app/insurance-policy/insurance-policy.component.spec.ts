import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePolicyComponent } from './insurance-policy.component';

describe('InsurancePolicyComponent', () => {
  let component: InsurancePolicyComponent;
  let fixture: ComponentFixture<InsurancePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurancePolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
