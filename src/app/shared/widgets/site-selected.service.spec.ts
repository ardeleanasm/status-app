import { TestBed } from '@angular/core/testing';

import { SiteSelectedService } from './site-selected.service';

describe('SiteSelectedService', () => {
  let service: SiteSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
