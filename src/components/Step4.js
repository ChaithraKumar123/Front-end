import React, { Component } from "react";
//import {schema} from ".userSchema";
import auth from "./auth";
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);


class Step4 extends Component {
  state = { submit: false, op:null};
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  save = (e)=> {

    console.log(e)

  }

  continue = (e) => {
    if (
      !(this.props.state.handedness === "") &&
      this.props.state.heightisValid &&
      this.props.state.weightisValid    ) {

      
 const schema ={
  "schema" : {
    "Title":this.props.state.titleOpt,
    "FirstName": this.props.state.givenName,
    "LastName":  this.props.state.surName,
    "MiddleNames":  this.props.state.middleName,
    "Email": this.props.state.email,
    "Gender":this.props.state.gender,
    "culturalGroup":this.props.state.culturalGroup,
    "DateOfBirth":this.props.state.DateofB,
    "Mobile":this.props.state.mobileNumber,

    "CurrentPosition":this.props.state.CurrentPosition,
    "EmpStartDate":this.props.state.EmpStDate,
    "EmpDepartment":this.props.state.Department,
    "PreviousWorkCompClaim":Number(this.props.state.CompClaim),
    "PreviousWorkCompClaimDetails":this.props.state.CompClaimDetails,

    
    "Line1":this.props.state.addressLine1,
    "Line2":this.props.state.addressLine2,
    "Suburb":this.props.state.suburb,
    "StateID":1,//this.props.state.stateName,
    "PostCode":this.props.state.postCode,
    "CountryID":8,

    "FamilyDoctor":this.props.state.familyDoctor,
    "LastVisit":this.props.state.lastVisit,
    "WhyLastVisit":this.props.state.reasonOfVisit,
    "Height":this.props.state.height,
    "WeightKg":this.props.state.weight,
    "Handedness":this.props.state.handedness,
    "CreateDate": new Date(),
    "KNC": this.props.state.KNC
  }
  }

  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json','Accept': 'application/json',  "Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",},
    body: JSON.stringify(schema.schema)
};

  console.log(schema.schema)
  let op;
  fetch('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails', requestOptions)
  .then(response => response.json())
  .then(data => {
    if(Number(data.httpStatusCode) ===200){
      window.confirm("Form Completed \n Next step under construction")
    }
    else{
      window.confirm(data.message)
    }
  
  });
      // e.preventDefault();      // this.props.nextStep();
    } else this.setState({ submit: true });
  };


  // continue = (e) => {
  //   e.preventDefault();
  //   console.log("done")
  //   auth.login(() => {this.props.history.push("/History")});
  //  // this.props.nextStep();
  // };

  finish = (e) => {
    e.preventDefault();
  //  this.props.nextStep();
  };

  render() {
    const { handleChange, state } = this.props;
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Medical Details</h1>
            <p> Step 4 of 4 </p>
          </div>
        </div>
        <div className="row">
          <div>
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
            <label className="abc">Last Visit</label>
            <input
              type="date"
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
          </div>

          <div>
            <div className= "form-group">
            <label className="abc">Height (cm)</label>
            <input
              type="text"
              id="height"
              className="form-control"
              value={state.height}
              onChange={handleChange("height")}
            ></input>
            </div>
            <div className="errorMessage">{state.heightError}</div>
          </div>

          <div>
            <div className= "form-group">
            <label className="abc">Weight (kgs)</label>
            <input
              type="text"
              id="weight"
              className="form-control"
              value={state.weight}
              onChange={handleChange("weight")}
            ></input>
            </div>
            <div className="errorMessage">{state.weightError}</div>
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
            </div>
          <div className="errorMessage">{state.handednessError}</div>
        </div>

        {this.state.submit ? <Errormsg /> : null}

       <div class="btn-block prev-back-btn">
          <button class="btn btn-outline-primary" onClick={this.back}>
            Back
          </button>
          <button
            class="btn btn-primary modal-btn"
            data-modal-id="sampleModal"
            onClick={this.continue}
          >
            Finish
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Step4);
