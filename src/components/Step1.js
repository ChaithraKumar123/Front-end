import React, { Component } from "react";
//import Dropdown from "react-dropdown";
//import { Field, reduxForm } from 'redux-form'
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from "react-select";

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
      (this.props.state.givenNameisValid === true | this.props.state.givenName !== "") &&
      (this.props.state.surNameisValid === true | this.props.state.surName !== "") &&
      this.props.state.DateofBisValid &&
      (this.props.state.mobileNumberisValid === true | this.props.state.mobileNumber !== "") 
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
    this.props.ethnicityCodef(data);
    console.log(this.ethnicityoptions);
  };
  componentDidMount() {
    this.props.stepReset();
    // Typical usage (don't forget to compare props):
    fetch(
      "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/Ethnicity"
      // "https://localhost:44338/v1/personaldetails/Ethnicity"
    )
      .then((response) => response.json())
      .catch(function (data) {
        window.alert(data);
      })
      .then((data) => this.saveEthnicity(data));



      axios
      .get(
        // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
        'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/'+ localStorage.getItem("KNC"),
        // "https://localhost:44338/v1/personaldetails/" + localStorage.getItem("KNC"),
      )
      .then((response) => {
        console.log(response.data[0]);
          this.props.getdetails(response.data[0], response.data[1], response.data[2])
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    const { handleChange, state, getdetails } = this.props;

    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Personal Details</h1>
            <p> Step 1 of 4 </p>
          </div>
        </div>
        <div className="contentSpacing">
          <div className="row has-form">
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
                <label className="abc">Surname</label>
                <input
                  className="form-control"
                  id="surName"
                  type="text"
                  value={state.surName}
                  onChange={handleChange("surName")}
                />
                <div className="errorMessage">{state.surNameError}</div>
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
                  name="radio2"
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
                  name="radio2"
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
                  name="radio2"
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
                <label className="abc">Email</label>
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
              <label className="abc">Cultural/Ethnic Group</label>
              <Select
                options={this.state.ethnicityoptions}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 8,
                })}
                isSearchable
                menuPlacement="top"
                onChange={handleChange("culturalGroup")}
                value={state.culturalGroup}
              ></Select>
              {this.state.submit ? <Errormsg /> : null}
              <br></br>
            </div>
            {/* <div className="btn-block prev-back-btn">
            <button
              className="btn btn-primary modal-btn"
              data-modal-id="sampleModal"
              id="stepOneSubmit"
              onClick={this.continue}
            >
              Continue
            </button>
          </div> */}

            <div>
              <button
                className="btn btn-primary btn-block"
                onClick={this.continue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Step1;
