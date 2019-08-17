import { TestBed } from '@angular/core/testing';

import { FcAuthorizationService } from './fc-authorization.service';

describe('FcAuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcAuthorizationService = TestBed.get(FcAuthorizationService);
    expect(service).toBeTruthy();
  });
});
