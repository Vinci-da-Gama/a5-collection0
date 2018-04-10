import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RouterMainComponent } from './router.main/router.main.component';
import { NextContentComponent } from '../../featureComponents/next-compo/next-content.component';
import { UsersComponent } from '../../shareComponents/users/users.component';
import { UserComponent } from '../../shareComponents/user/user.component';
import { ChairsComponent } from '../../featureComponents/chairs/chairs.component';
import { ChairComponent } from '../../featureComponents/chair/chair.component';
import { EditChairComponent } from '../../featureComponents/edit-chair/edit-chair.component';

const routerRelatedRoute: Routes = [
	{ path: 'mainAboutRouter', component: RouterMainComponent },
	{ path: 'next-compo', component: NextContentComponent },
	{
		path: 'users', component: UsersComponent, children: [
			{ path: ':id/:name', component: UserComponent }
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routerRelatedRoute)
	],
	exports: [RouterModule]
})
export class RouterRelatiedRouterModule { }
