import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LcefheRouteModule } from './lcefhe-route.module';

import { LcefheMainComponent } from './lcefhe-main/Lcefhe-main.component';

@NgModule({
	imports: [
		CommonModule,
		LcefheRouteModule
	],
	declarations: [
		LcefheMainComponent
	]
})
export class CanLazyloadEnvPathFormMoreBackendErrorhandlModule { }
