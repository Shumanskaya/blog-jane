import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {

  public path: string;
  public recipes: Array<Recipe>;
  public recipe: Array<Recipe>;

  constructor(private route: ActivatedRoute, private rec: RecipeService ) {
    this.path = route.snapshot.params.id;
    this.recipes = this.rec.getRecipe();
  }

  getRecipe() {
    this.recipe = this.recipes.filter(value => value.id === this.path);
  }

  ngOnInit() {
    this.getRecipe();
  }

}
