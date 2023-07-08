import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    this.http.get(this.baseUrl).subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes)
    });
  }
}
