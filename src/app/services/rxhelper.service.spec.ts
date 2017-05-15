import { TestBed, inject } from '@angular/core/testing';

import { RxhelperService } from './rxhelper.service';

describe('RxhelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxhelperService]
    });
  });

  it('should ...', inject([RxhelperService], (service: RxhelperService) => {
    expect(service).toBeTruthy();
  }));
});
