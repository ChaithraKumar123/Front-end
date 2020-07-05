import React, { Component } from "react";
import "../../App.css";
import Dropdown from "react-dropdown";
import axios from "axios";
import "react-dropdown/style.css";
import auth from "../auth";

const family_disorder_options = [
  "No",
  "Cancer",
  "Diabetes",
  "Heart Condition",
  "Lung Disease",
  "Mental Illness",
  "Stroke",
  "Thyroid Problems",
  "Don’t know",
  "Other",
];
class FamilyHistoryModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      family_disorder: "",
      family_disorder_details: "",
      POBPatientID: 60,
      id: -1,
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    axios
      .get(
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
        {
          params: { value: this.state.POBPatientID },
        }
      )
      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          family_disorder: response.data[0].familyHistory.includes("|")
            ? response.data[0].familyHistory.split("|")[0]
            : response.data[0].familyHistory,
          family_disorder_details: response.data[0].familyHistory.includes("|")
            ? response.data[0].familyHistory.split("|")[1]
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
          {
            ModuleName: "Family History",
            FamilyHistory:
              this.state.family_disorder_details !== ""
                ? this.state.family_disorder +
                  "|" +
                  this.state.family_disorder_details
                : this.state.family_disorder,
            //family_disorder_details:this.state.family_disorder==="Other"?this.state.family_disorder.split('-')[1]:"",
            POBPatientID: this.state.POBPatientID,
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
        auth.login(() => {
          this.props.history.push("/Home");
        });
    }
  };
  validate = () => {
    let nameError = "";

    const val = this.state;
    if (
      val.family_disorder === "" ||
      (val.family_disorder === "Other" && val.family_disorder_details === "")
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
  render() {
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Family History Module</h1>
          </div>
        </div>
        <div>

        <div class="row">
          <div class="col-md-12">
          <div class="form-group ">
          
          <label className="abc">
            Has anyone in your family had or suffered from cancer, diabetes,
            heart disease, lung disease, mental illness, stroke or thyroid
            problems?{" "}
          </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.family_disorder === "" && this.state.nameError}
          </label>
          <Dropdown
            options={family_disorder_options}
            onChange={this.handleChange("family_disorder")}
            value={this.state.family_disorder}
            placeholder="Select an option"
          />
           </div>
        </div>
        </div>
          {this.state.family_disorder === "Other" && <div>
          <div class="row">
          <div class="col-md-12">
          <div class="form-group ">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.family_disorder === "Other" &&
              this.state.family_disorder_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("family_disorder_details")}
            value={this.state.family_disorder_details}
          />
          </div>
          </div>
        </div>
        </div>}
        </div>
       
        <div>
          <button
            className="btn btn-primary btn-block"
            onClick={this.completeForm}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default FamilyHistoryModule;
