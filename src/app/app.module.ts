import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './share-module/share-module.module';
import { AppRoutingModule } from './app-routing.module';
import { SuiModule } from 'ng2-semantic-ui';
import { StarRatingModule } from 'angular-star-rating';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ClickOutsideModule } from 'ng-click-outside';
import { TextMaskModule } from 'angular2-text-mask';
import { AppComponent } from './app.component';
import { InitPageModule } from './init-page/init-page.module';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule,
		AppRoutingModule,
		SuiModule,
		StarRatingModule.forRoot(),
		RoundProgressModule,
		ClickOutsideModule,
		TextMaskModule,
		InitPageModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
