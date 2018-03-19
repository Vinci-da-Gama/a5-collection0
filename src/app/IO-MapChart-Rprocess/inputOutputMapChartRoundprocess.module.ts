import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputMapChartRoundprocessRouteModule } from './iomcr-route.module';
import { ExchangeRateComponent } from './exchange-rate-map/exchange-rate.component';
import { SupplyRateComponent } from './supply-rate/supply-rate.component';

@NgModule({
	imports: [
		CommonModule, InputOutputMapChartRoundprocessRouteModule
	],
	declarations: [
		ExchangeRateComponent,
		SupplyRateComponent
	],
	exports: [ExchangeRateComponent]
})
export class InputOutputMapChartRoundprocessModule { }
