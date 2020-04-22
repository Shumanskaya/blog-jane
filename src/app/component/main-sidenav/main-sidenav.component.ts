import {Component, Input, OnInit} from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  public navigations;
  public navigation;

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

  ngOnInit() {
    this.getNavigationType();
  }

}
