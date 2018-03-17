import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// firebase
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// END firebase

import { SharedModule } from './share-module/share-module.module';
import { AppRoutingModule } from './app-routing.module';
import { SuiModule } from 'ng2-semantic-ui';
import { StarRatingModule } from 'angular-star-rating';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ClickOutsideModule } from 'ng-click-outside';
import { TextMaskModule } from 'angular2-text-mask';
import { AgmCoreModule } from '@agm/core';
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
		AngularFireModule.initializeApp(FirebaseConfig.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		SharedModule,
		AppRoutingModule,
		SuiModule,
		StarRatingModule.forRoot(),
		RoundProgressModule,
		ClickOutsideModule,
		TextMaskModule,
		AgmCoreModule.forRoot(
			{
				apiKey: 'AIzaSyBeYVe4dN0JTNcmgSdXTb6t-cCXEucUtwU'
			}
		),
		InitPageModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
