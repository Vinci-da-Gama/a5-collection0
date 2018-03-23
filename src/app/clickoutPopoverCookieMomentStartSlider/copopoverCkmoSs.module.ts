import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpcmssRouteModule } from './cpcmss-route.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { CpcmssComponent } from '../../components/cpcmss/cpcmss.component';
import { AnguRatingComponent } from '../../components/angu-rating/angu-rating.component';
import { AgcookieSliderComponent } from '../../components/agcookie-slider/agcookie-slider.component';

@NgModule({
	imports: [
		CommonModule,
		CpcmssRouteModule,
		ClickOutsideModule,
		FormsModule,
		NouisliderModule
	],
	declarations: [CpcmssComponent, AnguRatingComponent, AgcookieSliderComponent],
	exports: [CpcmssComponent]
})
export class CoPCookieMomentSliderModule { }
