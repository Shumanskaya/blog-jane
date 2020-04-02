import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RecipeComponent} from './pages/recipe/recipe.component';
import {OlfactoryComponent} from './pages/olfactory/olfactory.component';
import {RecipeListComponent} from './pages/recipe/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './pages/recipe/recipe-detail/recipe-detail.component';
import {RecipeDescriptionComponent} from './pages/recipe/recipe-description/recipe-description.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe', component: RecipeComponent,
    children: [
      {path: '', component: RecipeDescriptionComponent},
      {path: ':id', component: RecipeListComponent},
      {path: ':id/:id', component: RecipeDetailComponent},
    ]},
  {path: 'olfactory', component: OlfactoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
