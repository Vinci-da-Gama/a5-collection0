import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OssRouteModule } from './oss-route.module';
import { DirWithPassDownValDirective } from '../../directives/dirWithPassDownVals/dir-with-pass-down-val.directive';

import { OssMainComponent } from './oss-main/oss-main.component';


@NgModule({
	imports: [
		CommonModule,
		OssRouteModule
	],
	declarations: [
		DirWithPassDownValDirective,
		OssMainComponent
	]
})
export class ObservableSubscriptionSubjectModule { }
