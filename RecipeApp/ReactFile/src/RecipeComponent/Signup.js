import React, { Component } from 'react'
import RecipeApi from '../Services/RecipeApi';

export class Signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       email:'',
       password:''
    }
    this.initialState=this.state;
  }

  changeData=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitData=(e)=>{
    e.preventDefault();
    const User={
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    }
    RecipeApi.addUser(JSON.stringify(User)).then(res=>{
      console.log(res.data);
      if(res.status===200){
        console.log(res.data)
        alert(res.data)
        this.setState({ registercomplete: true })
        this.setState(this.initialState)
        this.props.history.push('/login')
      }
    })

  }
  
  render() {
    return (
      <div>
          <div className='container jumbotron jumbotron-sign'>
           <center>
               
               <h1> Register Now</h1>
               <form>
               <div className="form-group">
    <label  style={{float:'left'}}>Name</label>
    <input type="text" className="form-control" onChange={this.changeData}name="name" value={this.state.name} placeholder="Enter name"/>
    
  </div>
  <div className="form-group">
    <label  style={{float:'left'}}>Email address</label>
    <input type="email" className="form-control" onChange={this.changeData}  name="email" value={this.state.email} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label style={{float:'left'}}>Password</label>
    <input type="password" className="form-control" onChange={this.changeData} name="password" value={this.state.password} placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={this.submitData}>Submit</button>
</form>
    
           </center>
          </div>
        
      </div>
    )
  }
}

export default Signup
