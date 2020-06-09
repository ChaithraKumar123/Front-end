import React, { Component } from "react";
//import Dropdown from "react-dropdown";
//import { Field, reduxForm } from 'redux-form'
import { Dropdown } from "semantic-ui-react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const options = {};

const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);

class Step1 extends Component {
  state = { submit: false, ethnicityoptions: [] };
  continue = (e) => {
    if (
      !(this.props.state.titleOpt === "") &&
      !(this.props.state.gender === "") &&
      this.props.state.givenNameisValid &&
      this.props.state.surNameisValid &&
      this.props.state.DateofBisValid &&
      this.props.state.mobileNumberisValid
    ) {
      e.preventDefault();
      this.props.nextStep();
    } else this.setState({ submit: true });
  };

  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  saveEthnicity = (data) => {
    this.setState({ ethnicityoptions: data });
    console.log(this.ethnicityoptions);
  };
  componentDidMount() {
    // Typical usage (don't forget to compare props):
    fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/Ethnicity")
      .then((response) => response.json())
      .catch(function (data) {
        window.alert(data);
      })
      .then((data) => this.saveEthnicity(data));
  }

  render() {
    const { handleChange, state } = this.props;

    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Personal Details</h1>
            <p> Step 1 of 4 </p>
          </div>
        </div>
        <div className="row">
          <div className="form-group custom-radio-wrapper">
            <label className="abc">Title</label>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                type="radio"
                value="Mr"
                id="titleOpt"
                checked={state.titleOpt === "Mr"}
                onChange={handleChange("titleOpt")}
              />
              <span>Mr</span>
            </div>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Mrs"
                id="titleOpt"
                checked={state.titleOpt === "Mrs"}
                onChange={handleChange("titleOpt")}
              />
              <span>Mrs</span>
            </div>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Miss"
                id="titleOpt"
                checked={state.titleOpt === "Miss"}
                onChange={handleChange("titleOpt")}
              />
              <span>Miss</span>
            </div>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Ms"
                id="titleOpt"
                checked={state.titleOpt === "Ms"}
                onChange={handleChange("titleOpt")}
              />
              <span>Ms</span>
            </div>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Other"
                id="titleOpt"
                checked={state.titleOpt === "Other"}
                onChange={handleChange("titleOpt")}
              />
              <span>Other</span>
            </div>
          </div>
          <div className="errorMessage">{state.titleOptError}</div>

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
              <label className="abc">
                Middle Name <span className="optional">Optional</span>{" "}
              </label>
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
              <label className="abc">Date of Birth</label>
              <input
                className="form-control"
                id="DateofB"
                name="DateofB"
                type="date"
                value={state.DateofB}
                onChange={handleChange("DateofB")}
              />
              <div className="errorMessage">{state.DateofBError}</div>
            </div>
          </div>

          <div className="form-group custom-radio-wrapper">
            <label className="abc">Gender</label>

            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Male"
                id="gender"
                checked={state.gender === "Male"}
                onChange={handleChange("gender")}
              />
              <span>Male</span>
            </div>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Female"
                id="gender"
                checked={state.gender === "Female"}
                onChange={handleChange("gender")}
              />
              <span>Female</span>
            </div>

            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="U"
                id="gender"
                checked={state.gender === "U"}
                onChange={handleChange("gender")}
              />
              <span>Unspecified</span>
            </div>
          </div>
          <div className="errorMessage">{state.genderError}</div>

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

              <div className="errorMessage">{state.mobileNumberError}</div>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="abc">email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                value={state.email}
                onChange={handleChange("email")}
              />
              <div className="errorMessage">{state.emailError}</div>
            </div>
          </div>
          <div className="form-group">
          <label class="abc">Cultural/Ethnic Group</label>
          </div>
          <Autocomplete
            id="combo-box-demo"
            style={{ width: "646px", height: "38px" }}
            options={this.state.ethnicityoptions}
            getOptionLabel={(option) => option.text}
            onChange={handleChange("culturalGroup")}
            renderInput={(params) => (
              <TextField
                style={{ width: "646px", height: "38px" }}
                variant="outlined"
                {...params}
              />
            )}
          />
          {this.state.submit ? <Errormsg /> : null}

          <div className="btn-block prev-back-btn">
            <button
              className="btn btn-primary modal-btn"
              data-modal-id="sampleModal"
              id="stepOneSubmit"
              onClick={this.continue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Step1;
