# Simple Backend Java Server  
A simple backend Java Server written using Spring Boot framework. The main function is to serve Api request and a response will be sent back in JSON format. In this repo, Angular framework is used as the front end for rendering view.  

## Api  
GET /api/recipes = get all recipes in json format  
GET /api/recipe/{ID} = get recipe with ID. {ID} is the path variable
POST /api/recipe = create new recipe. Post body must be in JSON format 

## How to run  
`mvn spring-boot:run`