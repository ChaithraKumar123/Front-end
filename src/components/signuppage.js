import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Checkbox from "@material-ui/core/Checkbox";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import auth from "./auth";

//import { Field, reduxForm } from 'redux-form'
var randomToken = require('random-token');
const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);


const thankyou = (email) => (                
<div id="MainDiv">
<div className="page-title lg">
  <div className="title">
    <p>WorkHealthy Australia</p>
  </div>
</div>
<h4>
  Thanks!. <br />
 We've sent an email to {email}. Please confirm your account by clicking the link in the email.
</h4>
</div>
);

class Signup extends Component {
  state = {
    password: "",
    retypePassword: "",
    submit: false,
    checked: false,
    passwordErr: "",
    passwordErrvalid: false,
    renderThankyou : false
  };
  toSend = require("./userSchema.json");

  continue = (e) => {
    e.preventDefault();

    var isvalid = this.passVal();
    if (
      isvalid &&
      this.props.state.givenNameisValid &&
      this.props.state.surNameisValid &&
      this.props.state.mobileNumberisValid &&
      this.props.state.email !== "" &&
      this.state.checked !== false &&
      this.state.password === this.state.retypePassword
    ) {
      const Signupschema = {
        schema: {
          Password: this.state.password,
          email: this.props.state.email,
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
        body: JSON.stringify(Signupschema.schema),
      };

      try {
        fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/register", requestOptions)
          .then((response) => response.json())
          .catch(function (data) {
            window.alert(data);
          })
          .then((data) => this.authenticate(data));
      } catch (error) {
        window.alert(error);
      }
    } else if (this.state.password !== this.state.retypePassword) {
      this.setState({
        passwordErr: "Password does not match",
      });
    } else this.setState({ submit: true });
  };

  // continue = (e) => {
  //   auth.login(() => {
  //     this.props.history.push("/success");
  //   });
  // };

  back = (e) => {
    auth.login(() => {
      this.props.history.push("/");
    });
  };

  authenticate = (e) => {
    console.log(e);

    if (e.httpStatusCode === 200) {
      this.toSend.schema.FirstName = this.props.state.givenName;
      this.toSend.schema.LastName = this.props.state.surName;
      this.toSend.schema.MiddleNames = this.props.state.middleName;
      this.toSend.schema.Mobile = this.props.state.mobileNumber;
      this.toSend.schema.Email = this.props.state.email;
      this.toSend.schema.DateOfBirth = new Date();
      this.toSend.schema.EmpStartDate = new Date();
      this.toSend.schema.LastVisit = new Date();
      this.toSend.schema.CreateDate = new Date();
      this.toSend.schema.KNC = e.userSub;

      this.props.kncset(e.userSub);
      localStorage.setItem('KNC', e.userSub)

      //  this.setState({KNC: e.userSub})

      console.log(this.toSend.schema);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        },
        body: JSON.stringify(this.toSend.schema),
      };

      try {
        fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (Number(data.httpStatusCode) === 200) {
              localStorage.setItem('confToken', randomToken(16))
              this.setState({
                renderThankyou: true
              })
              // window.alert(
              //   "Thanks! \n We’ve sent an email to " +
              //     this.props.state.email +
              //     ". \n Please confirm your account by clicking the link in the email."
              // );

             // return thankyou(this.props.state.email); 
              // auth.login(() => {
              //   this.props.history.push("/");
              // });
            } else {
              window.alert(data.message);
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert(e.message);
    }
  };

  passVal = (e) => {
    if (this.state.password.length === 0) {
      this.setState({
        passwordErr: "Please enter you password",
      });
      return false;
    } else if (this.state.password.length < 10) {
      this.setState({
        passwordErr: "Password must be atleast 10 characters long",
      });
      return false;
    } else {
      this.setState({ passwordErrvalid: true, passwordErr: "" });
      return true;
    }
  };
  //   continue = (e) => {
  //     e.preventDefault();
  //     this.props.nextStep();
  //   };
  termsAgree = (e) => {
    console.log(e.target.checked);
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { handleChange, state } = this.props;

    if (!this.state.renderThankyou){
      return (
        <div id="MainDiv">
          <div className="page-title lg">
            <div className="title">
              <p> Let's create your account</p>
            </div>
          </div>
  
          <div className="row">
          <div>
            <div className="form-group">
              <label className="abc">Given Name</label>
              <input
                className="form-control"
                id="givenName"
                type="text"
                value={state.givenName}
                onChange={handleChange("givenName")}
              />
              <div className="errorMessage">{state.givenNameError}</div>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="abc">Surname</label>
              <input
                className="form-control"
                id="surName"
                type="text"
                value={state.surName.fieldValue}
                onChange={handleChange("surName")}
              />
              <div className="errorMessage">{state.surNameError}</div>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="abc">Middle Name <span className="optional">Optional</span> </label>
              <input
                className="form-control"
                id="middleName"
                type="text"
                value={state.middleName}
                onChange={handleChange("middleName")}
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="abc">Phone Number</label>
              <input
                className="form-control"
                id="mobileNumber"
                type="text"
                value={state.mobileNumber}
                onChange={handleChange("mobileNumber")}
              />
              {/* <Errormsg arg = {state.mobileNumber}></Errormsg> */}
              <div className="errorMessage">{state.mobileNumberError}</div>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="abc">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                value={state.email}
                onChange={handleChange("email")}
              />
              {/* <Errormsg arg = {state.email}></Errormsg> */}
              <div className="errorMessage">{state.emailError}</div>
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
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
            //  onChange={(event) => this.setState({password:event.target.value})}
          />
            </div>
          </div>
          <div>
            <div className="form-group">
            <label className="abc">Re-enter password</label>
          <input
            className="form-control"
            id="Repass"
            name="pass"
            type="password"
            value={this.state.retypePassword}
            onChange={(event) =>
              this.setState({ retypePassword: event.target.value })
            }
            //  onChange={(event) => this.setState({password:event.target.value})}
          />
          <div className="errorMessage">{this.state.passwordErr}</div>
            </div>
          </div>
        </div>
        <div className="custom-radio square">
          <input type="checkbox" className="custom-input" 
                      checked={this.state.checked}
                      onChange={this.termsAgree}/>
          <span> I agree to work Healthy Australia's terms</span>
        </div>
        {this.state.submit ? <Errormsg /> : null}
        <div className="btn-block prev-back-btn">
          <button className="btn btn-outline-primary" onClick={this.back} >Back</button>
          <button className="btn btn-primary modal-btn" data-modal-id="sampleModal"
                    id="stepOneSubmit"
                    onClick={this.continue}>Continue</button>
        </div>
        </div>
      );

    }

    else {
      return thankyou(this.props.state.email);
    }

  }
}
export default withRouter(Signup);
