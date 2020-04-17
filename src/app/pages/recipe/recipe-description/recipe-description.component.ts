import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.scss']
})
export class RecipeDescriptionComponent implements OnInit {

  public lastRecipes = [];

  constructor(private rec: RecipeService) {
    this.lastRecipes = rec.getLastRecipe();
  }

  ngOnInit() {
  }

}
