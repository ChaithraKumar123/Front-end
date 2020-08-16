import React, { Component } from "react";
import "../../App.css";
import { RadioGroup, Radio } from "react-radio-group";

import auth from "../auth";
import axios from "axios";

class ManualHandling extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      pain_lift: "",
      pain_walk: "",
      pain_stand: "",
      pain_squat: "",
      pain_bend: "",
      pain_lift_reason: "",
      pain_walk_reason: "",
      pain_stand_reason: "",
      pain_squat_reason: "",
      pain_bend_reason: "",
      problem_working_conditions: "",
      problem_working_conditions_reason: "",
      difficult_operating: "",
      difficult_operating_reason: "",
      pain_lift_below: "",
      pain_lift_below_reason: "",
      problem_working_heights_reason: "",
      problem_working_heights: "",
      require_assistance_reason: "",
      require_assistance: "",
      nameError: "",
      pain_grip_reason: "",
      pain_grip: "",
    };
    this.state = this.initialState;
  }
  handleChange = (input) => (e) => {
    if (e.target) {
      this.setState({
        [input]: e.target.value,
      });
    } else {
      this.setState({
        [input]: e,
      });
    }
  };

  // componentDidMount() {
  //   axios
  //     .get(
  //       // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/manualhandling",
  //       "https://localhost:44338/api/manualhandling",

  //       {
  //         params: { value: localStorage.getItem("KNC") },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data[0]);
  //       this.setState({
  //         // quality_sleep: response.data[0].sleepQuality,
  //         // smoke_cigar: response.data[0].smokePerDay,
  //         // water_day: response.data[0].waterPerDay,
  //         // exercise: response.data[0].exercise,
  //         // recreational_hobbies: response.data[0].recreation,
  //         // diet: response.data[0].dietRating,
  //         // sit: response.data[0].sitEightsHours,
  //         // id: response.data[0].pobcpMedHistoryID,
  //         // POBPatientID: response.data[0].pobPatientID,

  //         HeavyObjects: response.data[0].heavyObjects,
  //         PainWalking: response.data[0].painWalking,
  //         PainBending: response.data[0].painBending,
  //         PainSquating: response.data[0].painSquating,
  //         PainStanding: response.data[0].painStanding,
  //         BelowOverhead: response.data[0].belowOverhead,
  //         Gripping: response.data[0].gripping,
  //         OperatingMachinery: response.data[0].operatingMachinery,
  //         TemperatureDifficulty: response.data[0].temperatureDifficulty,
  //         Heights: response.data[0].heights,
  //         AncticipateAssistance: response.data[0].ancticipateAssistance
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  completeForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      //  this.setState(this.initialState);

      const Signupschema = {
        schema: {
          KNC: this.props.state.KNC,
          HeavyObjects: this.state.pain_lift_reason,
          PainWalking: this.state.pain_walk_reason,
          PainBending: this.state.pain_bend_reason,
          PainSquating: this.state.pain_squat_reason,
          PainStanding: this.state.pain_stand_reason,
          BelowOverhead: this.state.pain_lift_below_reason,
          Gripping: this.state.pain_grip_reason,
          OperatingMachinery: this.state.difficult_operating_reason,
          TemperatureDifficulty: this.state.problem_working_conditions_reason,
          Heights: this.state.problem_working_heights_reason,
          AncticipateAssistance: this.state.require_assistance_reason,
        },
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        },
        body: JSON.stringify(Signupschema.schema),
      };

      try {
        fetch(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/manualhandling",
          // "https://localhost:44338/api/manualhandling"

          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            if (Number(data.httpStatusCode) === 200) {
              window.confirm("Submitted");
              auth.login(() => {
                this.props.history.push("/Home");
              });
            } else {
              window.confirm(data.message);
            }
          });
      } catch (error) {
        window.alert(error);
      }
      //  alert('Submitted')
    } else {
      alert("error submitting");
    }
  };
  validate = () => {
    let nameError = "";

    const val = this.state;
    if (
      val.pain_lift === "" ||
      (val.pain_lift === "Yes" && val.pain_lift_reason === "") ||
      val.pain_walk === "" ||
      (val.pain_walk === "Yes" && val.pain_walk_reason === "") ||
      val.pain_stand === "" ||
      val.pain_squat === "" ||
      ((val.pain_squat === "Often" || val.pain_squat === "Sometimes") &&
        val.pain_squat_reason === "") ||
      val.pain_bend === "" ||
      ((val.pain_bend === "Often" || val.pain_bend === "Sometimes") &&
        val.pain_bend_reason === "") ||
      val.problem_working_conditions === "" ||
      val.difficult_operating === "" ||
      ((val.difficult_operating === "Often" ||
        val.difficult_operating === "Sometimes") &&
        val.difficult_operating_reason === "") ||
      val.pain_grip === "" ||
      ((val.pain_grip === "Often" || val.pain_grip === "Sometimes") &&
        val.pain_grip_reason === "") ||
      ((val.problem_working_heights === "Often" ||
        val.problem_working_heights === "Sometimes") &&
        this.state.problem_working_heights_reason === "") ||
      val.pain_lift_below === "" ||
      ((val.pain_lift_below === "Often" ||
        val.pain_lift_below === "Sometimes") &&
        val.pain_lift_below_reason === "") ||
      val.problem_working_heights === "" ||
      val.require_assistance === "" ||
      (val.pain_walk === "Yes" && val.pain_walk_reason === "") ||
      val.pain_stand === "" ||
      val.pain_squat === "" ||
      ((val.require_assistance_reason === "Often" ||
        val.require_assistance_reason === "Sometimes") &&
        this.state.require_assistance_reason === "")
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
  RadiobtnStyle = (num, sptxt, type, tmpstate) => {
    return (
      <div className="custom-radio rounded">
        <input
          type="radio"
          className="custom-input"
          value={num}
          name={type}
          checked={tmpstate === num.toString()}
          onChange={this.handleChange(type)}
        />
        <span>{sptxt}</span>
      </div>
    );
  };
  render() {
    const { handleChange, state } = this.props;

    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Manual Handling Module</h1>
          </div>
        </div>
        <div className = "row has-form-forms">

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have any pain/discomfort when lifting/handling heavy
                  objects?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.pain_lift === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_lift",
                    this.state.pain_lift
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_lift",
                    this.state.pain_lift
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {this.state.pain_lift === "Yes" && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label className="abc">Please provide details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.pain_lift === "Yes" &&
                      this.state.pain_lift_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("pain_lift_reason")}
                    value={this.state.pain_lift_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">
                    {" "}
                    Do you have any pain when doing any of the following for any
                    period of time:
                  </label>
                  <br></br>

                  <label className="abc">Walking?</label>

                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.pain_walk === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Never",
                      "Never",
                      "pain_walk",
                      this.state.pain_walk
                    )}
                    {this.RadiobtnStyle(
                      "Often",
                      "Often",
                      "pain_walk",
                      this.state.pain_walk
                    )}
                    {this.RadiobtnStyle(
                      "Sometimes",
                      "Sometimes",
                      "pain_walk",
                      this.state.pain_walk
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {(this.state.pain_walk === "Often" ||
              this.state.pain_walk === "Sometimes") && (
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label className="abc">Provide Details</label>
                    <label style={{ fontSize: 12, color: "red" }}>
                      {(this.state.pain_walk === "Often" ||
                        this.state.pain_walk === "Sometimes") &&
                        this.state.pain_walk_reason === "" &&
                        this.state.nameError}
                    </label>
                    <textarea
                      className="form-control"
                      rows="1"
                      cols="5"
                      onChange={this.handleChange("pain_walk_reason")}
                      value={this.state.pain_walk_reason}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Bending?</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.pain_bend === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Never",
                      "Never",
                      "pain_bend",
                      this.state.pain_bend
                    )}
                    {this.RadiobtnStyle(
                      "Often",
                      "Often",
                      "pain_bend",
                      this.state.pain_bend
                    )}
                    {this.RadiobtnStyle(
                      "Sometimes",
                      "Sometimes",
                      "pain_bend",
                      this.state.pain_bend
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {(this.state.pain_bend === "Often" ||
              this.state.pain_bend === "Sometimes") && (
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label className="abc">Provide Details</label>
                    <label style={{ fontSize: 12, color: "red" }}>
                      {(this.state.pain_bend === "Often" ||
                        this.state.pain_bend === "Sometimes") &&
                        this.state.pain_bend_reason === "" &&
                        this.state.nameError}
                    </label>
                    <textarea
                      className="form-control"
                      rows="1"
                      cols="5"
                      onChange={this.handleChange("pain_bend_reason")}
                      value={this.state.pain_bend_reason}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Squating?</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.pain_squat === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Never",
                      "Never",
                      "pain_squat",
                      this.state.pain_squat
                    )}
                    {this.RadiobtnStyle(
                      "Often",
                      "Often",
                      "pain_squat",
                      this.state.pain_squat
                    )}
                    {this.RadiobtnStyle(
                      "Sometimes",
                      "Sometimes",
                      "pain_squat",
                      this.state.pain_squat
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {(this.state.pain_squat === "Often" ||
              this.state.pain_squat === "Sometimes") && (
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label className="abc">Provide Details</label>
                    <label style={{ fontSize: 12, color: "red" }}>
                      {(this.state.pain_squat === "Often" ||
                        this.state.pain_squat === "Sometimes") &&
                        this.state.pain_squat_reason === "" &&
                        this.state.nameError}
                    </label>
                    <textarea
                      className="form-control"
                      rows="1"
                      cols="5"
                      onChange={this.handleChange("pain_squat_reason")}
                      value={this.state.pain_squat_reason}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Standing?</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.pain_stand === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Never",
                      "Never",
                      "pain_stand",
                      this.state.pain_stand
                    )}
                    {this.RadiobtnStyle(
                      "Often",
                      "Often",
                      "pain_stand",
                      this.state.pain_stand
                    )}
                    {this.RadiobtnStyle(
                      "Sometimes",
                      "Sometimes",
                      "pain_stand",
                      this.state.pain_stand
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>
            {(this.state.pain_stand === "Often" ||
              this.state.pain_stand === "Sometimes") && (
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group custom-radio-wrapper">
                    <label className="abc">Provide Details</label>
                    <label style={{ fontSize: 12, color: "red" }}>
                      {(this.state.pain_stand === "Often" ||
                        this.state.pain_stand === "Sometimes") &&
                        this.state.pain_stand_reason === "" &&
                        this.state.nameError}
                    </label>
                    <textarea
                      className="form-control"
                      rows="1"
                      cols="5"
                      onChange={this.handleChange("pain_stand_reason")}
                      value={this.state.pain_stand_reason}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have any pain or difficulty when lifting objects below
                  or overhead?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.pain_lift_below === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "pain_lift_below",
                    this.state.pain_lift_below
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "pain_lift_below",
                    this.state.pain_lift_below
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_lift_below",
                    this.state.pain_lift_below
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {(this.state.pain_lift_below === "Often" ||
            this.state.pain_lift_below === "Sometimes") && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label className="abc">Provide Details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.pain_lift === "Yes" &&
                      this.state.pain_lift_below_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("pain_lift_below_reason")}
                    value={this.state.pain_lift_below_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have any pain when using a gripping motion?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.pain_grip === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "pain_grip",
                    this.state.pain_grip
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "pain_grip",
                    this.state.pain_grip
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_grip",
                    this.state.pain_grip
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {(this.state.pain_grip === "Often" ||
            this.state.pain_grip === "Sometimes") && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Provide Details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {(this.state.pain_grip === "Often" ||
                      this.state.pain_grip === "Sometimes") &&
                      this.state.pain_grip_reason === "" &&
                      this.state.nameError}
                  </label>

                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("pain_grip_reason")}
                    value={this.state.pain_grip_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you experience any difficulty operating machinery?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.difficult_operating === "" &&
                    this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "difficult_operating",
                    this.state.difficult_operating
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "difficult_operating",
                    this.state.difficult_operating
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "difficult_operating",
                    this.state.difficult_operating
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {(this.state.difficult_operating === "Often" ||
            this.state.difficult_operating === "Sometimes") && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Provide Details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {(this.state.difficult_operating === "Often" ||
                      this.state.difficult_operating === "Sometimes") &&
                      this.state.difficult_operating_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("difficult_operating_reason")}
                    value={this.state.difficult_operating_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have any problems working in hot dry conditions, humid
                  conditions, cold conditions, wet conditions?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.problem_working_conditions === "" &&
                    this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "problem_working_conditions",
                    this.state.problem_working_conditions
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "problem_working_conditions",
                    this.state.problem_working_conditions
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "problem_working_conditions",
                    this.state.problem_working_conditions
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {(this.state.problem_working_conditions === "Often" ||
            this.state.problem_working_conditions === "Sometimes") && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Provide Details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {(this.state.problem_working_conditions === "Often" ||
                      this.state.problem_working_conditions === "Sometimes") &&
                      this.state.problem_working_conditions_reason === "" &&
                      this.state.nameError}
                  </label>

                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange(
                      "problem_working_conditions_reason"
                    )}
                    value={this.state.problem_working_conditions_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have problems working at heights?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.problem_working_heights === "" &&
                    this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "problem_working_heights",
                    this.state.problem_working_heights
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "problem_working_heights",
                    this.state.problem_working_heights
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "problem_working_heights",
                    this.state.problem_working_heights
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {(this.state.problem_working_heights === "Often" ||
            this.state.problem_working_heights === "Sometimes") && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Provide Details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.problem_working_heights === "Yes" &&
                      this.state.problem_working_heights_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange(
                      "problem_working_heights_reason"
                    )}
                    value={this.state.problem_working_heights_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you anticipate that you will require assistance, in the
                  form of specific aids or task modification?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.require_assistance === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "require_assistance",
                    this.state.require_assistance
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "require_assistance",
                    this.state.require_assistance
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "require_assistance",
                    this.state.require_assistance
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
          {(this.state.require_assistance === "Often" ||
            this.state.require_assistance === "Sometimes") && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Provide Details</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {(this.state.require_assistance === "Often" ||
                      this.state.require_assistance === "Sometimes") &&
                      this.state.require_assistance_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("require_assistance_reason")}
                    value={this.state.require_assistance_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="row">
          <button
            className="btn btn-primary btn-block"
            onClick={this.completeForm}
          >
            Submit
          </button>
        </div>
      </div>
      </div>

    );
  }
}
export default ManualHandling;
