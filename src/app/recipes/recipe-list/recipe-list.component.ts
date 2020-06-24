import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  //@Output() selectedRecipe_list = new EventEmitter<Recipe>()

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }

  onSelected_list(recipe: Recipe) {
    //this.selectedRecipe_list.emit(recipe);
    this.recipesService.SelectedItem.emit(recipe)
  }

}
