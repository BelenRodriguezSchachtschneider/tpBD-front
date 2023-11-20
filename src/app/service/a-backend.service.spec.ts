import { TestBed } from '@angular/core/testing';

import { ABackendService } from './a-backend.service';

describe('ABackendService', () => {
  let service: ABackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ABackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
