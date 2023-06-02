import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model"

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'pasta bolognesa', 
      'delicious pasta with bolognesa souce', 
      'https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('tomato souce', 1)
      ]
    ),
    new Recipe(
      'white rice', 
      'delicious white rice with garlic', 
      'https://static.itdg.com.br/images/1200-675/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg',
      [
        new Ingredient('rice', 1),
        new Ingredient('garlic', 2)
      ]
    )
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
}