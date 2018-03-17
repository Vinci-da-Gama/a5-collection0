import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SuiModule } from 'ng2-semantic-ui';
import { SharedModule } from './share-module/share-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SuiModule,
		SharedModule,
		AppRoutingModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
