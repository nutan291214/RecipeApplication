import axios from 'axios'

class  RecipeApi{

    //Add New User
    addUser(User){
        console.log(User)
        return axios.post('http://localhost:8081/RecipeAppReactInt/AddUserServlet',User);
    }

//Login api
    loginapi(emailPass){
        console.log(emailPass)
        return axios.post('http://localhost:8081/RecipeAppReactInt/LoginServlet',emailPass);
    }
    //getAllUser
    getAllUser(){
        return axios.get('http://localhost:8081/RecipeAppReactInt/GetAllUserServlet');
    }
    //Activate User
    activateUser(emailpass){
        return axios.post('http://localhost:8081/RecipeAppReactInt/ActivateUserServlet',emailpass)
    }
    //Deactivate User
    deactivateUser(emailpass){
        return axios.post('http://localhost:8081/RecipeAppReactInt/DeactivateUserServlet',emailpass);
    }
    //Add new recipe
    addRecipe(addrecipe){
        return axios.post('http://localhost:8081/RecipeAppReactInt/AddRecipeServlet',addrecipe);
    }

    //get all recipe
    getRecipe(){
        return axios.get('http://localhost:8081/RecipeAppReactInt/GetAllRecipeServlet');
    }

    //get recipe by email
    getRecipeByEmail(email){
        return axios.get('http://localhost:8081/RecipeAppReactInt/GetRecipeByEmailControllerServlet?email='+email);
    }

    //get recipe by id
    getRecipeById(recipeId){
        return axios.get('/http://localhost:8081/RecipeAppReactInt/GetRecipeByEmailControllerServlet?recipeId='+recipeId)
    }

    //approve recipe
    approveRecipe(recipeId){
        console.log(recipeId)
        return axios.get('http://localhost:8081/RecipeAppReactInt/ApproveRecipeServlet?recipeId='+recipeId);
    }

}
export default new RecipeApi();