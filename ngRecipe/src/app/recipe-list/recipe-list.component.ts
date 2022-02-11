import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesList :Recipe[] = [];

  constructor(
    private recipeSvc: RecipeService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.recipeSvc.getAllRecipes()
      .subscribe( recipes => {this.recipesList = recipes})
  }

  onAdd(){
    this.router.navigate(["/add"])
  }

}
