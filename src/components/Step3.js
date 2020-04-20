import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const stateOptions = ["NSW", "VIC", "QU"];

const countryOptions = ["Australia"];

const Errormsg = () => (
    <div className="errorMessage">Missing or invalid fields</div>
  );

  
class Step3 extends Component {
    state = { submit: false };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    if (
      !(this.props.state.country === "") &&
      this.props.state.addressLine1isValid &&
      this.props.state.suburbisValid &&
      this.props.state.stateNameisValid &&
      this.props.state.postCodeisValid 
    ) {
      e.preventDefault();
      this.props.nextStep();
    } else this.setState({ submit: true });
  };

//   continue = (e) => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

  render() {
    const { handleChange, state } = this.props;
    return (
      <div id="MainDiv">
        <div>
          <p id="Stepscolor">
            Step 3 of 4 <br />
            Address Details
          </p>
          <div>
            <label className="abc">Street Address (Line1)</label>
            <input
              type="text"
              className="form-control"
              id="addressLine1"
              value={state.addressLine1}
              onChange={handleChange("addressLine1")}
            ></input>
            <div className="errorMessage">{state.addressLine1Error}</div>

            <label className="abc">Street Address (Line2)</label>
            <input
              type="text"
              className="form-control"
              id="addressLine2"
              value={state.addressLine2}
              onChange={handleChange("addressLine2")}
            ></input>
            <label className="abc">Suburb</label>
            <input
              type="text"
              className="form-control"
              id="suburb"
              value={state.suburb}
              onChange={handleChange("suburb")}
            ></input>
            <div className="errorMessage">{state.suburbError}</div>
          </div>

          <div>
            <label className="abc">State</label>
            <Dropdown
                id = "stateName"
              options={stateOptions}
              onChange={handleChange("stateName")}
              value={state.stateName}
            />
            <div className="errorMessage">{state.stateNameError}</div>
          </div>

          <div>
            <label className="abc">Post Code</label>
            <input
              type="text"
              id="postCode"
              className="form-control"
              value={state.postCode}
              onChange={handleChange("postCode")}
            ></input>
            <div className="errorMessage">{state.postCodeError}</div>
          </div>
          <div>
            <label className="abc">Country</label>
            <Dropdown
            id = "country"
              options={countryOptions}
              onChange={handleChange("country")}
              value={state.country}
            />
            <div className="errorMessage">{state.countryError}</div>
          </div>
        </div>
        {this.state.submit ? <Errormsg /> : null}
        <button className="back" onClick={this.back}>
          Back
        </button>
        <button className="next" onClick={this.continue}>
          Continue
        </button>
      </div>
    );
  }
}
export default Step3;
