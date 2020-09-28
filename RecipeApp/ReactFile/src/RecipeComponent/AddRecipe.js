import React, { Component } from 'react'
import RecipeApi from '../Services/RecipeApi'

export class AddRecipe extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipeName:'',
       chef:'',
       email:'',
       ingredients:'',
       procedure:'',
       recipeList:[]
    }
    this.basestate=this.state
  }

  changedata=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitdata=(e)=>{
    e.preventDefault();
    let addrecipe={
      recipeName:this.state.recipeName,
      chef:this.state.chef,
      email:this.state.email,
      ingredients:this.state.ingredients,
      procedure:this.state.procedure
    }

    RecipeApi.addRecipe(JSON.stringify(addrecipe)).then(res=>{
      if(res.status===200){
        console.log(res.data)
        alert("recipe added successfully");
        this.setState(this.state.basestate);


      }
    }).catch(error=>{
      alert("recipe not added successfully")
      console.log(error)
    })
  }
  
  render() {
    return (
      <div>
        <div className="container jumbotron jumbotron-sign">
            <center>
                <h2>Add New Recipe</h2>
            <form>
                <div className="form-group">
                <label style={{float:'left'}}>Recipe name</label>
                <input type="text" placeholder="Add recipe name" name="recipeName" value={this.state.recipeName} onChange={this.changedata} className="form-control"></input>
                </div>
                
                <div className="form-group">
                    <label style={{float:'left'}}>Chef</label>
                    <input type="text" placeholder="enter chef name" name="chef" value={this.state.chef} onChange={this.changedata} className="form-control"></input>
                </div>
     
                <div className="form-group">
                    <label style={{float:'left'}}>Email</label>
                    <input type="text" placeholder="enter email" name="email" value={this.state.email} onChange={this.changedata} className="form-control"></input>
                </div>
                

                <div className="form-group">
                    <label style={{float:'left'}}>Ingredients needed for Recipe</label>
                    <textarea placeholder="enter ingredients needed" name="ingredients" value={this.state.ingredients} onChange={this.changedata} className="form-control"></textarea>
                </div>
                
                <div className="form-group">
                    <label style={{float:'left'}}>Procedure to make Recipe</label>
                    <textarea placeholder="enter procedure"className="form-control" name="procedure" value={this.state.procedure} onChange={this.changedata}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submitdata}>Add Recipe</button>
            </form>
            </center>
        </div>
      </div>
    )
  }
}

export default AddRecipe
