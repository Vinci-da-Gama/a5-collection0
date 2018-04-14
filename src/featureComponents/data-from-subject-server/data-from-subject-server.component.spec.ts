import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFromSubjectServerComponent } from './data-from-subject-server.component';

describe('DataFromSubjectServerComponent', () => {
	let component: DataFromSubjectServerComponent;
	let fixture: ComponentFixture<DataFromSubjectServerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DataFromSubjectServerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DataFromSubjectServerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
