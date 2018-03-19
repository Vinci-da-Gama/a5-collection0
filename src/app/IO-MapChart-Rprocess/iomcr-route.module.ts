import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExchangeRateComponent } from './exchange-rate-map/exchange-rate.component';

const mapexrateRoute: Routes = [
	{ path: 'map-exchangeRage', component: ExchangeRateComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(mapexrateRoute)
	],
	exports: [RouterModule]
})
export class InputOutputMapChartRoundprocessRouteModule { }
