import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  newRecipe !: FormGroup
  constructor(
    private fb : FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.newRecipe = this.fb.group({
      title : ["",[Validators.required, Validators.min(3)]],
      image : ["",Validators.required],
      instruction : ["",[Validators.required, Validators.min(3)]],
      ingredients : this.fb.array([
        this.fb.control("")
      ])

    })
  }

  get ingredients() {
    return this.newRecipe.get('ingredients') as FormArray;
  }

  onBack(){
    this.router.navigate(["/"])
  }

  onAddIngredient(){
    this.ingredients.push(this.fb.control("",[Validators.required,Validators.min(3)]))
  }

  onDeleteIngredient(i:number){
    this.ingredients.removeAt(i)
  }
}
