import { TestBed } from '@angular/core/testing';

import { ManagereplyService } from './managereply.service';

describe('ManagereplyService', () => {
  let service: ManagereplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagereplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
