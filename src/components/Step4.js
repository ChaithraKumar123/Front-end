import React, { Component } from "react";
//import {schema} from ".userSchema";
import { format } from "date-fns";

import auth from "./auth";
import {
  withRouter
} from "react-router-dom";

import { createPersonalDetails } from "../services/api";
import LocalStorageService from "../services/localStorageService";

const localStorageService = new LocalStorageService();
const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);



class Step4 extends Component {
  state = { submit: false, op: null, renderThankyou: false };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };



  save = (e) => {

    console.log(e)

  }

  validate = () => {
    let nameError = "";

    const val = this.props.state;
    if (
      (val.handedness === "") ||
      (val.heightisValid === "") ||
      (val.weightisValid === "")
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



  continue = (e) => {

    const isValid = this.validate();


    if (
      !(this.props.state.handedness === "") &&
      this.props.state.height &&
      this.props.state.weight) {


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
          "PreviousWorkCompClaim": Number(this.props.state.CompClaim),
          "PreviousWorkCompClaimDetails": this.props.state.CompClaimDetails,


          "Line1": this.props.state.addressLine1,
          "Line2": this.props.state.addressLine2,
          "Suburb": this.props.state.suburb,
          "StateID": this.props.state.stateCode,
          "PostCode": this.props.state.postCode,
          // "CountryID":this.props.state.countryCode,

          "FamilyDoctor": this.props.state.familyDoctor,
          "LastVisit": this.props.state.lastVisit,
          "WhyLastVisit": this.props.state.reasonOfVisit ? this.props.state.reasonOfVisit : "",
          "Height": this.props.state.height,
          "WeightKg": this.props.state.weight,
          "Handedness": this.props.state.handedness,
          "CreateDate": new Date(),
          "KNC": this.props.state.KNC ? this.props.state.KNC : localStorageService.getKNC(),
          "WorkflowID": localStorageService.getWorkFlowId(),
        }
      }


      //   const requestOptions = {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json','Accept': 'application/json',  "Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",},
      //     body: JSON.stringify(schema.schema)
      // };

      //   console.log(schema.schema)
      //   fetch(
      //     // 'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails'
      //     "https://localhost:44338/v1/personaldetails"

      //     , requestOptions)
      //   .then(response => response.json())
      //   .then(data => {
      //     if(Number(data.httpStatusCode) ===200){
      //       // window.confirm("Form Completed")
      //       this.setState({
      //         renderThankyou: true
      //       })
      //       // localStorage.removeItem("confToken")
      //       // auth.login(() => {
      //       //   this.props.history.push("/Home");
      //       // });
      //     }
      //     else{
      //       window.confirm(data.message)
      //     }

      //   });
      //     } else this.setState({ submit: true });
      createPersonalDetails(schema.schema)
        .then(() => {
          this.setState({
            renderThankyou: true
          })
        })
        .catch((error) => {
          window.alert(error);
        })
    } else this.setState({ submit: true });
  };



  // continue = (e) => {
  //   e.preventDefault();
  //   console.log("done")
  //   this.setState({
  //     renderThankyou: true
  //   })
  // };

  finish = (e) => {
    e.preventDefault();
    console.log("donefinish")
    auth.login(() => { this.props.history.push("/") });

    //  this.props.nextStep();
  };

  injuryDetails = (e) => {
    e.preventDefault();
    //not a proper fix. need to come up with a proper fix after discussing with Peter
    localStorageService.setWorkFlowId(JSON.parse(localStorageService.getWorkFlowId()) + 1);
    auth.login(() => {
      this.props.history.push("/painIndicator");
    });
  }

  render() {
    const { handleChange, state } = this.props;
    if (!this.state.renderThankyou) {

      return (
        <div id="MainDiv">
          <div className="page-title lg">
            <div className="title">
              <h1>Personal Details</h1>
              <p> Step 3 of 3 </p>
            </div>
          </div>
          <div className="contentSpacing">
            <div className="row has-form">
              <div>
                <div className="form-group">
                  <label className="abc">Height (cm)</label>
                  <input
                    type="text"
                    id="height"
                    className="form-control"
                    value={state.height}
                    onChange={handleChange("height")}
                  ></input>

                  <div className="errorMessage">{state.heightError}</div>
                  <div className="errorMessage">
                    {state.heightError ? null : (this.props.state.height === "" && this.state.nameError)}
                  </div>

                  {/* <div className="errorMessage">{state.heightError}</div> */}

                </div>
              </div>

              <div>
                <div className="form-group">
                  <label className="abc">Weight (kgs)</label>
                  <input
                    type="text"
                    id="weight"
                    className="form-control"
                    value={state.weight}
                    onChange={handleChange("weight")}
                  ></input>
                  <div className="errorMessage">{state.weightError}</div>
                  <div className="errorMessage">
                    {state.weightError ? null : (this.props.state.weight === "" && this.state.nameError)}
                  </div>
                  {/* <div className="errorMessage">{state.weightError}</div> */}

                </div>
              </div>

              <div className="form-group custom-radio-wrapper">

                <label className="abc">Handedness</label>
                <div className="custom-radio rounded">
                  <input
                    className="custom-input"
                    id="handedness"
                    type="radio"
                    value="Left"
                    checked={state.handedness === "Left"}
                    onChange={handleChange("handedness")}
                  />
                  <span>Left</span>
                </div>

                <div className="custom-radio rounded">
                  <input
                    className="custom-input"
                    id="handedness"
                    type="radio"
                    value="Right"
                    checked={state.handedness === "Right"}
                    onChange={handleChange("handedness")}
                  />
                  <span>Right</span>
                </div>

                <div className="custom-radio rounded">
                  <input
                    className="custom-input"
                    id="handedness"
                    type="radio"
                    value="Ambidextrous"
                    checked={state.handedness === "Ambidextrous"}
                    onChange={handleChange("handedness")}
                  />
                  <span>Ambidextrous</span>
                </div>

                <div className="errorMessage">{state.handednessError}</div>
                <div className="errorMessage">
                  {state.handednessError ? null : (this.props.state.handedness === "" && this.state.nameError)}
                </div>

              </div>


              {/* <div className="errorMessage">{state.handednessError}</div> */}

              {/* <div>
              <div className= "form-group">
              <label className="abc">Family Doctor<span className="optional">Optional</span></label>
              <input
                type="text"
                className="form-control"
                id="familyDoctor"
                onChange={handleChange("familyDoctor")}
                value={state.familyDoctor}
              ></input>
              </div>
            </div>

            <div>
              <div className = "form-group">
              <label className="abc">Last Visit <span className="optional">Optional</span> </label>
              <input
                type="date"
                max={ format(new Date(), "yyyy-MM-dd")}
                id="lastVisit"
                className="form-control"
                value={state.lastVisit}
                onChange={handleChange("lastVisit")}
              ></input>
              </div>
            </div>

            <div>
              <div className= "form-group">
              <label className="abc">Reason For Visit <span className="optional">Optional</span> </label>
              <input
                type="text"
                id="reasonOfVisit"
                className="form-control"
                value={state.reasonOfVisit}
                onChange={handleChange("reasonOfVisit")}
              ></input>
              </div>
            </div> */}


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
                  Finish
            </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.renderThankyou && localStorageService.getWorkFlowId() < 0) {
      return (
        <div id="MainDiv">
          <div className="page-title lg">
            <div className="title">
              <p>Thank you!</p>
            </div>
          </div>
          <div className="row has-form">
            <h4
              style={{
                textAlign: "center",
                color: "#092C4C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Your information has been saved.
        <br /> <br />
            </h4>
            <h4
              style={{
                textAlign: "center",
                color: "#092C4C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              We look forward to seeing you at your next appointment.
      </h4>
            <br></br>
            <div>
              <button
                style={{ position: "relative", marginTop: "100%" }}

                className="btn btn-primary btn-block"
                onClick={this.finish}
              >
                Done
        </button>
            </div>
          </div>

        </div>
      );
    }
    else {
      return (
        <div id="MainDiv">
          <div className="page-title lg">
            <div className="title">
              <p>Almost complete...</p>
            </div>
          </div>
          <div className="row has-form">
            <h4
              style={{
                textAlign: "center",
                color: "#092C4C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Thank you for completing your personal details.
        <br /> <br />
            </h4>
            <h4
              style={{
                textAlign: "center",
                color: "#092C4C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              To complete the process, we need to ask about your injury - estimated two minutes.
      </h4>
            <br></br>
            <h4
              style={{
                textAlign: "center",
                color: "#092C4C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Please click the "Injury Details" button below to highlight where you are injured.
      </h4>
            <br></br>
            <div>
              <button
                style={{ position: "relative", marginTop: "100%" }}

                className="btn btn-primary btn-block"
                onClick={this.injuryDetails}
              >
                Injury Details
        </button>
            </div>
          </div>

        </div>
      );
    }

  }
}
export default withRouter(Step4);
