/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserCompanyInfoService } from './user-company-info.service';

describe('UserCompanyInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCompanyInfoService]
    });
  });

  it('should ...', inject([UserCompanyInfoService], (service: UserCompanyInfoService) => {
    expect(service).toBeTruthy();
  }));
});
