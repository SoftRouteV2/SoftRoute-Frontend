import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierHomeComponent } from './supplier-home.component';

describe('SupplierHomeComponent', () => {
  let component: SupplierHomeComponent;
  let fixture: ComponentFixture<SupplierHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierHomeComponent]
    });
    fixture = TestBed.createComponent(SupplierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
