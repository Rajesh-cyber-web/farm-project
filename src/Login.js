// import React , {Component} from "react";
// import fire from "./config/fire";
// class Login extends Component{
//     constructor(props){
//         super(props);
//         this.login=this.login.bind(this);
//         this.handleChange=this.handleChange.bind(this);
//         this.signup=this.signup.bind(this);
//         this.state={
//             email : "",
//             password : ""
//         }
//     }
//     login(e){
//         e.preventDefault();
//         fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
//             console.log(u)
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }
//     signup(e){
//         e.preventDefault();
//         fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
//             console.log(u)
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }
//     handleChange(e){
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <button type="button" class="btn btn-lg btn-link text-white font-weight-bold float-right" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Log-In / Sign-Up</button>
//                             <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div class="modal-dialog" role="document">
//                                     <div class="modal-content">
//                                         <div class="modal-header">
//                                             <h5 class="modal-title font text-dark" id="exampleModalLabel">Farmbox Direct</h5>
//                                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                                 <span aria-hidden="true">&times;</span>
//                                             </button>
//                                         </div>
//                                         <div class="modal-body">
//                                             <form>
//                                                 <div class="form-group">
//                                                     <label for="email" class="col-form-label text-dark float-left">Email Id</label>
//                                                     <input type="email" class="form-control" id="email" name="email" required placeholder="enter email address" 
//                                                     value={this.state.email}
//                                                      onChange={this.handleChange}/>
//                                                 </div>
//                                                 <div class="form-group">
//                                                     <label for="pwd" class="col-form-label text-dark float-left">Password</label>
//                                                     <input type="password" class="form-control" id="pwd" name="password" required  placeholder="enter password"
//                                                     value ={this.state.password} 
//                                                     onChange={this.handleChange}/>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
//                                             <button onClick={this.login} type="button" data-dismiss="modal" class="btn btn-warning">Login</button>
//                                             <button onClick={this.signup} type="button" data-dismiss="modal" class="btn btn-warning">SignUp</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
                            
//             </div>
//         )
//     }
// }
// export default Login;