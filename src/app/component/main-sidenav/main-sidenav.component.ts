import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NavigationService } from './navigation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {

  @Input() type: string;
  public navigations;
  public navigation;
  public isCloseSidenav = false;

  constructor(private nav: NavigationService) {
    this.navigations = nav.getCategories();
  }

  getNavigationType() {
    this.navigations.filter(value => {
      if (value.name === this.type) {
        this.navigation = value.category;
      }
    });
  }

  closeSidenav() {
    this.isCloseSidenav ? this.isCloseSidenav = false : this.isCloseSidenav = true;
  }

  ngOnInit() {
    this.getNavigationType();
  }

}
