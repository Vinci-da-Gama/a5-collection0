import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CpcmssComponent } from '../../components/cpcmss/cpcmss.component';

const cpcmssRoute: Routes = [
	{ path: 'slicer-clickoutpopover-moment', component: CpcmssComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(cpcmssRoute)
	],
	exports: [RouterModule]
})
export class CpcmssRouteModule { }
