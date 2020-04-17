import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-content',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.scss'],
})
export class RecipeContentComponent implements OnInit {

  public subscriptionType: Subscription;
  public type: string;


  constructor(private recipe: RecipeService, private route: ActivatedRoute) {
    this.subscriptionType = route.params.subscribe(value => this.type = value.id);
  }

  ngOnInit() {
  }

}
