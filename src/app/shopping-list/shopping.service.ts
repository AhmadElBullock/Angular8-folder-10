import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredient() {
        return this.ingredients.slice()
      }

      newIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
      }
}