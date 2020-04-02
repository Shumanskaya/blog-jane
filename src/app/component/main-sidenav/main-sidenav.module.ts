import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainSidenavComponent} from './main-sidenav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainSidenavComponent,
  ],
  exports: [
    MainSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainSidenavModule { }
