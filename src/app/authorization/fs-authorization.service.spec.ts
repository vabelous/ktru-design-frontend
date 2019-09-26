import { TestBed } from '@angular/core/testing';

import { FsAuthorizationService } from './fs-authorization.service';

describe('FsAuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FsAuthorizationService = TestBed.get(FsAuthorizationService);
    expect(service).toBeTruthy();
  });
});
