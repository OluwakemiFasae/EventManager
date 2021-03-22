//user registers
// get all users
// get one user
// edit user details

const Route = (app) => {
        app.post('/api/v1/users', RecipeController.create); //Middleware.authorize
        app.get('/api/v1/users', RecipeController.getAllRecipes);
        app.get('/api/v1/user/:userId', RecipeController.getRecipe);
    
    }
    
    export default Route;
//user creates events
//