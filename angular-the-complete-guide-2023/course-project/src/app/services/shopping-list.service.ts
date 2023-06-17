import { EventEmitter, Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChange =  new Subject<Ingredient[]>()
  ingredientToEdit = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 10)
  ];

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  public updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.getIngredients());
  }
}