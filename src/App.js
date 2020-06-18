import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import Firstcomp from './Components/Firstcomp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Blog from './Components/Blog'
import File from './File';
import About from './Components/About';
import Cart from './Cart'
firebase.initializeApp({
  apiKey: "AIzaSyBWADJRCctiQqea7eSICmP-HUndvBibs1g",
  authDomain: "farm-login-bdcac.firebaseapp.com"
})

class App extends Component{
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }


  render(){
    return(
      <> 

    <Router>
   
<Header></Header> 
    <div className="App ">
      <div className="App">
      {this.state.isSignedIn ? (
        <span><div className="row">
          <div className="col-10">
          <div className="h5 container text-center hello">You are Signed in!!</div>
         <div className="float-right"><button onClick={() => firebase.auth().signOut()} className="btn btn-danger">Sign out!</button></div> 
          <h5 className="float-right mt-1 hello">Welcome to Farm-box Direct Mr./Mrs.{firebase.auth().currentUser.displayName}</h5></div>
          <div className="col-md-2 container mt-4 img-responsive"><img
            alt="profile picture"
            src={firebase.auth().currentUser.photoURL}
            width="60px"
            height="60px"
            className="hi"
          /></div></div>
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}</div></div>
      <File></File> 
<Route path="/blog" exact component={Blog}></Route>
<Route path="/about" exact component={About}></Route>
<Route path="/cart" exact component={ThirdPage}></Route>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/one" exact component={SecondPage}></Route> 
        <Route path="/one/two" exact component={ThirdPage}></Route>   
     </Router> 
 <Firstcomp></Firstcomp>
 <Footer></Footer>
  </> )
  }

}
export default App;