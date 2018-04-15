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
// import { StarRatingModule } from 'angular-star-rating';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
// import { ClickOutsideModule } from 'ng-click-outside';
// import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { InitPageModule } from './init-page/init-page.module';
import { FormGroupPipeI18nTooltipPopoverModalModule } from './form-related/formGroupPipeI18nTooltipPopoverModal.module';
import { InputOutputMapChartRoundprocessModule } from './IO-MapChart-Rprocess/inputOutputMapChartRoundprocess.module';
import { CoPCookieMomentSliderModule } from './clickoutPopoverCookieMomentStartSlider/copopoverCkmoSs.module';
import { ValPassEncapsuElemContentRefDirecModule } from './valPassEncapsuElemContentRefDirec/val-pass-encapsu-elem-content-ref-direc.module';
import { RouterRelatedModule } from './router-related/router-related.module';
import { ObservableSubscriptionSubjectModule } from './observable-subscription-subject/observable-subscription-subject.module';
import { NotFoundModule } from './not-found/not-found.module';

import { CookieService } from 'ngx-cookie-service';
import { FbAuthService } from '../services/auth/fb-auth.service';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { CanDeactivateService } from '../services/internal/can-deactivate.service';
import { ChairResolveService } from '../services/chairs/chair-resolve.service';
import { SubjectDataTransactionService } from '../services/internal/subject-data-transaction.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'anytextasid-you-like' }),
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
		/* StarRatingModule.forRoot(),
		RoundProgressModule,
		ClickOutsideModule,
		AgmCoreModule.forRoot(
			{
				apiKey: 'AIzaSyBeYVe4dN0JTNcmgSdXTb6t-cCXEucUtwU'
			}
		), */
		InitPageModule,
		FormGroupPipeI18nTooltipPopoverModalModule,
		InputOutputMapChartRoundprocessModule,
		CoPCookieMomentSliderModule,
		ValPassEncapsuElemContentRefDirecModule,
		RouterRelatedModule,
		ObservableSubscriptionSubjectModule,
		NotFoundModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		CookieService, FbAuthService, AuthGuardService,
		CanDeactivateService, ChairResolveService,
		SubjectDataTransactionService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
