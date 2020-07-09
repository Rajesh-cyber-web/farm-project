import React ,{Component} from 'react'
import firebase from "firebase"
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
firebase.initializeApp({
    apiKey: "AIzaSyBWADJRCctiQqea7eSICmP-HUndvBibs1g",
    authDomain: "farm-login-bdcac.firebaseapp.com"
  })
  
  class Signin extends Component{

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
    return (<>
    
      <div className="Signin">
      {this.state.isSignedIn ? (
        <span><div className="row">
          <div className="col-10">
          <div className="h5 container  hello">You are Signed in!!</div>
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
      )}
      <Link to="/"><div className="text-center"><Button className="text-white font-weight-bold bg-danger">Home Page</Button></div></Link>
      </div>
   </>
    )
}
  }

export default Signin
