import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RecipeComponent} from './pages/recipe/recipe.component';
import {OlfactoryComponent} from './pages/olfactory/olfactory.component';
import {RecipeDetailComponent} from './pages/recipe/recipe-detail/recipe-detail.component';
import {RecipeDescriptionComponent} from './pages/recipe/recipe-description/recipe-description.component';
import {RecipeContentComponent} from './pages/recipe/recipe-content/recipe-content.component';
import {OlfactoryDescriptionComponent} from './pages/olfactory/olfactory-description/olfactory-description.component';
import {EtherealOilListComponent} from './pages/olfactory/ethereal-oil-list/ethereal-oil-list.component';
import {EtherealOilDetailComponent} from './pages/olfactory/ethereal-oil-detail/ethereal-oil-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'recipe', component: RecipeComponent,
    children: [
      {path: '', component: RecipeDescriptionComponent},
      {path: ':path', component: RecipeContentComponent},
      {path: ':path/:path', component: RecipeDetailComponent},
    ]
  },
  {
    path: 'olfactory', component: OlfactoryComponent,
    children: [
      {path: '', component: OlfactoryDescriptionComponent},
      {path: 'ethereal-oil', component: EtherealOilListComponent},
      {path: ':ethereal/:path', component: EtherealOilDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
