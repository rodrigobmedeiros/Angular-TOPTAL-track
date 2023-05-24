import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 10)
  ];

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
}