import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const rootRoute: Routes = [
	/* define app module routes here, e.g., to lazily load a module
	   (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
	 */
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(rootRoute, {
			useHash: true,
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
