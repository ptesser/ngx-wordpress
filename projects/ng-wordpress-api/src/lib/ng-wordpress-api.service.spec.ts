import { TestBed } from '@angular/core/testing';

import { NgWordpressApiService } from './ng-wordpress-api.service';

describe('NgWordpressApiService', () => {
  let service: NgWordpressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWordpressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
