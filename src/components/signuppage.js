import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Checkbox from '@material-ui/core/Checkbox';
//import { Field, reduxForm } from 'redux-form'

const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);

class Signup extends Component {
  state = { password: "", retypePassword:"",submit: false, checked: false, passwordErr: "",  passwordErrvalid : false};
    continue = (e) => {
        var isvalid = this.passVal();
      if (
        this.props.state.givenNameisValid &&
        this.props.state.surNameisValid &&
        this.props.state.mobileNumberisValid &&
        this.props.state.email !== "" &&
        this.state.checked !== false &&
        this.state.password === this.state.retypePassword
      ) {
        e.preventDefault();
        this.props.nextStep();
      }

      else if (this.state.password !== this.state.retypePassword)
      {
          this.setState({
            passwordErr: "Password does not match",

          })
      }
      else this.setState({submit:true})
    };

    passVal = (e) => {

        if (this.state.password.length === 0){
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
//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };
termsAgree = (e) =>{
    console.log(e.target.checked)
    this.setState({checked:!this.state.checked})
}

  render() {
    const { handleChange, state } = this.props;

    return (
      <div id="MainDiv">
        <div>
          <p id="Stepscolor">
            Welcome! <br />
            Let's create your account
          </p>
          <div>
            <label className="abc">Given Name</label>
            <input
              className="form-control"
              id="givenName"
              type="text"
              value={state.givenName}
              onChange={handleChange("givenName")}
            />
            <div className="errorMessage">{state.givenNameError}</div>

            <label className="abc">Surname</label>
            <input
              className="form-control"
              id="surName"
              type="text"
              value={state.surName.fieldValue}
              onChange={handleChange("surName")}
            />
            <div className="errorMessage">{state.surNameError}</div>

            <label className="abc">Middle Name </label>
            <input
              className="form-control"
              id="middleName"
              type="text"
              value={state.middleName}
              onChange={handleChange("middleName")}
            />
            {/* <Errormsg arg = {state.middleName}></Errormsg> */}
            {/* <div className = "errorMessage">{state.middleNameError}</div> */}
          </div>
          <div>
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

        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.termsAgree}
          />
          I agree to work Healthy Australia's terms
        </div>
        {this.state.submit ? <Errormsg /> : null}

        <button
          id="stepOneSubmit"
          // disabled={isDisabled}
          className="next"
          onClick={this.continue}
        >
          Continue
        </button>
      </div>
    );
  }
}
export default Signup;
