import { TestBed } from '@angular/core/testing';

import { ComponentesService } from './camisas.service';

describe('CamisasService', () => {
  let service: ComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
