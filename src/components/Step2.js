import React, { Component } from "react";
import { format } from "date-fns";

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
    if (
      !(this.props.state.CompClaim === "") &&
      this.props.state.EmpStDateisValid &&
      this.props.state.CompClaimDetailsisValid
    ) {
      e.preventDefault();
      this.props.nextStep();
    } else if (
      this.props.state.CompClaim === "0" &&
      this.props.state.EmpStDateisValid
    ) {
      this.setState({ CompClaimDetailsisValid: true });
      this.props.nextStep();
    } else this.setState({ submit: true });
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
            <div>
              <div className="form-group">
                <label className="abc">
                  Please explain how long you were off work, on light duties,
                  the type of injury, and any other relevant information
                </label>
                <textarea
                  className="form-control"
                  id="CompClaimDetails"
                  name="CompClaimDetails"
                  type="textarea"
                  value={state.CompClaimDetails}
                  onChange={handleChange("CompClaimDetails")}
                ></textarea>
              </div>
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
        <div className="page-title lg">
          <div className="title">
            <h1>Job Details</h1>
            <p> Step 2 of 4 </p>
          </div>
        </div>
        <div className = "contentSpacing">
        <div className="row">
          <div>
            <div className="form-group">
              <label className="abc">Current Position</label>
              <input
                className="form-control"
                id="CurrentPosition"
                name="CurrentPosition"
                type="text"
                value={state.CurrentPosition}
                onChange={handleChange("CurrentPosition")}
              />
            </div>
          </div>

          <div>
            <div className="form-group">
              <label className="abc">Employment Start Date</label>
              <input
                className="form-control"
                id="EmpStDate"
                name="EmpStDate"
                type="date"
                max={ format(new Date(), "yyyy-MM-dd")}
                value={state.EmpStDate}
                onChange={handleChange("EmpStDate")}
              />
              <div className="errorMessage">{state.EmpStDateError}</div>
            </div>
          </div>

          <div>
            <div className="form-group">
              <label className="abc">Department</label>
              <input
                className="form-control"
                id="Department"
                name="Department"
                type="text"
                value={state.Department}
                onChange={handleChange("Department")}
              />
            </div>
          </div>

          <div>
            <div className="form-group">
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
          </div>

          <div className="form-group custom-radio-wrapper">
            <label className="abc">
              Have you ever made a claim for workers compensation in any
              employment within Australia?
            </label>

            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                value="1"
                id="CompClaim"
                checked={state.CompClaim === "1"}
                onChange={handleChange("CompClaim")}
              />
              <span>Yes</span>
            </div>
            <div className="custom-radio rounded">
              <input
                type="radio"
                className="custom-input"
                value="0"
                id="CompClaim"
                checked={state.CompClaim === "0"}
                onChange={handleChange("CompClaim")}
              />
              <span>No</span>
            </div>
          </div>

          {RenderCompClaim()}

          {this.state.submit ? <Errormsg /> : null}
        </div>

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
    );
  }
}
export default Step2;
