import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../contracts/models/user-class';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
	user: User;
	paramsSubscription: Subscription;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		// snapshot for init
		this.user = {
			id: this.route.snapshot.params['id'],
			name: this.route.snapshot.params['name']
		};
		// subscribe for reload.
		this.paramsSubscription = this.route.params
			.subscribe(
				(params: Params) => {
					this.user.id = params['id'];
					this.user.name = params['name'];
				}
			);
	}

	ngOnDestroy() {
		this.paramsSubscription.unsubscribe();
	}

}
