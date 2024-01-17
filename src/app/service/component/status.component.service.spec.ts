import { TestBed } from '@angular/core/testing';

import { StatusComponentService } from './status.component.service';

describe('StatusComponentService', () => {
  let service: StatusComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
