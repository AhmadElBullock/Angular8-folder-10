import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 // @Input() recipe: Recipe;
  recipe: Recipe;
  selectedToDetail = false;

  constructor(private recipesService: RecipesService) {
    this.recipesService.SelectedItem.subscribe(
      (Item: Recipe) => {
        this.recipe = Item;
        this.selectedToDetail = true;
      }
    );
   }

  ngOnInit() {
  }

}
