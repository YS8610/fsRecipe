package ibf2021.assessment.csf.server.controllers;

import java.util.NoSuchElementException;
import java.util.Optional;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObject;

/* Write your request hander in this file */

@RestController
@RequestMapping(path = "/api/recipe")
public class RecipeRestController{

    @Autowired
    RecipeService recipeSvc;

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(path = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getRecipe(@PathVariable(name = "id") String id){

        Optional<Recipe> recipeSearched = recipeSvc.getRecipeById(id);
        Gson gson = new Gson();
        String foundIdJsonString;
        try {
            Recipe foundId = recipeSearched.get();
            foundIdJsonString = gson.toJson(foundId).toString();
            return new ResponseEntity<String>(foundIdJsonString, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            System.out.println("id not found");
            return new ResponseEntity<String>("", HttpStatus.NOT_FOUND);
        }
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addRecipe(@RequestBody Recipe recipetobeAdded){
        System.out.println(recipetobeAdded.toString());
        // Gson gson = new Gson();
        // Recipe recipetobeAdded = gson.fromJson(recipe, Recipe.class);
        // System.out.println(recipetobeAdded);
        Recipe emptyRecipewithID = new Recipe();
        recipetobeAdded.setId(emptyRecipewithID.getId());
        recipeSvc.addRecipe(recipetobeAdded);
        JsonObject value = Json.createObjectBuilder()
            .add("message", "saved").build();
        return new ResponseEntity<String>(value.toString(), HttpStatus.CREATED);
    }

}