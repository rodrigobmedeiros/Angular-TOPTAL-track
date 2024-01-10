import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { AuthUserService } from '../auth/auth-user/auth-user.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  baseUrl: string = "https://angular-course-recipes-project-default-rtdb.firebaseio.com/recipes.json"
  token: string | null = null;
  params: HttpParams = new HttpParams();
  subscription: Subscription;

  constructor(
    private http: HttpClient, 
    private recipeService: RecipeService,
    private authUserService: AuthUserService
  ) {}

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.baseUrl, recipes).subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchRecipes() {
    return this.authUserService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Recipe[]>(this.baseUrl, { params: new HttpParams().set('auth', user.token) })
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return { 
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes)
      })
    )
  }
}
