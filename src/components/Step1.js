import React, { Component } from "react";
import Dropdown from "react-dropdown";
//import { Field, reduxForm } from 'redux-form'
const options = ["Aus", "Ind", "Pak", ""];

const Errormsg = () =>  <div className = "errorMessage">Missing or invalid fields</div>

class Step1 extends Component {
  state = {submit : false}
  continue = (e) => {
    if ((!(this.props.state.titleOpt === "")) &&
        (!(this.props.state.gender === "")) &&
      this.props.state.givenNameisValid &&
      this.props.state.surNameisValid &&
      this.props.state.DateofBisValid &&
      this.props.state.mobileNumberisValid
    ) {
      e.preventDefault();
      this.props.nextStep();
    }

    else this.setState({submit:true}) 
  };

  // continue = (e) => {

  //     e.preventDefault();
  //     this.props.nextStep();
  // };



  render() {
    const { handleChange, state } = this.props;

    return (
      <div id="MainDiv">
        <div>
          <p id="Stepscolor">
            Step 1 of 4 <br />
            Personal Details
          </p>
          <label className="abc">Title</label>
          <div id="radio">
            <input
              type="radio"
              value="Mr"
              id="titleOpt"
              checked={state.titleOpt === "Mr"}
              onChange={handleChange("titleOpt")}
            />
            Mr
            <input
              type="radio"
              value="Mrs"
              id="titleOpt"
              checked={state.titleOpt === "Mrs"}
              onChange={handleChange("titleOpt")}
            />
            Mrs
            <input
              type="radio"
              value="Miss"
              id="titleOpt"
              checked={state.titleOpt === "Miss"}
              onChange={handleChange("titleOpt")}
            />
            Miss
            <input
              type="radio"
              value="Ms"
              id="titleOpt"
              checked={state.titleOpt === "Ms"}
              onChange={handleChange("titleOpt")}
            />
            Ms
            <input
              type="radio"
              value="Other"
              id="titleOpt"
              checked={state.titleOpt === "Other"}
              onChange={handleChange("titleOpt")}
            />
            Other
            {/* <Errormsg arg = {state.titleOpt}></Errormsg> */}
            <div className="errorMessage">{state.titleOptError}</div>
          </div>
          <div>
            <label className="abc">Given Name</label>
            <input
              className="form-control"
              id="givenName"
              type="text"
              value={state.givenName}
              onChange={handleChange("givenName")}
            />
            {/* <Errormsg arg = {state.givenName}></Errormsg> */}
            <div className="errorMessage">{state.givenNameError}</div>

            <label className="abc">Surname</label>
            <input
              className="form-control"
              id="surName"
              type="text"
              value={state.surName.fieldValue}
              onChange={handleChange("surName")}
            />
            {/* <Errormsg arg = {state.surName}></Errormsg> */}
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

          <label className="abc">Date of Birth</label>
          <input
            className="form-control"
            id="DateofB"
            name="DateofB"
            type="date"
            value={state.DateofB}
            onChange={handleChange("DateofB")}
          />
          {/* <Errormsg arg = {state.DateofB}></Errormsg> */}
          <div className="errorMessage">{state.DateofBError}</div>

          <label className="abc">Gender</label>
          <div id="radio">
            <input
              type="radio"
              value="Male"
              id="gender"
              checked={state.gender === "Male"}
              onChange={handleChange("gender")}
            />
            Male
            <input
              type="radio"
              value="Female"
              id="gender"
              checked={state.gender === "Female"}
              onChange={handleChange("gender")}
            />
            Female
            <input
              type="radio"
              value="U"
              id="gender"
              checked={state.gender === "U"}
              onChange={handleChange("gender")}
            />
            Unspecified
            {/* <Errormsg arg = {state.gender}></Errormsg> */}
            <div className="errorMessage">{state.genderError}</div>
          </div>

          <div>
            <label className="abc">Mobile Number</label>
            <input
              className="form-control"
              id="mobileNumber"
              type="text"
              value={state.mobileNumber}
              onChange={handleChange("mobileNumber")}
            />
            {/* <Errormsg arg = {state.mobileNumber}></Errormsg> */}
            <div className="errorMessage">{state.mobileNumberError}</div>

            <label className="abc">email</label>
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
          <label className="abc">Cultural/Ethnic Group</label>
          <Dropdown
            options={options}
            placeholder="Cultural/Ethnicity"
            onChange={handleChange("culturalGroup")}
            value={state.culturalGroup}
          />
        </div>
        {
          this.state.submit ? <Errormsg/> : null
        }
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
export default Step1;
