import React, { Component } from 'react'
import RecipeApi from '../Services/RecipeApi'

class RecipeById extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipeArr:[]
    }
  }
  componentDidMount(){
    this.getRecipe()
  }

  getRecipe(recipeId){

    RecipeApi.getRecipeById(recipeId).then(res=>{
      if(res.status===200){
        console.log(res.data)
         const data=res.data
         
         if(data!==null && data!=="No List"){
         this.setState({recipeArr:data})
         console.log(this.recipeArr)
         }
     }

    }).catch(error=>{
      console.log(error)
    })
  }
  
  render() {
    return (
      <div>
        
       <table>
         <tbody>
           {
             this.state.recipeArr===null ? null :this.state.recipeArr.map(recipe=>{
               return<tr key={recipe.recipeId}>
                 <td>Recipe Name</td>
             <td>{recipe.recipeName}</td>
               </tr>
             })
           }
         </tbody>
       </table>

      </div>
    )
  }
}

export default RecipeById
