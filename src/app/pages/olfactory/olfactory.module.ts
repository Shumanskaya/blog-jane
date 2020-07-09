import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainSidenavModule} from '../../component/main-sidenav/main-sidenav.module';
import {OlfactoryDescriptionComponent} from './olfactory-description/olfactory-description.component';
import { EtherealOilListComponent } from './ethereal-oil-list/ethereal-oil-list.component';
import { EtherealOilShortComponent } from './ethereal-oil-short/ethereal-oil-short.component';
import { EtherealOilDetailComponent } from './ethereal-oil-detail/ethereal-oil-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    OlfactoryDescriptionComponent,
    EtherealOilListComponent,
    EtherealOilShortComponent,
    EtherealOilDetailComponent
  ],
    imports: [
        CommonModule,
        MainSidenavModule,
        RouterModule,
    ]
})
export class OlfactoryModule {
}
