import { TestBed, inject } from '@angular/core/testing';

import { ProductsDetailService } from './products-detail.service';

describe('ProductsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDetailService]
    });
  });

  it('should be created', inject([ProductsDetailService], (service: ProductsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
