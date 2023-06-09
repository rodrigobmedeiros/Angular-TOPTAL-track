import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
