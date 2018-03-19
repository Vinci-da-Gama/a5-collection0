import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormGroupComponent } from './form-group/form-group.component';

const fgcRoute: Routes = [
	{ path: 'authForm', component: FormGroupComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(fgcRoute)
	],
	exports: [RouterModule]
})
export class Portion1RouteModule { }
