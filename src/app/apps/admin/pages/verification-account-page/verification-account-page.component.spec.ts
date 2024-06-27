import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationAccountPageComponent } from './verification-account-page.component';

describe('VerificationAccountPageComponent', () => {
  let component: VerificationAccountPageComponent;
  let fixture: ComponentFixture<VerificationAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationAccountPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificationAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
