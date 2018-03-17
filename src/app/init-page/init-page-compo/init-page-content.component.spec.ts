import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPageContentComponent } from './init-page-content.component';

describe('InitPageContentComponent', () => {
	let component: InitPageContentComponent;
	let fixture: ComponentFixture<InitPageContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InitPageContentComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InitPageContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
