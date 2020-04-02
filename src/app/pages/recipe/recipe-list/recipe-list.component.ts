import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipe;
  public subscription: Subscription;
  public type: string;

  constructor(private rec: RecipeService, private route: ActivatedRoute) {
    this.subscription = route.params.subscribe(value => this.type = value.id);
  }


  ngOnInit() {
    console.log(this.route.params);
  }

}
