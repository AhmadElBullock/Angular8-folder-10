import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Rice', 2), new Ingredient('Potato', 3)]),
        new Recipe('A Test Recipe2', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [new Ingredient('Meat', 2), new Ingredient('Tomato', 3)])
      ];

      getRecipes() {
        return this.recipes.slice();
      }

      SelectedItem = new EventEmitter<Recipe>();
}