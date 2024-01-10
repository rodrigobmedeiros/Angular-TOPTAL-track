import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataStorageService } from '../services/data-storage.service';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverResolver implements Resolve<Recipe[]> {

  constructor(private dataStorage: DataStorageService, private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const recipes: Recipe[] = this.recipeService.getRecipes()
    // Provavalmente vou voltar com isso aqui quando resolver o problema de incluir o token na requisicao.
    // return this.dataStorage.fetchRecipes();
    return recipes;
  }
}
