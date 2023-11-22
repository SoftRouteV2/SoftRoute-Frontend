import { TestBed } from '@angular/core/testing';

import { ShipmentBackendService } from './shipment-backend.service';

describe('ShipmentBackendService', () => {
  let service: ShipmentBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
