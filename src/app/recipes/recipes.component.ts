import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  //selectedToDetail: Recipe;
  constructor(private recpiesService: RecipesService) { }

  ngOnInit() {
  }


  /* selectedRecipe_component(selectedRecipeToDetail: Recipe) {
    this.selectedToDetail = selectedRecipeToDetail;
    console.log(this.selectedToDetail);
  } */

}
