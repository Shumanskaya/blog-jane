import {Component, OnInit, Output} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {NavigationService} from '../../../component/main-sidenav/navigation.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public subscriptionType: Subscription;
  public type: string;
  public name;
  public categories;

  constructor(private rec: RecipeService, private route: ActivatedRoute, private navigation: NavigationService) {
    this.subscriptionType = route.params.subscribe(value => this.type = value.id);

    this.categories = navigation.getCategories();
  }

  ngOnInit() {
  }

}
