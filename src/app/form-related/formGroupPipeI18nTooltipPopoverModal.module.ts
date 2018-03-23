import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portion1RouteModule } from './fgpitpm-route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiDimmerModule, SuiRatingModule, SuiPopupModule } from 'ng2-semantic-ui';
import { TextMaskModule } from 'angular2-text-mask';

import { FormGroupComponent } from './form-group/form-group.component';
import { ConfirmModalComponent } from '../../helpers/confirm-modal/confirm-modal.component';
import { RatingComponent } from './rating/rating.component';
import { TextMaskComponent } from '../../components/text-mask/text-mask.component';
import { FixNumberPipe } from '../../pipes/fix-number.pipe';


@NgModule({
	imports: [
		CommonModule, Portion1RouteModule, ReactiveFormsModule, SuiDimmerModule,
		SuiRatingModule, SuiPopupModule, TextMaskModule
	],
	declarations: [FormGroupComponent, ConfirmModalComponent, RatingComponent, TextMaskComponent, FixNumberPipe],
	entryComponents: [
		ConfirmModalComponent
	],
	exports: [FormGroupComponent]
})
export class FormGroupPipeI18nTooltipPopoverModalModule { }
