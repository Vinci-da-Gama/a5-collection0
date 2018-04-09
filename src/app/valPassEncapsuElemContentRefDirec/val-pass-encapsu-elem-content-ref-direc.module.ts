import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeedRouteModule } from './veed.route.module';
import { FormsModule } from '@angular/forms';

import { IoeeEcapsuViewChildLocalElemRefComponent } from '../../featureComponents/In-outputEventEmitEncapsuLocalRefViewChildElementRef/IOEventEmitEncapsuLocal-ElemRefViewChild.compo';
import { ValpasschildrefComponent } from '../../featureComponents/valpasschildref/valpasschildref.component';
import { ViewchildLocalElemRefRefLifeCircleComponent } from '../../featureComponents/viewchild-localRef-elementRef-lifeCircle/viewchild-localRef-elementRef.component';

@NgModule({
	imports: [
		CommonModule,
		VeedRouteModule,
		FormsModule
	],
	declarations: [
		IoeeEcapsuViewChildLocalElemRefComponent,
		ValpasschildrefComponent,
		ViewchildLocalElemRefRefLifeCircleComponent
	],
	exports: [IoeeEcapsuViewChildLocalElemRefComponent]
})
export class ValPassEncapsuElemContentRefDirecModule { }
