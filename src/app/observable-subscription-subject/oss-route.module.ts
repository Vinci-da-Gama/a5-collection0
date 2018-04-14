import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OssMainComponent } from './oss-main/oss-main.component';

const ossRoute: Routes = [
	{ path: 'oss', component: OssMainComponent }
];

@NgModule({
	imports: [
		// CommonModule,
		RouterModule.forRoot(ossRoute)
	],
	exports: [RouterModule]
})
export class OssRouteModule { }
