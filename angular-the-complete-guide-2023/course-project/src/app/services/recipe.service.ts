import { EventEmitter, Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model"
import { DataStorageService } from "./data-storage.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();
  recipesChanged: Subject<Recipe[]> = new Subject();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'pasta bolognesa', 
  //     'delicious pasta with bolognesa souce', 
  //     'https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg',
  //     [
  //       new Ingredient('pasta', 1),
  //       new Ingredient('tomato souce', 1)
  //     ]
  //   ),
  //   new Recipe(
  //     'white rice', 
  //     'delicious white rice with garlic', 
  //     'https://static.itdg.com.br/images/1200-675/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg',
  //     [
  //       new Ingredient('rice', 1),
  //       new Ingredient('garlic', 2)
  //     ]
  //   )
  // ];

  private recipes: Recipe[] = [];

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());

  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  public addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  public updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}