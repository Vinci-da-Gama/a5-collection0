import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-output',
	templateUrl: './input-output.component.html',
	styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

	@Input() haharRate: Number = 0;
	@Output() updatedRateEmitter = new EventEmitter<Number>();

	constructor() { }

	ngOnInit() { }

	resetRate() {
		this.updatedRateEmitter.emit(this.haharRate);
	}

}
