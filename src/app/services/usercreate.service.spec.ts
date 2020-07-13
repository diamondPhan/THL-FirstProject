import { TestBed } from '@angular/core/testing';

import { UsercreateService } from './usercreate.service';

describe('UsercreateService', () => {
  let service: UsercreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
