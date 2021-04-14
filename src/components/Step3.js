import React, { Component } from "react";
import "react-dropdown/style.css";
import Select from 'react-select';
import { getCountry, createPersonalDetails } from "../services/api";
import LocalStorageService from "../services/localStorageService";

const stateOptions = [{ label: "ACT", value: 6 }, { label: "NSW", value: 3 }, { label: "NT", value: 4 },
{ label: "QLD", value: 1 }, { label: "SA", value: 7 }, { label: "TAS", value: 5 }, { label: "VIC", value: 2 },
{ label: "WA", value: 8 }];


const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);
const localStorageService = new LocalStorageService();
class Step3 extends Component {
  state = { submit: false, Countryoptions: [] };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    const isValid = this.validate();

    if (
      // !(this.props.state.country === "") &&
      this.props.state.addressLine1 !== "" &&
      this.props.state.suburb !== "" &&
      this.props.state.stateName !== "" &&
      this.props.state.postCode !== ""
    ) {
      const schema = {
        "schema": {
          "Title": this.props.state.titleOpt,
          "FirstName": this.props.state.givenName,
          "LastName": this.props.state.surName,
          "MiddleNames": this.props.state.middleName,
          "Email": this.props.state.email,
          "Gender": this.props.state.gender,
          "culturalGroup": this.props.state.ethnicityCode ? this.props.state.ethnicityCode : 1101,
          "DateOfBirth": this.props.state.DateofB,
          "Mobile": this.props.state.mobileNumber,

          "CurrentPosition": this.props.state.CurrentPosition,
          "EmpStartDate": this.props.state.EmpStDate ? this.props.state.EmpStDate : "01-01-1990",
          "EmpDepartment": this.props.state.Department,
          "PreviousWorkCompClaim": 0,
          "PreviousWorkCompClaimDetails": this.props.state.CompClaimDetails,


          "Line1": this.props.state.addressLine1,
          "Line2": this.props.state.addressLine2,
          "Suburb": this.props.state.suburb,
          "StateID": this.props.state.stateCode,
          "PostCode": this.props.state.postCode,
          "CountryID": 8,

          "FamilyDoctor": this.props.state.familyDoctor,
          "LastVisit": this.props.state.lastVisit,
          "WhyLastVisit": this.props.state.reasonOfVisit ? this.props.state.reasonOfVisit : "",
          "Height": 0,
          "WeightKg": 0,
          "Handedness": this.props.state.handedness,
          "CreateDate": new Date(),
          "KNC": this.props.state.KNC ? this.props.state.KNC : localStorageService.getKNC()
        }
      }
      // implementing save after each page
      createPersonalDetails(schema.schema)
        .then(() => {
          e.preventDefault();
          this.props.nextStep();
        })
        .catch((error) => {
          window.alert(error);
        })
    } else this.setState({ submit: true });
  };

  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  validate = () => {
    let nameError = "";

    const val = this.props.state;
    if (
      (val.addressLine1 === "") ||
      (val.suburb === "") ||
      (val.stateName === "") ||
      (val.postCode === "")
    ) {
      nameError = "This field is required";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    } else {
      this.setState({
        nameError: "",
      });
      return true;
    }
  };


  saveCountry = (data) => {
    this.setState({ Countryoptions: data });
    this.props.countryCodef(data);

    console.log(this.Countryoptions);
  };
  componentDidMount() {

    this.props.stateCodef(stateOptions);

    // Typical usage (don't forget to compare props):
    // fetch(
    //   // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/Country"
    //   "https://localhost:44338/v1/personaldetails/Country"
    //   )
    //   .then((response) => response.json())
    //   .catch(function (data) {
    //     window.alert(data);
    //   })
    //   .then((data) => this.saveCountry(data));
    getCountry()
      .then(({ data }) => {
        this.saveCountry(data);
      })
      .catch((error) => {
        window.alert(error);
      })
  }

  render() {
    const { handleChange, state } = this.props;
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Personal Details</h1>
            <p> Step 2 of 3 </p>
          </div>
        </div>
        <div className="contentSpacing">
          <div className="row has-form">
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

                <div className="errorMessage">{state.addressLine1Error}</div>
                <div className="errorMessage">
                  {state.addressLine1Error ? null : (this.props.state.addressLine1 === "" && this.state.nameError)}
                </div>

                {/* <div className="errorMessage">{state.addressLine1Error}</div> */}

              </div>
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
                <div className="errorMessage">{state.suburbError}</div>
                <div className="errorMessage">
                  {state.suburbError ? null : (this.props.state.suburb === "" && this.state.nameError)}
                </div>

                {/* <div className="errorMessage">{state.suburbError}</div> */}

              </div>
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

                <div className="errorMessage">{state.stateNameError}</div>
                <div className="errorMessage">
                  {state.stateNameError ? null : (this.props.state.stateName === "" && this.state.nameError)}
                </div>

                {/* <div className="errorMessage">{state.stateNameError}</div> */}

              </div>
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
                <div className="errorMessage">
                  {state.postCodeError ? null : (this.props.state.postCode === "" && this.state.nameError)}
                </div>
                {/* <div className="errorMessage">{state.postCodeError}</div> */}
              </div>
            </div>

            <div>
              {/* <label className="abc">Country</label> */}
              {/* 
            <Select
           options={this.state.Countryoptions} 
           theme={theme => ({
            ...theme,
            borderRadius: 8,
          })}
           isSearchable 
           menuPlacement="top"
            onChange={handleChange('country')} 
            value={state.country}></Select> */}

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

            {/* {this.state.submit ? <Errormsg /> : null} */}

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
