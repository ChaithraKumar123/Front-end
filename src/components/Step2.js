import React, { Component } from "react";

const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);

class Step2 extends Component {
  state = { submit: false };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    if ((
      !(this.props.state.CompClaim === "") &&
      this.props.state.EmpStDateisValid &&
      this.props.state.CompClaimDetailsisValid
    )) {
      e.preventDefault();
      this.props.nextStep();
    } else if(this.props.state.CompClaim === "0" && this.props.state.EmpStDateisValid){
      this.setState({CompClaimDetailsisValid: true})
      this.props.nextStep();

    } 
    else this.setState({ submit: true });
  };

  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };


  render() {
    const { handleChange, state } = this.props;

    const RenderCompClaim = () => {
      if (state.CompClaim === "1") {
        return (
          <React.Fragment>
            <label className="abc">
              Please explain how long you were off work, <br />
              on light duties, the type of injury, <br />
              and any other relevant information
            </label>

            <div>
              <textarea
                className="form-control"
                id="CompClaimDetails"
                name="CompClaimDetails"
                type="textarea"
                value={state.CompClaimDetails}
                onChange={handleChange("CompClaimDetails")}
              ></textarea>
            </div>

            <div className="errorMessage">{state.CompClaimDetailsError}</div>
          </React.Fragment>
        );
      } else {
        return null;
      }
    };

    return (
      <div id="MainDiv">
        <div>
          <p id="Stepscolor">
            {" "}
            Step 2 of 4 <br /> Job Details
          </p>
          <label className="abc">Current Position</label>
          <div>
            <input
              className="form-control"
              id="CurrentPosition"
              name="CurrentPosition"
              type="text"
              value={state.CurrentPosition}
              onChange={handleChange("CurrentPosition")}
            />

            <label className="abc">Employment Start Date</label>
            <input
              className="form-control"
              id="EmpStDate"
              name="EmpStDate"
              type="date"
              value={state.EmpStDate}
              onChange={handleChange("EmpStDate")}
            />
            <div className="errorMessage">{state.EmpStDateError}</div>

            <label className="abc">Department</label>
            <input
              className="form-control"
              id="Department"
              name="Department"
              type="text"
              value={state.Department}
              onChange={handleChange("Department")}
            />
            <label className="abc">Line/Task</label>
            <input
              className="form-control"
              id="LineTask"
              name="LineTask"
              type="text"
              value={state.LineTask}
              onChange={handleChange("LineTask")}
            />
          </div>
          <label className="abc">
            Have you ever made a claim
            <br /> for workers compensation in any <br />
            employment within Australia?
          </label>
          <div id="radio">
            <input
              type="radio"
              value="1"
              id="CompClaim"
              checked={state.CompClaim === "1"}
              onChange={handleChange("CompClaim")}
            />
            Yes
            <input
              type="radio"
              value="0"
              id="CompClaim"
              checked={state.CompClaim === "0"}
              onChange={handleChange("CompClaim")}
            />
            No
          </div>
          {RenderCompClaim()}
          {this.state.submit ? <Errormsg /> : null}

          <button className="back" onClick={this.back}>
            Back
          </button>
          <button className="next" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}
export default Step2;
