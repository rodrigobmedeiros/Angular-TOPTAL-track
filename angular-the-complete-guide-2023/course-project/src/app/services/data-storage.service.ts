import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  baseUrl: string = "https://angular-course-recipes-project-default-rtdb.firebaseio.com/recipes.json"

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.baseUrl, recipes).subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.baseUrl)
      .pipe(map((recipes) => {
        return recipes.map((recipe) => {
          return { 
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
      }))
      .subscribe((recipes) => {
      this.recipeService.setRecipes(recipes)
    });
  }
}
