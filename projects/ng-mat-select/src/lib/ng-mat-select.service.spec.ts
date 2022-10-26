import { TestBed } from '@angular/core/testing';

import { NgMatSelectService } from './ng-mat-select.service';

describe('NgMatSelectService', () => {
  let service: NgMatSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMatSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
