import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from 'react-select'

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
const stateOptions = [{label: "QLD", value: 1}, {label: "VIC", value: 2},
{label: "NSW", value: 3},{label: "NT", value: 4},{label: "TAS", value: 5},{label: "ACT", value: 6},{label: "SA", value: 7},
{label: "WA", value: 8} ];


const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);

class Step3 extends Component {
  state = { submit: false, Countryoptions: [] };

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

  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  saveEthnicity = (data) => {
    this.setState({ Countryoptions: data });
    this.props.countryCodef(data);
    this.props.stateCodef(stateOptions);

    console.log(this.Countryoptions);
  };
  componentDidMount() {
    // Typical usage (don't forget to compare props):
    fetch(
      "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/Country"
      // "https://localhost:44338/v1/personaldetails/Country"
      )
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
            <h1>Address Details</h1>
            <p> Step 3 of 4 </p>
          </div>
        </div>
        <div className = "contentSpacing">
        <div className="row">
          <div>
            <div className="form-group">
              <label className="abc">Street Address (Line1)</label>
              <input
                type="text"
                className="form-control"
                id="addressLine1"
                value={state.addressLine1}
                onChange={handleChange("addressLine1")}
              />
            </div>
            <div className="errorMessage">{state.addressLine1Error}</div>
          </div>

          <div>
            <div className="form-group">
              <label className="abc">
                Street Address (Line2){" "}
                <span className="optional">Optional</span>{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLine2"
                value={state.addressLine2}
                onChange={handleChange("addressLine2")}
              />
            </div>
          </div>

          <div>
            <div className="form-group">
              <label className="abc">Suburb</label>
              <input
                type="text"
                className="form-control"
                id="suburb"
                value={state.suburb}
                onChange={handleChange("suburb")}
              />
            </div>
            <div className="errorMessage">{state.suburbError}</div>
          </div>

          <div>
            <div className="form-group">
              <label className="abc">State</label>
              {/* <Dropdown
                id="stateName"
                options={stateOptions}
                onChange={handleChange("stateName")}
                value={state.stateName}
              /> */}

              
            <Select
           options={stateOptions} 
           theme={theme => ({
            ...theme,
            borderRadius: 8,
          })}
           isSearchable 
           menuPlacement="top"
            onChange={handleChange('stateName')} 
            value={state.stateName}></Select>

            </div>
            <div className="errorMessage">{state.stateNameError}</div>
          </div>

          <div>
            <div className="form-group">
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
          </div>

          <div>
            <label className="abc">Country</label>

            <Select
           options={this.state.Countryoptions} 
           theme={theme => ({
            ...theme,
            borderRadius: 8,
          })}
           isSearchable 
           menuPlacement="top"
            onChange={handleChange('country')} 
            value={state.country}></Select>

            {/* <Autocomplete
              id="combo-box-demo"
              style={{ width: "646px", height: "38px" }}
              options={this.state.Countryoptions}
              getOptionLabel={(option) => option.text}
              onChange={handleChange("country")}
              renderInput={(params) => (
                <TextField className="Minput" variant="outlined" {...params} />
              )}
            /> */}
            <div className="errorMessage">{state.countryError}</div>
          </div>

          {this.state.submit ? <Errormsg /> : null}

          <div className="btn-block prev-back-btn">
            <button className="btn btn-outline-primary" onClick={this.back}>
              Back
            </button>
            <button
              className="btn btn-primary modal-btn"
              data-modal-id="sampleModal"
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
export default Step3;
