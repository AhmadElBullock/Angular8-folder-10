import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 // @Input() recipe: Recipe;
 // @ViewChild('shoppingIngredient', {static: false}) elRef: ElementRef;
  recipe: Recipe;
  selectedToDetail = false;

  constructor(private recipesService: RecipesService, private shoppingService: ShoppingService) {
    this.recipesService.SelectedItem.subscribe(
      (Item: Recipe) => {
        this.recipe = Item;
        this.selectedToDetail = true;
      }
    );
   }

  ngOnInit() {
  }

  toShoppingList(newIngredients: Ingredient[]) {
    /* for (let i = 0 ;i < newIngredients.length; i++) {
      console.log(newIngredients[i]);;
      this.shoppingService.newIngredient(newIngredients[i])
    }  */
    for (let newIngredient of newIngredients) {
      this.shoppingService.newIngredient(newIngredient)
    }
  }

}
