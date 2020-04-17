import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeShortComponent } from './recipe-short/recipe-short.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {MainSidenavModule} from '../../component/main-sidenav/main-sidenav.module';
import {RouterModule} from '@angular/router';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { RecipeContentComponent } from './recipe-content/recipe-content.component';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeShortComponent,
    RecipeDetailComponent,
    RecipeDescriptionComponent,
    RecipeContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainSidenavModule,
  ]
})
export class RecipeModule { }
