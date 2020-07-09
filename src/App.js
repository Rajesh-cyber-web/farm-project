import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import Firstcomp from './Components/Firstcomp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import Blog from './Components/Blog'
import About from './Components/About';
import New from './Components/New'
import {Link} from 'react-router-dom';
import New2 from './Components/New2'
import Signin from './Components/Signin'
class App extends Component{


  render(){
    return(
      
      <> 
  
    <Router>
    <div class="icon-bar">
    <Link to="/feedback"><button class="bg-success feedback"><div class="fa fa-facebook a"><br/>e<br/>e<br/>d<br/>b<br/>a<br/>c<br/>k<br/></div></button></Link>
    </div>
<Header/> <hr/>
    
      
      <Route path="/Signin" exact component ={Signin}></Route>
      <Route path="/filter-by-price-range" exact component={New2}></Route> 
      <Route path="/feedback" exact component={New}></Route>  
      <Route path="/blog" exact component={Blog}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/viewmore/cart" exact component={ThirdPage}></Route>
      <Route path="/" exact component={MainPage}></Route>
      <Route path="/viewmore" exact component={SecondPage}></Route>  
     </Router> 
 <Firstcomp></Firstcomp>
 <Footer></Footer>
  </> )
  }

}
export default App;