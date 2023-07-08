import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component'
import { NoRecipeSelectedComponent } from './recipes/recipe-list/no-recipe-selected/no-recipe-selected.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverResolver } from './recipes/recipe-resolver.resolver';

const routes: Route[] = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: NoRecipeSelectedComponent },
    { path: 'new', component: RecipeEditComponent, resolve: [RecipeResolverResolver] },
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverResolver] },
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverResolver] }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
