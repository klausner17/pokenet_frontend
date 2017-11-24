import { TestBed, async, inject } from '@angular/core/testing';

import { TrainnersGuard } from './trainners.guard';

describe('TrainnersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainnersGuard]
    });
  });

  it('should ...', inject([TrainnersGuard], (guard: TrainnersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
