import React, { Component } from "react";

class Step4 extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

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
              name="familyDoctor"
              onChange={handleChange("familyDoctor")}
              value={state.familyDoctor}
            ></input>
            <label className="abc">Last Visit</label>
            <input
              type="date"
              name="lastVisit"
              className="form-control"
              value={state.lastVisit}
              onChange={handleChange("lastVisit")}
            ></input>
            <label className="abc">Reason For Visit</label>
            <input
              type="text"
              name="reasonOfVisit"
              className="form-control"
              value={state.reasonOfVisit}
              onChange={handleChange("reasonOfVisit")}
            ></input>
            <label className="abc">Height (cm)</label>
            <input
              type="text"
              name="height"
              className="form-control"
              value={state.height}
              onChange={handleChange("height")}
            ></input>
            <label className="abc">Weight (kgs)</label>
            <input
              type="text"
              name="weight"
              className="form-control"
              value={state.weight}
              onChange={handleChange("weight")}
            ></input>
          </div>

          <label className="abc">Handedness</label>
          <div id="radio">
            <input
              type="radio"
              value="Left"
              checked={state.handedness === "Left"}
              onChange={handleChange("handedness")}
            />
            Left
            <input
              type="radio"
              value="Right"
              checked={state.handedness === "Right"}
              onChange={handleChange("handedness")}
            />
            Right
            <input
              type="radio"
              value="Ambidextrous"
              checked={state.handedness === "Ambidextrous"}
              onChange={handleChange("handedness")}
            />
            Ambidextrous
          </div>
        </div>
        <button className="back" onClick={this.back}>
          Back
        </button>
        <button
          className="next"
          onClick={() =>
            window.confirm("Form Completed \n Next step under construction")
          }
        >
          Finish
          {/* should implete this feature and navigation */}
        </button>
      </div>
    );
  }
}
export default Step4;
