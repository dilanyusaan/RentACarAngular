import { TestBed } from '@angular/core/testing';

import { CarAbstractService } from './car-abstract.service';

describe('CarAbstractService', () => {
  let service: CarAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
