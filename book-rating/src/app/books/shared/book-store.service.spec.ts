import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookStoreService = TestBed.get(BookStoreService);
    expect(service).toBeTruthy();
  });
});
