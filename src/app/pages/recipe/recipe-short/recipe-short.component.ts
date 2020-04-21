import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-short',
  templateUrl: './recipe-short.component.html',
  styleUrls: ['./recipe-short.component.scss'],
})

export class RecipeShortComponent implements OnInit, OnChanges {
  @Input() type;
  public recipes;
  public recipe;

  constructor(private rec: RecipeService) {
  }

  getRecipes(type) {
    if (type === 'lastRecipe') {
     this.recipes = this.rec.getLastRecipe();
    } else {
      this.recipes = this.rec.getTypeRecipe(type);
    }
  }

  ngOnChanges(): void {
    this.getRecipes(this.type);
  }

  ngOnInit() {

  }

}
