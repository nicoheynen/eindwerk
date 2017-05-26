/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientInfoService } from './client-info.service';

describe('ClientInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientInfoService]
    });
  });

  it('should ...', inject([ClientInfoService], (service: ClientInfoService) => {
    expect(service).toBeTruthy();
  }));
});
