import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAdministratorComponent } from './sign-in-administrator.component';

describe('SignInAdministratorComponent', () => {
  let component: SignInAdministratorComponent;
  let fixture: ComponentFixture<SignInAdministratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInAdministratorComponent]
    });
    fixture = TestBed.createComponent(SignInAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
