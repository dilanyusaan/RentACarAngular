import { TestBed } from '@angular/core/testing';

import { CarMockService } from './car-mock.service';

describe('CarMockService', () => {
  let service: CarMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
