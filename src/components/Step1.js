import React, { Component } from "react";
//import Dropdown from "react-dropdown";
//import { Field, reduxForm } from 'redux-form'
import Select from "react-select";
import { createPersonalDetails, getEthnicity, getPersonalDetails } from "../services/api";
import LocalStorageService from "../services/localStorageService";


const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);
const localStorageService = new LocalStorageService();
class Step1 extends Component {
  state = { submit: false, ethnicityoptions: [], dateerr: "" };
  continue = (e) => {
    const isValid = this.validate();

    if ((isValid) &&
      !(this.props.state.titleOpt === "") &&
      !(this.props.state.gender === "") &&
      (this.props.state.givenName !== "") &&
      (this.props.state.surName !== "") &&
      this.props.state.DateofB &&
      (this.props.state.mobileNumber !== "")
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
          "StateID": 0,
          "PostCode": 0,
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
      (val.titleOpt === "") ||
      (val.gender === "") ||
      (val.givenName === "") ||
      (val.surName === "") ||
      (val.DateofB === "" || (new Date().getFullYear() - new Date(val.DateofB).getFullYear() < 15)) ||
      (val.mobileNumber === "")


    ) {
      this.setState({ dateerr: "Invalid date" })
      nameError = "This field is required";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    } else {
      this.setState({
        nameError: "",
        dateerr: ""
      });
      return true;
    }
  };



  saveEthnicity = (data) => {
    try {
      this.setState({ ethnicityoptions: data.sort((a, b) => (a.label > b.label) ? 1 : -1) });
      this.props.ethnicityCodef(data);
    }
    catch (err) {
      console.log(err);

    }
  };
  componentDidMount() {
    // Typical usage (don't forget to compare props):
    // fetch(
    //   // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/Ethnicity"
    //   "https://localhost:44338/v1/personaldetails/Ethnicity"
    // )
    //   .then((response) => response.json())
    //   .catch(function (data) {
    //     window.alert(data);
    //   })
    //   .then((data) => this.saveEthnicity(data))
    //   .then (() =>

    //   axios
    //   .get(
    //     // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
    //     // 'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails/'+ localStorage.getItem("KNC"),
    //     "https://localhost:44338/v1/personaldetails/" + localStorage.getItem("KNC"),
    //   )
    //   .then((response) => {
    //     console.log(response.data[0]);
    //       this.props.getdetails(response.data[0], response.data[1], response.data[2])
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   )
    getEthnicity()
      .then(({ data }) => {
        this.saveEthnicity(data);
      })
      .then(() => {
        getPersonalDetails(localStorageService.getKNC())
          .then(({ data }) => {
            this.props.getdetails(data[0], data[1], data[2]);
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch((error) => {
        console.log(error);
      })






  }

  render() {
    const { handleChange, state, Leftarrow } = this.props;

    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            {/* <div style = {{float: "left", "marginTop": "4px" }}>
              <button style = {{ "background": "transparent", "border": "none"}} onClick = {()=> console.log("clicked me")}>
              <img  src={require("../images/left-arrow-white.svg")} height = "25px"/>
              </button>

            </div> */}
            {Leftarrow("/")}
            <div style={{ float: "right", marginLeft: "15px" }}>
              <h1>Personal Details</h1>
              <p> Step 1 of 3 </p>
            </div>

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
              <div className="errorMessage">{state.titleOptError}</div>
              <div className="errorMessage">
                {this.props.state.titleOpt === "" && this.state.nameError}
              </div>
            </div>


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
                <div className="errorMessage">
                  {state.givenNameError ? null : (this.props.state.givenName === "" && this.state.nameError)}
                </div>
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
                <div className="errorMessage">
                  {state.surNameError ? null : (this.props.state.surName === "" && this.state.nameError)}
                </div>
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
                <div className="errorMessage">
                  {state.DateofBError ? null : (!this.props.state.DateofBisValid && this.state.dateerr)}
                </div>
              </div>
            </div>

            <div className="form-group custom-radio-wrapper">
              <label className="abc">Gender</label>

              <div className="custom-radio rounded">
                <input
                  type="radio"
                  className="custom-input"
                  name="radio2"
                  value="M"
                  id="gender"
                  checked={state.gender === "M"}
                  onChange={handleChange("gender")}
                />
                <span>Male</span>
              </div>
              <div className="custom-radio rounded">
                <input
                  type="radio"
                  className="custom-input"
                  name="radio2"
                  value="F"
                  id="gender"
                  checked={state.gender === "F"}
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
                <span>Other</span>
              </div>
              <div className="errorMessage">{state.genderError}</div>
              <div className="errorMessage">
                {/* {this.props.state.gender === "" && this.state.nameError} */}
                {state.genderError ? null : (this.props.state.gender === "" && this.state.nameError)}

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

                <div className="errorMessage">{state.mobileNumberError}</div>
                <div className="errorMessage">
                  {state.mobileNumberError ? null : (this.props.state.mobileNumber === "" && this.state.nameError)}

                </div>
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
                <div className="errorMessage">
                  {/* {this.props.state.email === "" && this.state.nameError} */}
                  {state.emailError ? null : (this.props.state.email === "" && this.state.nameError)}

                </div>
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
              {/* {this.state.submit ? <Errormsg /> : null} */}
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
