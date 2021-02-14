import React, { Component } from "react";
import auth from "./auth";
import { Redirect, Link, withRouter } from "react-router-dom";

import Landingpage from "./Landingpage";
import { createSignIn, createUserAuth } from "../services/api";

// const IsLoading = () => (
//     <Ouroboro style = {{"position": "absolute", "margin-left": "280px", "margin-top": "-57px"}} color="#F04F1D" size={200} />
// );

class Loginpage extends Component {
  state = {
    loadingCircle: false,
    userEmPh: "",
    pass: "",
    usernameErr: "",
    usernameErrvalid: false,
    passwordErr: "",
    passwordErrvalid: false,
    authErr: "",
    showLogin: false,
  };

  returnedUserOp = (data) => {
    console.log(data);
    if (data.ok) {
      this.setState({ authErr: "" });
      this.setState({ loadingCircle: false });

      auth.login(() => {
        this.props.history.push("/Home");
      });
    } else {
      this.setState({ authErr: "login failed" });
      this.setState({ loadingCircle: false });
    }
  };

  authenticate = (e) => {
    console.log(e);
    const requestOptions = {
      method: "GET",
      headers: { Authorization: "Bearer " + e.authenticationResult.idToken },
    };

    localStorage.setItem("login", e.authenticationResult.idToken);


    localStorage.setItem("isAuth", true);


    var jwtDecode = require("jwt-decode");
    var decoded = jwtDecode(e.authenticationResult.idToken);
    localStorage.setItem("KNC", decoded.sub);

    fetch(
      "https://localhost:44338/api/userAuth",
      requestOptions
    )
      //  .then((response) => response.json())
      .then((data) => this.returnedUserOp(data));
  };

  changeLoadingCircle = () => {
    this.setState({ loadingCircle: true });
    return true;
  };
  continue = (e) => {
    e.preventDefault();
    this.setState({ authErr: "" });
    const isValid = this.loginVAlidation(e);
    const passVal = this.passVal(e);
    if (isValid && passVal) {
      this.changeLoadingCircle();

      // UserPool.signUp()
      //this.props.nextStep();
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
      // fetch(
      //   "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/signin",
      //   requestOptions
      // )
      createSignIn(schema.schema)
        .then((response) => this.authenticate(response.data))
        .catch((error) => {
          this.setState({ authErr: error.response.data.message });
          this.setState({ loadingCircle: false });
        })
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

  loginswitch = () => {
    this.setState({ showLogin: true });
  };

  render() {
    const { loadingCircle } = this.props;

    if (localStorage.getItem("login") === null && localStorage.getItem("confToken") === null) {
      return (
        <div>
          {this.state.showLogin ? (
            <div id="MainDiv">
              {this.state.loadingCircle === true ? loadingCircle : null}

              <div className="page-title lg">
                <div className="title">
                  <h1 style={{ float: "left" }}>Welcome!</h1>
                </div>
              </div>
              <div className="contentSpacing">
                <div></div>
                <div style={{ textAlignLast: "center" }}>
                  <img src={require("./workhealthy.jfif")} height="150px" />
                </div>
                <div className="row has-form" style={{ marginTop: "24px" }}>
                  <div>
                    <div className="form-group">
                      <label className="abc">Email</label>
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
                      <div className="errorMessage">
                        {this.state.usernameErr}
                      </div>
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
                      <div className="errorMessage">
                        {this.state.passwordErr}
                      </div>
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
                  <div
                    className="forg"
                    style={{ marginTop: "16px", textAlignLast: "center" }}
                  >
                    <Link className="passwordForgot" to="/ForgotPassword">
                      Forgot Password?
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="create"
                      style={{ textAlignLast: "center" }}
                      to="/Signup"
                    >
                      Create your own account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <Landingpage loginswitch={this.loginswitch}></Landingpage>
            )}
        </div>
      );
    } else {
      auth.login(() => {
        this.props.history.push("/Home");
      });
      return <Redirect to="/Home" push />;
    }
  }
}
export default withRouter(Loginpage);
