import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {

  style: string;
  categories: Array<any>;

  constructor(private route: ActivatedRoute, menuCategories: MenuService) {
    this.style = route.snapshot.url[0].path;
    this.categories = menuCategories.getThatMenu(this.style);
  }

  isCloseSidenav = false;

  closeSidenav() {
    this.isCloseSidenav ? this.isCloseSidenav = false : this.isCloseSidenav = true;
  }

  ngOnInit() {
  }

}
