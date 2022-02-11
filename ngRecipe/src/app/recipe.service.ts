import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesList: Recipe[] = [];

  URL = "http://127.0.0.1:8080/api/recipes"

  constructor(
    private http:HttpClient
  ) { }

  getAllRecipes(){
    return this.http.get<Recipe[]>(this.URL)
  }

}
