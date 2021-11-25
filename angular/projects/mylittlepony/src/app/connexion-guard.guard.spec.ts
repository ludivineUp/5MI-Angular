import { TestBed } from '@angular/core/testing';

import { ConnexionGuardGuard } from './connexion-guard.guard';

describe('ConnexionGuardGuard', () => {
  let guard: ConnexionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnexionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
