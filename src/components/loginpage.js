import React, { Component } from "react";
import UserPool from "../UserPool";
import auth from "./auth";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { Ouroboro } from "react-spinners-css";

const IsLoading = () => (
  <div id="loadingCiricle">
    <Ouroboro color="#F04F1D" size={200} />
  </div>
);

class Loginpage extends Component {
  state = {
    submit: false,
    userEmPh: "",
    pass: "",
    usernameErr: "",
    usernameErrvalid: false,
    passwordErr: "",
    passwordErrvalid: false,
    authErr: "",
  };

  returnedUserOp = (data) => {
    console.log(data);
    if (data.ok) {
      this.setState({ authErr: "" });
      this.setState({ submit: false });

      auth.login(() => {
        this.props.history.push("/Home");
      });
    } else {
      this.setState({ authErr: "login failed" });
      this.setState({ submit: false });
    }
  };

  authenticate = (e) => {
    console.log(e);
    if (e.httpStatusCode !== 200) {
      window.alert(e.message);
      return;
    }
    const requestOptions = {
      method: "GET",
      headers: { Authorization: "Bearer " + e.authenticationResult.idToken },
    };

    localStorage.setItem('login', e.authenticationResult.idToken)

    var jwtDecode = require('jwt-decode');
    var decoded = jwtDecode( e.authenticationResult.idToken);
    localStorage.setItem('KNC', decoded.sub)

    fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/userAuth", requestOptions)
      //  .then((response) => response.json())
      .then((data) => this.returnedUserOp(data));
  };

  continue = (e) => {
    e.preventDefault();
    this.setState({ authErr: "" });
    const isValid = this.loginVAlidation(e);
    const passVal = this.passVal(e);

    if (isValid && passVal) {
      // UserPool.signUp()
      //this.props.nextStep();
      this.setState({ submit: true });
      console.log("logging in");

      const schema = {
        schema: {
          Email: this.state.userEmPh,
          Password: this.state.pass,
        },
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        },
        body: JSON.stringify(schema.schema),
      };

      console.log(schema.schema);
      let op;
      fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/signin", requestOptions)
        .then((response) => response.json())
        .then((data) => this.authenticate(data))
        .then(this.setState({ submit: false }));

    }
  };
  passVal = (e) => {
    if (this.state.pass.length === 0) {
      this.setState({
        passwordErr: "Please enter you password",
      });
      return false;
    } else {
      this.setState({ passwordErrvalid: true, passwordErr: "" });
      return true;
    }
  };
  loginVAlidation = (e) => {
    var phno = /[+]\d{11}$/;
    var em = /^\S+@\S+\.\S+$/;
    if (
      (this.state.userEmPh.match(phno) &&
        this.state.userEmPh.toString().startsWith("+61")) ||
      this.state.userEmPh.match(em)
    ) {
      this.setState({ usernameErrvalid: true, usernameErr: "" });
      return true;
    } else if (this.state.userEmPh === "") {
      this.setState({
        usernameErr: "Required field",
      });
      return false;
    } else {
      this.setState({
        usernameErr: "Invalid input",
      });
      return false;
    }
  };

  render() {

    if(localStorage.getItem("login") === null)
    {

      return (
        <div id="MainDiv">
          <div className="page-title lg">
            <div className="title">
              <h1>Welcome!</h1>
            </div>
          </div>
          <div>
          {this.state.submit === true ? <IsLoading /> : null}
          </div>
          <div style= {{"textAlignLast": "center"}}>
          <img src={require("./workhealthy.png")} height = "250px" />
          </div>
          <div className="row">
            <div>
              <div className="form-group">
                <label className="abc">Email or Phone number</label>
                <input
                  className="form-control"
                  id="userEmPh"
                  name="userEmPh"
                  type="text"
                  value={this.state.userEmPh}
                  // onChange={this.handleChange}
                  onChange={(event) =>
                    this.setState({ userEmPh: event.target.value })
                  }
                />
                <div className="errorMessage">{this.state.usernameErr}</div>
              </div>
            </div>
            <div>
              <div className="form-group">
                <label className="abc">Password</label>
                <input
                  className="form-control"
                  id="pass"
                  name="pass"
                  type="password"
                  value={this.state.pass}
                  onChange={(event) =>
                    this.setState({ pass: event.target.value })
                  }
                  //  onChange={(event) => this.setState({password:event.target.value})}
                />
                <div className="errorMessage">{this.state.passwordErr}</div>
                <div className="errorMessage">{this.state.authErr}</div>
              </div>
              <div className="btn-block">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.continue}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="forg">
              <Link className="passwordForgot" to="/ForgotPassword">
                Forgot Password?
              </Link>
            </div>
            <div>
              <h4 className="invite"> Haven't been invited?</h4>
              <Link className="create" to="/Signup">
                Create your own account
              </Link>
            </div>
          </div>
  
        </div>
      )
    }

    else{
      auth.login(() => {
        this.props.history.push("/Home");
      });
      return(
        <Redirect to="/Home" push/>
      )
    }

  }
}
export default withRouter(Loginpage);
