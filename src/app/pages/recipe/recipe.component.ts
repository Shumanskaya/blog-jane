import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {

  public type = 'recipe';
  public title = 'Рецепты';

  constructor() {

  }

  ngOnChanges(): void {
  }

  ngOnInit() {
  }

}
