import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id="";
  recipe= <Recipe>{};
  hasError = false;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private recipeSvc: RecipeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["recipeid"]
    console.log(this.id)
    this.recipeSvc.getRecipe(this.id)
      .subscribe({
        next: id =>{
          this.hasError = false;
          this.recipe = id;
        },
        error : error=>{
          this.hasError = true;
        }
      })
  }

}
