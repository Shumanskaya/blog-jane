import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShortComponent } from './new-recipe.component';

describe('NewRecipeComponent', () => {
  let component: RecipeShortComponent;
  let fixture: ComponentFixture<RecipeShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
