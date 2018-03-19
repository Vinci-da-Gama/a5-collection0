import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portion1RouteModule } from './fgpitpm-route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiDimmerModule, SuiRatingModule, SuiPopupModule } from 'ng2-semantic-ui';

import { FormGroupComponent } from './form-group/form-group.component';
import { ConfirmModalComponent } from '../../helpers/confirm-modal/confirm-modal.component';
import { RatingComponent } from './rating/rating.component';
import { FixNumberPipe } from '../../helpers/pipes/fix-number.pipe';


@NgModule({
	imports: [
		CommonModule, Portion1RouteModule, ReactiveFormsModule, SuiDimmerModule, SuiRatingModule, SuiPopupModule
	],
	declarations: [FormGroupComponent, ConfirmModalComponent, RatingComponent, FixNumberPipe],
	entryComponents: [
		ConfirmModalComponent
	],
	exports: [FormGroupComponent, FormsModule, ReactiveFormsModule]
})
export class FormGroupPipeI18nTooltipPopoverModalModule { }
