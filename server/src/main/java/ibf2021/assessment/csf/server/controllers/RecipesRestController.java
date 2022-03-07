package ibf2021.assessment.csf.server.controllers;

import java.util.List;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;

/* Write your request hander in this file */

@RestController
@RequestMapping(path = "/api/recipes")
public class RecipesRestController{

    @Autowired
    RecipeService recipeSvc;

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getRecipes(){

        List<Recipe> recipes = recipeSvc.getAllRecipes();
        Gson gson = new Gson();
        String recipesJsonString = gson.toJson(recipes).toString();
        return new ResponseEntity<String>(recipesJsonString, HttpStatus.OK);
    }
}

