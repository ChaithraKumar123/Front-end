import React, { Component } from "react";
import UserPool from "../UserPool";
import auth from "./auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

class Loginpage extends Component {
  state = {
    submit: false,
    userEmPh: "",
    pass: "",
    usernameErr: "",
    usernameErrvalid: false,
    passwordErr: "",
    passwordErrvalid: false,
    authErr: ""

  };

  
  continue = (e) => {

    e.preventDefault();
    this.setState({authErr: ""})
    const isValid = this.loginVAlidation(e);
    const passVal = this.passVal(e);

    if (isValid && passVal) {
     // UserPool.signUp()
      //this.props.nextStep();
      console.log("logging in")

      const user = new CognitoUser({
        Username: this.state.userEmPh,
        Pool: UserPool
      });

      const authDetails = new AuthenticationDetails({
        Username: this.state.userEmPh,
        Password: this.state.pass
      });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          console.log("onSuccess:", data);
          this.setState({authErr: ""})
          auth.login(() => {this.props.history.push("/patientDetails");})
          //this.props.nextStep();
        },
  
        onFailure: err => {
          console.error("onFailure:", err);
          this.setState({authErr: err.message})
        },
  
        newPasswordRequired: data => {
          console.log("newPasswordRequired:", data);
        }
      });


    }



     
  };
  passVal = (e) => {

    if (this.state.pass.length === 0){
      this.setState({
        passwordErr: "Please enter you password",
      });
      return false;
    }
    else{
      this.setState({ passwordErrvalid: true,  passwordErr: ""});
      return true;
    }
  }
  loginVAlidation = (e) => {
      var phno = /[+]\d{11}$/;
      var em = /^\S+@\S+\.\S+$/;
      if ( (this.state.userEmPh.match(phno) && this.state.userEmPh.toString().startsWith("+61")) || (this.state.userEmPh.match(em))){
        this.setState({ usernameErrvalid: true, usernameErr: "" });
        return true;
      }
      else if(this.state.userEmPh ==="")
      {
        this.setState({
          usernameErr: "Required field",
        });
        return false;

      } 
      else {
        this.setState({
          usernameErr: "Invalid input",
        });
        return false;
      }

  };



  render() {
    return (
      <div id="MainDiv">
        <div>
          <label className="abc">Email or Phone number</label>
          <div>
            <input
              className="form-control"
              id="userEmPh"
              name="userEmPh"
              type="text"
              value={this.state.userEmPh}
             // onChange={this.handleChange}
              onChange={(event) => this.setState({userEmPh:event.target.value})}/>
            <div className="errorMessage">{this.state.usernameErr}</div>

            <label className="abc">Password</label>
            <input
              className="form-control"
              id="pass"
              name="pass"
              type="password"
              value={this.state.pass}
              onChange={(event) =>this.setState({ pass: event.target.value })}
              //  onChange={(event) => this.setState({password:event.target.value})}
            />
            <div className="errorMessage">{this.state.passwordErr}</div>
            <div className="errorMessage">{this.state.authErr}</div>
            <button className="login" onClick={this.continue}>
              Login
            </button>

            <div>
            <h4 className="invite" > Haven't been invited?</h4>
            <Link className = "create" to="/Signup">Create your own account</Link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Loginpage);

