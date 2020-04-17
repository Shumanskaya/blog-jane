import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationService} from '../../../component/main-sidenav/navigation.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnChanges {

  @Input() type: string;
  public navigations = [];
  public name: string;

  constructor(private navigation: NavigationService) {
    this.navigations = navigation.getCategories();
  }

  getName(type) {
    this.navigations.filter(nav => {
      if (nav.name === 'recipe') {
        nav.category.filter(cat => {
          if (cat.id === type) {
            this.name = cat.name;
          }
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getName(this.type);
  }


  ngOnInit() {
  }

}
