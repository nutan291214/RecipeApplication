import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RecipeApi from '../Services/RecipeApi'

 class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       loggedin:false,
       adminLog:false
    }
    this.basestate=this.state
  }

  changeData=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  checkLogin=(e)=>{
    e.preventDefault();
    let emailPass={
      email:this.state.email,
      password:this.state.password
    }

    RecipeApi.loginapi(JSON.stringify(emailPass)).then(res=>{
      if(res.status===200){

        console.log(res.data)
        var data=res.data;
        if(data==="Not Match"){
            alert("You are not registered till now or email or password is incorrect"+
            "\nOr Your account is deactivated by admin wait to activate account by user");
        }
        else if(data==="admin"){
            sessionStorage.setItem("admintoken",true)
            alert("Login Successfully")
            console.log(this)
           this.props.history.push('/admin')
  
            this.setState({adminlog:true})
        }
        else if(data==="user"){
            sessionStorage.setItem("usertoken",emailPass.email)
            sessionStorage.setItem("userlogtoken",true)
            alert("Login Successfully")
  
            this.props.history.push('/user')
  
            this.setState({loggedin:true})
        }
    }
    else{
        alert("Something's Wrong")
    }

    }).catch(error=>{
      console.log(error)
    })

  }
  




  signup=()=>{
    this.props.history.push('/signup')
  }

  render() {
    // if(this.state.isLoggedin){
    //     return <Redirect to="/user"></Redirect>
    // }
    // if(this.state.adminLog){
    //   return <Redirect to="/admin"></Redirect>
    // }
    
    return (
      
      <div>
          <div className="container jumbotron jumbotron-sign col col-lg-3" style={{float:"inherit"}}>
              <center>
                  <h1>Login</h1>
                  <form className="auto-complete-off">
                      <div className="form-group "> 
                      <label style={{float:'left'}}>Username</label>
                      <input type="text" placeholder="enter username" name="email" value={this.state.email}
                       onChange={this.changeData} className="form-control"></input>
                      </div>
                      <div className="form-group">
                      <label style={{float:'left'}}>Password</label>
                          <input type="password" placeholder="enter password" name="password" value={this.state.password}
                            onChange={this.changeData} className="form-control"></input>
                      </div>
                      <button type="button" className="btn btn-primary" onClick={this.checkLogin}>Login</button>&nbsp;&nbsp;
                      <button type="button" className="btn btn-primary" onClick={this.signup}>Signup</button>
                  </form>
              </center>

          </div>
        
      </div>
    )
  }
  
}

export default Login
