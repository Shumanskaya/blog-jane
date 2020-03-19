import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { OlfactoryComponent } from './pages/olfactory/olfactory.component';
import { MainSidenavComponent } from './component/main-sidenav/main-sidenav.component';
import { RecipeShortComponent } from './pages/recipe/recipe-short/recipe-short.component';
import { RecipeListComponent } from './pages/recipe/recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    OlfactoryComponent,
    MainSidenavComponent,
    RecipeShortComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
