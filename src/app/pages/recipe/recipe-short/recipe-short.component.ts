import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-short',
  templateUrl: './recipe-short.component.html',
  styleUrls: ['./recipe-short.component.scss'],
})

export class RecipeShortComponent implements OnInit, OnChanges {
  @Input() type;
  public recipes;
  public recipe;
  public subscription: Subscription;

  constructor(private rec: RecipeService, private route: ActivatedRoute) {
    this.recipes = rec.getRecipe();
    this.subscription = route.params.subscribe(value => this.type = value.id);
  }

  getRecipe() {
    this.recipe = this.recipes.filter(value => value.type === this.type);
  }

  ngOnChanges(): void {
    this.getRecipe();
  }

  ngOnInit() {

  }

}
