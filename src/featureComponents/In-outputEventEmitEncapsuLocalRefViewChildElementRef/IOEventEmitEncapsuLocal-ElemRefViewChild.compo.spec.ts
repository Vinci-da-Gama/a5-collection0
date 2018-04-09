import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputEventEmitEcapsuLocalRefViewChildElementRefComponent } from './IOEventEmitEncapsuLocal-ElemRefViewChild.compo';

describe('InputOutputEventEmitEcapsuLocalRefViewChildElementRefComponent', () => {
	let component: InputOutputEventEmitEcapsuLocalRefViewChildElementRefComponent;
	let fixture: ComponentFixture<InputOutputEventEmitEcapsuLocalRefViewChildElementRefComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputOutputEventEmitEcapsuLocalRefViewChildElementRefComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InputOutputEventEmitEcapsuLocalRefViewChildElementRefComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
