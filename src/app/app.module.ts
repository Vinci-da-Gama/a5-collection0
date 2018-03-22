import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { NgxSpinnerModule } from 'ngx-spinner';
import { StarRatingModule } from 'angular-star-rating';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ClickOutsideModule } from 'ng-click-outside';
import { TextMaskModule } from 'angular2-text-mask';
// import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { InitPageModule } from './init-page/init-page.module';
import { FormGroupPipeI18nTooltipPopoverModalModule } from './form-related/formGroupPipeI18nTooltipPopoverModal.module';
import { InputOutputMapChartRoundprocessModule } from './IO-MapChart-Rprocess/inputOutputMapChartRoundprocess.module';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		/* ReactiveFormsModule,
		FormsModule, */
		AngularFireModule.initializeApp(FirebaseConfig.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		SharedModule,
		AppRoutingModule,
		SuiModule,
		NgxSpinnerModule,
		StarRatingModule.forRoot(),
		// RoundProgressModule,
		ClickOutsideModule,
		TextMaskModule,
		/* AgmCoreModule.forRoot(
			{
				apiKey: 'AIzaSyBeYVe4dN0JTNcmgSdXTb6t-cCXEucUtwU'
			}
		), */
		InitPageModule,
		FormGroupPipeI18nTooltipPopoverModalModule,
		InputOutputMapChartRoundprocessModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
