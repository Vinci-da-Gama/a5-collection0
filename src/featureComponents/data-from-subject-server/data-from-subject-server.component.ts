import { Component, OnInit } from '@angular/core';

import { SubjectDataTransactionService } from '../../services/internal/subject-data-transaction.service';

@Component({
	selector: 'app-data-from-subject-server',
	templateUrl: './data-from-subject-server.component.html',
	styleUrls: ['./data-from-subject-server.component.scss']
})
export class DataFromSubjectServerComponent implements OnInit {

	subjectText: String | string = 'from subject service...';

	constructor(
		private subService: SubjectDataTransactionService
	) { }

	ngOnInit() {
		this.subService.inputText.subscribe((text: string) => {
			console.log(`20 -- text from subject service: ${text}.`);
			if (text) {
				this.subjectText = text;
			} else {
				this.subjectText = 'Go observable-subscription-subject module to click olive tag to send data.';
			}
		});
	}

}
