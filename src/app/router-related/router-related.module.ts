import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiTabsModule } from 'ng2-semantic-ui';
import { RouterRelatiedRouterModule } from './router-relatied.router.module';

import { RouterMainComponent } from './router.main/router.main.component';
import { NextContentComponent } from '../../featureComponents/next-compo/next-content.component';
import { UsersComponent } from '../../shareComponents/users/users.component';
import { UserComponent } from '../../shareComponents/user/user.component';
import { ChairsComponent } from '../../featureComponents/chairs/chairs.component';
import { ChairComponent } from '../../featureComponents/chair/chair.component';
import { EditChairComponent } from '../../featureComponents/edit-chair/edit-chair.component';

@NgModule({
	imports: [
		CommonModule,
		SuiTabsModule,
		RouterRelatiedRouterModule
	],
	declarations: [
		RouterMainComponent,
		NextContentComponent,
		UsersComponent,
		UserComponent,
		ChairsComponent,
		ChairComponent,
		EditChairComponent
	]/* ,
	exports: [RouterMainComponent] */
})
export class RouterRelatedModule { }
