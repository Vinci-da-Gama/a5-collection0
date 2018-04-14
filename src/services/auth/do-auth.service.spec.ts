import { TestBed, inject } from '@angular/core/testing';

import { DoAuthService } from './do-auth.service';

describe('DoAuthService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DoAuthService]
		});
	});

	it('should be created', inject([DoAuthService], (service: DoAuthService) => {
		expect(service).toBeTruthy();
	}));
});
