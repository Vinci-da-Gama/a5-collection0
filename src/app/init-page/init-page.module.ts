import { NgModule } from '@angular/core';

import { InitPageRoutingModule } from './initpage-routing.module';
import { InitPageContentComponent } from './init-page-compo/init-page-content.component';

@NgModule({
	imports: [InitPageRoutingModule],
	declarations: [InitPageContentComponent],
	exports: [InitPageContentComponent]
})
export class InitPageModule { }
