import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { RadioGroup, Radio } from "react-radio-group";
import auth from "../auth";


class RedFlagModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      recent_weight_gain: "",
      toilet_pain: "",
      wake_up_pain: "",
      nameError: "",
      coordination_change: "",
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
          recent_weight_gain: response.data[0].weightChanges,
          toilet_pain: response.data[0].toiletPain,
          wake_up_pain: response.data[0].nightPain,
          coordination_change: response.data[0].coordination,
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
      alert("Submitted");
      axios
        .post(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
          {
            ModuleName: "Red Flag",
            WeightChanges: this.state.recent_weight_gain,
            ToiletPain: this.state.toilet_pain,
            NightPain: this.state.wake_up_pain,
            Coordination: this.state.coordination_change,
            POBPatientID: this.state.POBPatientID,
            POBCPMedHistoryID: this.state.id,
          }
        )
        .then((response) => {
          console.log(response);
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
      val.recent_weight_gain === "" ||
      val.toilet_pain === "" ||
      val.wake_up_pain === "" ||
      val.coordination_change === ""
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
            <h1>Red Flag Questionnaire</h1>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Have you noticed any recent changes to your weight that you
                  can’t explain?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.recent_weight_gain === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "recent_weight_gain",
                    this.state.recent_weight_gain
                  )}
                  {this.RadiobtnStyle(
                    "Gained Weight",
                    "Gained Weight",
                    "recent_weight_gain",
                    this.state.recent_weight_gain
                  )}
                  {this.RadiobtnStyle(
                    "Lost Weight",
                    "Lost Weight",
                    "recent_weight_gain",
                    this.state.recent_weight_gain
                  )}
                  {this.RadiobtnStyle(
                    "Don't Know",
                    "Don't Know",
                    "recent_weight_gain",
                    this.state.recent_weight_gain
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  {" "}
                  Do you have any problems or pain when going to the toilet?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.toilet_pain === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "toilet_pain",
                    this.state.toilet_pain
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "toilet_pain",
                    this.state.toilet_pain
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "toilet_pain",
                    this.state.toilet_pain
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you wake up from pain at night?{" "}
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.wake_up_pain === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "wake_up_pain",
                    this.state.wake_up_pain
                  )}
                  {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "wake_up_pain",
                    this.state.wake_up_pain
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "wake_up_pain",
                    this.state.wake_up_pain
                  )}
                  
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Have you noticed any changes in your coordination (for example
                  dropping things, or losing your balance)?{" "}
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.coordination_change === "" &&
                    this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Never",
                    "Never",
                    "coordination_change",
                    this.state.coordination_change
                  )}
                   {this.RadiobtnStyle(
                    "Often",
                    "Often",
                    "coordination_change",
                    this.state.coordination_change
                  )}
                  {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "coordination_change",
                    this.state.coordination_change
                  )}
                 
                </RadioGroup>
              </div>
            </div>
          </div>
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
export default RedFlagModule;
