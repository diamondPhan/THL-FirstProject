import { TestBed } from '@angular/core/testing';

import { ManagequestionService } from './managequestion.service';

describe('ManagequestionService', () => {
  let service: ManagequestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagequestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
