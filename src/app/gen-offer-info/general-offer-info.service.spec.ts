/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralOfferInfoService } from './general-offer-info.service';

describe('GeneralOfferInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralOfferInfoService]
    });
  });

  it('should ...', inject([GeneralOfferInfoService], (service: GeneralOfferInfoService) => {
    expect(service).toBeTruthy();
  }));
});
