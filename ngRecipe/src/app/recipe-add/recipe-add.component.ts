import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  newRecipe !: FormGroup
  recipetobeAdded = <Recipe>{}
  ingredientStringArray : string[] = []

  constructor(
    private fb : FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.newRecipe = this.fb.group({
      title : ["",[Validators.required, Validators.min(3)]],
      image : ["",Validators.required],
      instruction : ["",[Validators.required, Validators.min(3)]],
      ingredientss : this.fb.array([
        this.fb.control("")
      ])

    })
  }

  get ingredientss() {
    return this.newRecipe.get('ingredientss') as FormArray;
  }

  onBack(){
    this.router.navigate(["/"])
  }

  onAddIngredient(){
    this.ingredientss.push(this.fb.control("",[Validators.required,Validators.min(3)]))
  }

  onDeleteIngredient(i:number){
    this.ingredientss.removeAt(i)
  }

  onAddRecipe(){
    console.log(this.newRecipe)

    this.recipetobeAdded.title = this.newRecipe.value.title
    this.recipetobeAdded.image = this.newRecipe.value.image
    this.recipetobeAdded.instruction = this.newRecipe.value.instruction
    this.ingredientss.controls.forEach(
      (element, index) =>{
        this.ingredientStringArray.push(element.value)
      })
      this.recipetobeAdded.ingredients = this.ingredientStringArray
    console.log(this.recipetobeAdded)
  }
}
