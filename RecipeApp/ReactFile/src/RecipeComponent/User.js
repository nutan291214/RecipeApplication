import React, { Component } from 'react'
import RecipeApi from '../Services/RecipeApi';

export class User extends Component {
  constructor(props) {
    super(props)
    let userlogtoken=sessionStorage.getItem("userlogtoken")
    this.state = {
       recipeList:[],
       userlog:userlogtoken
    }
  }

  componentDidMount(){
    this.loadUser();
  }
  loadUser(){
    const email=sessionStorage.getItem("usertoken")
    console.log(email)

    RecipeApi.getRecipeByEmail(email).then(res=>{
      if(res.status===200){
        console.log(res.data)
         const data=res.data
         
         if(data!==null && data!=="No List"){
         this.setState({recipeList:data})
         console.log(this.recipeList)
         }
     }
    }).catch(error=>{
      console.log(error)
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <h3 className="display-1"><center>Welcome</center></h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th><center>RecipeId</center></th>
                <th><center>recipeName</center></th>
                <th><center>Chef</center></th>
                <th><center>Ingredients</center></th>
                <th><center>Procedure</center></th>
                <th><center>Status</center></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.recipeList===null? null : this.state.recipeList.map(recipe=>{
                  return <tr key={recipe.recipeId}>
                    <td><center>{recipe.recipeId}</center></td>
                    <td><center>{recipe.recipeName}</center></td>
                <td><center>{recipe.chef}</center></td>
                <td><center>{recipe.ingredients}</center></td>
                <td><center>{recipe.procedure}</center></td>
                <td><center>{recipe.status}</center></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default User
