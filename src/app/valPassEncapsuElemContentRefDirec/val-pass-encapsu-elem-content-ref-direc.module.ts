import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeedRouteModule } from './veed.route.module';
import { FormsModule } from '@angular/forms';

import { IoeeEcapsuViewChildLocalElemRefComponent } from './In-outputEventEmitEncapsuLocalRefViewChildElementRef/IOEventEmitEncapsuLocal-ElemRefViewChild.compo';
import { ValpasschildrefComponent } from '../../featureComponents/valpasschildref/valpasschildref.component';
import { ViewchildLocalElemRefRefLifeCircleComponent } from '../../featureComponents/viewchild-localRef-elementRef-lifeCircle/viewchild-localRef-elementRef.component';
import { DirectiveCollectionComponent } from '../../featureComponents/directive-collection/directive-collection.component';
import { NgswitchComponent } from '../../featureComponents/ngswitch-compo/ngswitch/ngswitch.component';

import { BasicDirectiveDirective } from '../../directives/basic-directive.directive';
import { CustomHostDirectiveDirective } from '../../directives/customer-host-directive/custom-host-directive.directive';
import { DirWithPassDownValDirective } from '../../directives/dirWithPassDownVals/dir-with-pass-down-val.directive';
import { TmplViewcontentRefDirective } from '../../directives/tmplViewContentRef/tmpl-viewcontent-ref.directive';
import { DirCtrlClassDirective } from '../../directives/dir-ctrl-class/dir-ctrl-class.directive';

@NgModule({
	imports: [
		CommonModule,
		VeedRouteModule,
		FormsModule
	],
	declarations: [
		IoeeEcapsuViewChildLocalElemRefComponent,
		ValpasschildrefComponent,
		ViewchildLocalElemRefRefLifeCircleComponent,
		DirectiveCollectionComponent,
		NgswitchComponent,
		BasicDirectiveDirective,
		CustomHostDirectiveDirective,
		DirWithPassDownValDirective,
		TmplViewcontentRefDirective,
		DirCtrlClassDirective
	]/* ,
	exports: [IoeeEcapsuViewChildLocalElemRefComponent] */
})
export class ValPassEncapsuElemContentRefDirecModule { }
