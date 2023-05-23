import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
