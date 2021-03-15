import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {OlfactoryComponent} from './pages/olfactory/olfactory.component';
import {RecipeModule} from './pages/recipe/recipe.module';
import {OlfactoryModule} from './pages/olfactory/olfactory.module';
import {MainSidenavModule} from './component/main-sidenav/main-sidenav.module';
import {ComponentModule} from './component/component.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OlfactoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeModule,
    OlfactoryModule,
    MainSidenavModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
