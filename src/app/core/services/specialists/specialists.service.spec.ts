import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpecialistsService } from './specialists.service';

describe('SpecialistsService', () => {
  let service: SpecialistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [SpecialistsService],
    });
    service = TestBed.inject(SpecialistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
