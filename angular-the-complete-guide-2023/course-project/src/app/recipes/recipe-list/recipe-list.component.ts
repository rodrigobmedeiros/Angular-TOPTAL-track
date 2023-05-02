import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe(
      'pasta bolognesa', 
      'delicious pasta with bolognesa souce', 
      'https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg'
    ),
    new Recipe(
      'white rice', 
      'delicious white rice with garlic', 
      'https://static.itdg.com.br/images/1200-675/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg'
    )
  ];

}
