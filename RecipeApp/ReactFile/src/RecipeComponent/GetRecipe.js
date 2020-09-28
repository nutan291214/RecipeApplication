import React, { Component } from 'react'
import RecipeApi from '../Services/RecipeApi'

export class GetRecipe extends Component {
    constructor(props) {
      super(props)
      let userlogtoken=sessionStorage.getItem("userlogtoken")
      this.state = {
         recipeList:[],
         userlog:userlogtoken
      }
    }
    
    componentDidMount(){
        this.getRecipe();
    }
    getRecipe(){
        
        RecipeApi.getRecipe().then(res=>{
            console.log(res.data)
            this.setState({recipeList:res.data})
        }).catch(error=>{
            console.log(error)
        })
    }
    back=()=>{
        this.props.history.push('/admin');
    }

    approveRecipe(recipeId,e){
        console.log(recipeId)

        

        RecipeApi.approveRecipe(recipeId).then(res=>{
            if(res.status==='Recipe approved successfully'){
                alert('Recipe approved successfully');
                this.setState({recipeList:this.state.recipeList.filter(recipe => recipe.status==="Pending"?recipe.recipeId===recipeId?recipe.status="approve":recipe.status="Pending":recipe)})
            }
        }).catch(error=>{
            console.log(error)
        })
        

        

    }

  render() {
    return (
      <div>

          <div>
              <center><h3>All Recipies</h3></center>
              <button type="button" className="btn btn-primary" style={{float:'right'}} onClick={this.back}>Back</button>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th><center>RecipeId</center></th>
                          <th><center>RecipeName</center></th>
                          <th><center>Chef</center></th>
                          <th><center>email</center></th>
                          <th><center>Status</center></th>
                          <th><center>Recipe Added Date</center></th>
                          <th><center>Approve</center></th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                this.state.recipeList===null ? null : this.state.recipeList.map(recipe=>{
                  return<tr key={recipe.recipeId}>
                      <td><center>{recipe.recipeId}</center></td>
                    <td><center>{recipe.recipeName}</center></td>
                    <td><center>{recipe.chef}</center></td>
                <td><center>{recipe.email}</center></td>
                <td><center>{recipe.status}</center></td>
                <td><center>{recipe.date}</center></td>
                <td><center><button type="button" className="btn btn-primary" onClick={()=>this.approveRecipe(recipe.recipeId)}>Approve</button></center></td>
                
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

export default GetRecipe
