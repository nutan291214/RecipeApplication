import React, { Component } from 'react'
import RecipeApi from '../Services/RecipeApi'

 class Admin extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        ulist:[]
     }
   }

  //  componentDidMount(){
  //    this.loadUser();

  //  }
   loadUser(){
     RecipeApi.getAllUser().then(res=>{
       console.log(res.data)
       this.setState({ulist:res.data});
       console.log(this.state.ulist)
     }).catch(error=>{
       console.log(error)
     })
   }

   displayUserRecords(){
     this.loadUser();
     var html='<table><tr><td><center>UserId</center></td><td><center>Name</center></td><td><center>Email</center></td><td><center>Status</center></td><td><center>Activate</center></td><td><center>Deactivate</center></td></tr></table>'
      document.getElementById("tb").insertAdjacentHTML("afterbegin",html);
    }

   activate(email,password){
        let emailpass={
          email:email,
          password:password
        }
         
        RecipeApi.activateUser(emailpass).then(res=>{

          console.log(res.data);
            if(res.status==='User Activation Successfull'){
                alert(res.status)
                this.setState({ulist:this.state.ulist.filter(user =>user.status==="deactivate"?user.email===email?user.status="Active":user.status="deactivate":user)})
                this.loadUser();
              }
        }).catch(error=>{
          console.log(error)
        })
   }

   deactivateUser(email,password){
     let emailpass={
       email:email,
       password:password
     }
     RecipeApi.deactivateUser(emailpass).then(res=>{
       console.log(res.data)
       if(res.status==='User Deactivation Successfull'){
        // console.log(res.data);
         alert(res.status);
         this.setState({ulist:this.state.ulist.filter(user =>user.status==="deactivate"?user.email===email?user.status="active":user.status==="Active":user)})
         this.loadUser();
     }
     }).catch(error=>{
       console.log(error)
     })
   }
   displayRecipe(){
     this.props.history.push('/recipe');
   }
   
  render() {
    return (
      <div>

        <div>
          <center><h3 className="display-1">Welcome Admin</h3></center>
          <center>
          <button type="button" className="btn btn-primary" onClick={()=>this.displayUserRecords()}>User History</button>
          <button type="button" className="btn btn-primary" onClick={()=>this.displayRecipe()}>Recipe History</button>
          </center>
          <table className="table table-striped" id="tb">
            {/* <thead>
              <tr>
                <th>UserId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Activate</th>
                <th>Deactivate</th>
              </tr>
            </thead> */}
            <tbody>
              {
                this.state.ulist===null ? null : this.state.ulist.map(user=>{
                  return<tr key={user.userId}>
                    <td><center>{user.userId}</center></td>
                    <td><center>{user.name}</center></td>
                <td><center>{user.email}</center></td>
                <td><center>{user.status}</center></td>
                <td><center><button className="btn btn-primary" onClick={()=>this.activate(user.email,user.password)}>Activate</button></center></td>
                <td><center><button className="btn btn-primary"onClick={()=>this.deactivateUser(user.email,user.password)}>Deactivate</button></center></td>

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

export default Admin
