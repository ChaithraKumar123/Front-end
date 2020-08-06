import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { RadioGroup } from "react-radio-group";
import auth from "../auth";

const personalstress = [
  "Never",
  "Almost Never",
  "Sometimes",
  "Fairly Often",
  "Very Often",
];

class CorePsychologicalModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      homestress: "",
      homestress_reason: "",
      personalstress: "",
      medications_impair: "",
      medications_impair_reason: "",
      depression: "",
      depression_reason: "",
      nameError: "",
      POBPatientID: 60,
      id: -1,
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    axios
      .get(
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
        // "https://localhost:44338/api/medhistorydetails",

        {
          params: { value: localStorage.getItem("KNC") },
        }
      )
      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          homestress: response.data[0].homeStress.includes("|")
            ? response.data[0].homeStress.split("|")[0]
            : response.data[0].homeStress,
          homestress_reason: response.data[0].homeStress.includes("|")
            ? response.data[0].homeStress.split("|")[1]
            : "",
          personalstress: response.data[0].personalStress,
          medications_impair: response.data[0].depressionMedication.includes(
            "|"
          )
            ? response.data[0].depressionMedication.split("|")[0]
            : response.data[0].depressionMedication,
          medications_impair_reason: response.data[0].depressionMedication.includes(
            "|"
          )
            ? response.data[0].depressionMedication.split("|")[1]
            : "",
          depression: response.data[0].depression.includes("|")
            ? response.data[0].depression.split("|")[0]
            : response.data[0].depression,
          depression_reason: response.data[0].depression.includes("|")
            ? response.data[0].depression.split("|")[1]
            : "",
          id: response.data[0].pobcpMedHistoryID,
          POBPatientID: response.data[0].pobPatientID,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (input) => (e) => {
    if (e.target) {
      this.setState({
        [input]: e.target.value,
      });
    } else {
      this.setState({
        [input]: e.value,
      });
    }
  };
  completeForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(this.initialState);

      axios
        .post(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
          // "https://localhost:44338/api/medhistorydetails",

          {
            ModuleName: "Core Psycholoical",
            HomeStress:
              this.state.homestress === "No"
                ? "No"
                : this.state.homestress + "|" + this.state.homestress_reason,
            // ? this.state.homestress:this.state.homestress+ '-' + this.state.homestress_reason,
            PersonalStress: this.state.personalstress,
            Depression:
              this.state.depression === "No"
                ? "No"
                : this.state.depression + "|" + this.state.depression_reason,
            DepressionMedication:
              this.state.medications_impair === "No"
                ? "No"
                : this.state.medications_impair +
                  "|" +
                  this.state.medications_impair_reason,
            POBPatientID: localStorage.getItem("KNC"),
            POBCPMedHistoryID: this.state.id,
          }
        )
        .then((response) => {
          console.log(response);
          alert("Submitted");
        })
        .catch((error) => {
          console.log(error);
        });

        axios
        .post(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/saveWorkflow",
          // "https://localhost:44338/api/saveWorkflow",

          {
            KNC: localStorage.getItem("KNC"),
            DateCompleted: new Date()
          }
        )
        .then((response) => {
          if (response.data = "Success")
          {
            console.log(response);
        auth.login(() => {
          this.props.history.push("/Home");
        });
          }
        })
        .catch((error) => {
          console.log(error);
        });

    }
  };
  validate = () => {
    let nameError = "";

    const val = this.state;
    if (
      val.homestress === "" ||
      (val.homeStress === "Yes" && val.homestress_reason === "") ||
      val.personalstress === "" ||
      val.medications_impair === "" ||
      (val.medications_impair === "Yes" &&
        val.medications_impair_reason === "") ||
      val.depression === "" ||
      (val.depression === "Yes" && val.depression_reason === "")
    ) {
      nameError = "*required";
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
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Core Psychological Module</h1>
          </div>
        </div>
        <div className = "contentSpacing">
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Are there any problems (eg. illness or stress) at home?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.homestress === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "homestress",
                    this.state.homestress
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "homestress",
                    this.state.homestress
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {this.state.homestress === "Yes" && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.homestress === "Yes" &&
                      this.state.homestress_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("homestress_reason")}
                    value={this.state.homestress_reason}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label className="abc">
                How often do you feel nervous and “stressed”?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.personalstress === "" && this.state.nameError}
              </label>
              <Dropdown
                options={personalstress}
                onChange={this.handleChange("personalstress")}
                value={this.state.personalstress}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have history of Depression, anxiety or nervous
                  disorder?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.depression === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "depression",
                    this.state.depression
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "depression",
                    this.state.depression
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {this.state.depression === "Yes" && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.depression === "Yes" &&
                      this.state.depression_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("depression_reason")}
                    value={this.state.depression_reason}
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
                Do you take any medications that may impair your ability to operate equipment?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.medications_impair === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "medications_impair",
                    this.state.medications_impair
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "medications_impair",
                    this.state.medications_impair
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {this.state.medications_impair === "Yes" && (
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.medications_impair === "Yes" &&
                      this.state.medications_impair_reason === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("medications_impair_reason")}
                    value={this.state.medications_impair_reason}
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
export default CorePsychologicalModule;
