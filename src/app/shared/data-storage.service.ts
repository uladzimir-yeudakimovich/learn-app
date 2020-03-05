import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, 
              private recipesServise: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    
    return this.httpClient.put('https://ng-recipe-book-84c52.firebaseio.com/recipes.json?auth=' + token, this.recipesServise.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-84c52.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipesServise.setRecipes(recipes);
        }
      );
  }

}