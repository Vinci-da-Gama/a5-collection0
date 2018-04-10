import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IoeeEcapsuViewChildLocalElemRefComponent } from './In-outputEventEmitEncapsuLocalRefViewChildElementRef/IOEventEmitEncapsuLocal-ElemRefViewChild.compo';

const veedRoute: Routes = [
	{ path: 'valpass-contentelemRef-dir-encapsu', component: IoeeEcapsuViewChildLocalElemRefComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(veedRoute)
	],
	exports: [RouterModule]
})
export class VeedRouteModule { }
