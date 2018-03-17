import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [FormGroupComponent, ResultPageComponent]
})
export class FormGroupPipeI18nTooltipPopoverModalModule { }
