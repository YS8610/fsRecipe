import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesList: Recipe[] = [];

  // URL = "https://recipetfip.herokuapp.com/"
  // URL = "http://127.0.0.1:8080/"

  constructor(
    private http:HttpClient
  ) { }

  getAllRecipes(){
    return this.http.get<Recipe[]>("api/recipes")
  }

  getRecipe( recipeId:string){
    const urlid = "api/recipe/" + recipeId +"/";
    return this.http.get<Recipe>(urlid)
  }

  setNewRecipe(recipe:Recipe){
    const urlpost = "api/recipe"
    return this.http.post<Recipe>(urlpost,recipe)
  }
}
