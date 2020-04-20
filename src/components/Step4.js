import React, { Component } from "react";

const Errormsg = () => (
  <div className="errorMessage">Missing or invalid fields</div>
);

class Step4 extends Component {
  state = { submit: false };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    if (
      !(this.props.state.handedness === "") &&
      this.props.state.heightisValid &&
      this.props.state.weightisValid    ) {
      window.confirm("Form Completed \n Next step under construction")
      // e.preventDefault();
      // this.props.nextStep();
    } else this.setState({ submit: true });
  };


  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  finish = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, state } = this.props;
    return (
      <div id="MainDiv">
        <div>
          <p id="Stepscolor">
            Step 4 of 4 <br />
            Medical Details
          </p>

          <div>
            <label className="abc">Family Doctor</label>
            <input
              type="text"
              className="form-control"
              id="familyDoctor"
              onChange={handleChange("familyDoctor")}
              value={state.familyDoctor}
            ></input>
            <label className="abc">Last Visit</label>
            <input
              type="date"
              id="lastVisit"
              className="form-control"
              value={state.lastVisit}
              onChange={handleChange("lastVisit")}
            ></input>
            <label className="abc">Reason For Visit</label>
            <input
              type="text"
              id="reasonOfVisit"
              className="form-control"
              value={state.reasonOfVisit}
              onChange={handleChange("reasonOfVisit")}
            ></input>
            <label className="abc">Height (cm)</label>
            <input
              type="text"
              id="height"
              className="form-control"
              value={state.height}
              onChange={handleChange("height")}
            ></input>
            <div className="errorMessage">{state.heightError}</div>

            <label className="abc">Weight (kgs)</label>
            <input
              type="text"
              id="weight"
              className="form-control"
              value={state.weight}
              onChange={handleChange("weight")}
            ></input>
            <div className="errorMessage">{state.weightError}</div>
          </div>

          <label className="abc">Handedness</label>
          <div id="radio">
            <input
              id="handedness"
              type="radio"
              value="Left"
              checked={state.handedness === "Left"}
              onChange={handleChange("handedness")}
            />
            Left
            <input
              id="handedness"
              type="radio"
              value="Right"
              checked={state.handedness === "Right"}
              onChange={handleChange("handedness")}
            />
            Right
            <input
              id="handedness"
              type="radio"
              value="Ambidextrous"
              checked={state.handedness === "Ambidextrous"}
              onChange={handleChange("handedness")}
            />
            Ambidextrous
          </div>
          <div className="errorMessage">{state.handednessError}</div>
        </div>
        {this.state.submit ? <Errormsg /> : null}

        <button className="back" onClick={this.back}>
          Back
        </button>
        <button
          className="next"
          onClick={this.continue}
        >
          Finish
          {/* should implete this feature and navigation */}
        </button>
      </div>
    );
  }
}
export default Step4;
