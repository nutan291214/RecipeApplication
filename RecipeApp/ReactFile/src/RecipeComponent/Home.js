import React, { Component } from 'react'
import Slider from 'react-slick';

import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'
import AddRecipe from './AddRecipe'
import Admin from './Admin'
import GetRecipe from './GetRecipe'
import Login from './Login'
import Logout from './Logout'
import MyDetails from './MyDetails'
import Signup from './Signup'
import User from './User'
import RecipeApi from '../Services/RecipeApi';

import RecipeById from './RecipeById';


  const photos=[
    {name:'photo 1',
    url:'recipe4.jpg'},
  {name:'photo2',
url:'recipe8.jpg'},{name:'photo3',url:'recipe3.jpg'},{name:'photo4',url:'recipe5.jpg'},
{name:'photo5',url:'recipe6.jpg'},{name:'photo6',url:'recipe7.jpg'},{name:'photo7',url:'poha.jpg'}]

 class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       adminlog:true,
       logggedin:true,
       recipeList:[]
       //isloggedin:true
    }
  }

  static getDerivedStateFromProps(props, state) {
    
    let token1 = sessionStorage.getItem("usertoken")
    //console.log(token1)
    let admintoken = sessionStorage.getItem("admintoken")

    if (admintoken == null) {
      if (token1 == null) {
        return { adminlog: false, loggedin: false}
      }
      else {
        return { adminlog: false, loggedin: true}
      }
    }
    else {
      return { adminlog: true }
    }
   
  }
  componentDidMount(){
    this.getrecipe();
  }

  getrecipe(){

    RecipeApi.getRecipe().then(res=>{
      console.log(res.data)
      const status=res.status
      console.log(res.status)
     const recipelist=res.data;
     console.log(recipelist)
      this.setState({recipeList:recipelist.filter(recipe=>recipe.status==='approve'||recipe.status==='Approve')})
  }).catch(error=>{
      console.log(error)
  })

  }
  getrecipeById=()=>{
    //this.props.history.push('/getrecipe');
    console.log("hiiii.....")
    
   
    var html='<RecipeById/>'

    document.getElementById("li").insertAdjacentHTML("beforeend",html);

  }
  
  render() {
//     if(this.state.adminlog){
//     return (
//       <div>

//           <BrowserRouter>
          
//           <nav className="navbar jumbotron">
//   <div className="container-fluid">
//     <div className="navbar-header">
//     <h1 className="display-1"><span className="material-icons brand-icon">
// fastfood
// </span>Food Recipe</h1>
//     </div>
//     <ul className=" list-inline">
//       <li className="active"><button className="btn btn-warning-dark"><Link to="/"><h4>Home</h4></Link></button></li>
//       <li><button className="btn btn-warning-dark"><Link to='/addRecipe'><h4>Add Recipe</h4></Link></button></li>
//       {/* <li><button className="btn btn-warning-dark"><Link to='/admin'><h4>Admin</h4></Link></button></li> */}

//       <li><button className="btn btn-warning-dark"><Link to='/logout'><h4>Logout</h4></Link></button></li>
//     </ul>
//   </div>
// </nav>
//           <switch>
//                <Route path='/'></Route>
//               <Route path='/signUp' component={Signup}></Route>
//               <Route path='/login' component={Login}></Route>
//               <Route path='/addRecipe' component={AddRecipe}></Route>
//               <Route path='/user' component={MyDetails}></Route>
//               <Route path='/admin' component={Admin}></Route>
//               <Route path='/logout' component={Logout}></Route>
//           </switch>
//           </BrowserRouter>

//           <div>
// <footer className="page-footer font-small bg-dark">
//   <div className="footer-copyright text-center py-3">
//     <h5 style={{color:"lightblue"}}>© 2020 Copyright:FoodRecipe</h5>
//   </div>
// </footer>
//  </div>
//       </div>
//     )
//     }
  //   else if(this.state.logggedin){
  //     return (
  //       <div>
  
  //           <BrowserRouter>
            
  //           <nav className="navbar jumbotron">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //     <h1 className="display-1"><span className="material-icons brand-icon">
  // fastfood
  // </span>Food Recipe</h1>
  //     </div>
  //     <ul className=" list-inline">
  //       <li className="active"><button className="btn btn-warning-dark"><Link to="/"><h4>Home</h4></Link></button></li>
  //       <li><button className="btn btn-warning-dark"><Link to='/addRecipe'><h4>Add Recipe</h4></Link></button></li>
  //       <li><button className="btn btn-warning-dark"><Link to='/user'><h4>User</h4></Link></button></li>
  
  //       <li><button className="btn btn-warning-dark"><Link to='/logout'><h4>Logout</h4></Link></button></li>
  //     </ul>
  //   </div>
  // </nav>
  //           <switch>
  //                <Route path='/'></Route>
  //               <Route path='/signUp' component={Signup}></Route>
  //               <Route path='/login' component={Login}></Route>
  //               <Route path='/addRecipe' component={AddRecipe}></Route>
  //               <Route path='/user' component={User}></Route>
  //               <Route path='/admin' component={Admin}></Route>
  //               <Route path='/logout' component={Logout}></Route>
  //           </switch>
  //           </BrowserRouter>
  
  //           <div>
  // <footer className="page-footer font-small bg-dark">
  //   <div className="footer-copyright text-center py-3">
  //     <h5 style={{color:"lightblue"}}>© 2020 Copyright:FoodRecipe</h5>
  //   </div>
  // </footer>
  //  </div>
  //       </div>
  //     )
  //   }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:true,
    slidesToScroll: 1,
   // slidesToShow: 1,
      slidesToScroll: 1,
    className:"slides"
  }

      return (
        <div className="navigation">

  
            <BrowserRouter>
            
            <nav className="navbar jumbotron">
    <div className="container-fluid">
      <div className="navbar-header">
      <h1 className="display-1"><span className="material-icons brand-icon">
  fastfood
  </span>Food Recipe</h1>
      </div>
      <ul className=" list-inline">
        <li className="active"><button className="btn btn-warning-dark"><Link to="/"><h4>Home</h4></Link></button></li>
        <li><button className="btn btn-warning-dark"><Link to='/addRecipe'><h4>Add Recipe</h4></Link></button></li>
        <li><button className="btn btn-warning-dark"><Link to='/login'><h4>Login</h4></Link></button></li>
        <li><button className="btn btn-warning-dark"><Link to='/logout'><h4>Logout</h4></Link></button></li>

      </ul>
    </div>
  </nav>
  <div>
  <Slider  {...settings}>
         {photos.map((photo)=>{
           return(
             <div>
               <center>
               <img width="800px" height="400px" src={photo.url}/>
               </center>
             </div>
           )
         })}
        </Slider>
  </div>
  <br/><br/>
  <div>
    <table>
      <tbody>
          {this.state.recipeList===null?null:this.state.recipeList.map(recipe=>{
            return<tr key={recipe.recipeId}>
              <td><center><button type="button" id="li" className="btn btn-success" onClick={this.getrecipeById}>{recipe.recipeName}</button></center></td>
               
            </tr>
          })}
      </tbody>
    </table>
  
  </div>
            <switch>
                 <Route path='/'></Route>
                <Route path='/signUp' component={Signup}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/addRecipe' component={AddRecipe}></Route>
                <Route path='/user' component={User}></Route>
                <Route path='/admin' component={Admin}></Route>
                <Route path='/logout' component={Logout}></Route>
                <Route path='/recipe' component={GetRecipe}></Route>
                <Route path='/getrecipe' component={RecipeById}></Route>
            </switch>
            </BrowserRouter>
  
            <div>
  <footer className="page-footer font-small bg-dark">
    <div className="footer-copyright text-center py-3">
      <h5 style={{color:"lightblue"}}>© 2020 Copyright:FoodRecipe</h5>
    </div>
  </footer>
   </div>
        </div>
      )
    }
  
}

export default Home
