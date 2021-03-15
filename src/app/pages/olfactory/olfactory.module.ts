import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainSidenavModule} from '../../component/main-sidenav/main-sidenav.module';
import {OlfactoryDescriptionComponent} from './olfactory-description/olfactory-description.component';
import {EtherealOilListComponent} from './ethereal-oil-list/ethereal-oil-list.component';
import {EtherealOilShortComponent} from './ethereal-oil-short/ethereal-oil-short.component';
import {EtherealOilDetailComponent} from './ethereal-oil-detail/ethereal-oil-detail.component';
import {RouterModule} from '@angular/router';
import {ScrollDirective} from '../../directive/scroll.directive';
import {ComponentModule} from '../../component/component.module';

@NgModule({
  declarations: [
    OlfactoryDescriptionComponent,
    EtherealOilListComponent,
    EtherealOilShortComponent,
    EtherealOilDetailComponent,
    ScrollDirective,
  ],
  imports: [
    CommonModule,
    MainSidenavModule,
    RouterModule,
    ComponentModule,
  ]
})
export class OlfactoryModule {
}
