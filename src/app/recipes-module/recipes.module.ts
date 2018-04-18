import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipesMain/recipes.component';
import { RecipeStartComponent } from '../../featureComponents/recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from '../../featureComponents/recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from '../../featureComponents/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../../featureComponents/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../../featureComponents/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
	declarations: [
		RecipesComponent,
		RecipeStartComponent,
		RecipeListComponent,
		RecipeEditComponent,
		RecipeDetailComponent,
		RecipeItemComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutingModule
	]
})
export class RecipesModule { }
