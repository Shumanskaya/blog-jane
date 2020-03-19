import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RecipeComponent} from './pages/recipe/recipe.component';
import {OlfactoryComponent} from './pages/olfactory/olfactory.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'olfactory', component: OlfactoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
