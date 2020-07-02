import React, { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import "../../App.css";
import axios from "axios";
import auth from "../auth";


class CoreLifeStyleModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      quality_sleep: "",
      smoke_cigar: "",
      water_day: "",
      exercise: "",
      recreational_hobbies: "",
      diet: "",
      sit: "",
      POBPatientID: 60,
      id: "",
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
          quality_sleep: response.data[0].sleepQuality,
          smoke_cigar: response.data[0].smokePerDay,
          water_day: response.data[0].waterPerDay,
          exercise: response.data[0].exercise,
          recreational_hobbies: response.data[0].recreation,
          diet: response.data[0].dietRating,
          sit: response.data[0].sitEightsHours,
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
        [input]: e,
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
            ModuleName: "Core Life Style",

            SleepQuality: this.state.quality_sleep,
            SmokePerDay: this.state.smoke_cigar,
            WaterPerDay: this.state.water_day,
            exercise: this.state.exercise,
            Recreation: this.state.recreational_hobbies,
            DietRating: this.state.diet,
            SitEightsHours: this.state.sit,
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
      val.quality_sleep === "" ||
      val.smoke_cigar === "" ||
      val.water_day === "" ||
      val.exercise === ""
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
  RadioStyle = (num, sptxt, type, tmpstate) => {
    return (
      <div class="custom-radio secondary">
        <input
          type="radio"
          class="custom-input"
          value={num}
          name={type}
          selectedValue={tmpstate}
          onChange={this.handleChange(type)}
        />
        <span>{sptxt}</span>
      </div>
    );
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
            <h1>Core Life Style Module</h1>
          </div>
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  How do you generally rate the quality of your sleep on a scale
                  of 1-5, with 5 being excellent?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.quality_sleep === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "1",
                    "1",
                    "quality_sleep",
                    this.state.quality_sleep
                  )}
                  {this.RadiobtnStyle(
                    "2",
                    "2",
                    "quality_sleep",
                    this.state.quality_sleep
                  )}
                  {this.RadiobtnStyle(
                    "3",
                    "3",
                    "quality_sleep",
                    this.state.quality_sleep
                  )}
                  {this.RadiobtnStyle(
                    "4",
                    "4",
                    "quality_sleep",
                    this.state.quality_sleep
                  )}
                  {this.RadiobtnStyle(
                    "4",
                    "4",
                    "quality_sleep",
                    this.state.quality_sleep
                  )}
                  {this.RadiobtnStyle(
                    "5",
                    "5",
                    "quality_sleep",
                    this.state.quality_sleep
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
                  Do you smoke cigarettes, cigars, or e-cigarettes?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.smoke_cigar === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "smoke_cigar",
                    this.state.smoke_cigar
                  )}
                  {this.RadiobtnStyle(
                    "1–2 per day",
                    "1–2 per day",
                    "smoke_cigar",
                    this.state.smoke_cigar
                  )}
                  {this.RadiobtnStyle(
                    "3–6 per day",
                    "3–6 per day",
                    "smoke_cigar",
                    this.state.smoke_cigar
                  )}
                  {this.RadiobtnStyle(
                    "More than 6 per day",
                    "More than 6 per day",
                    "smoke_cigar",
                    this.state.smoke_cigar
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
                  How much water do you normally drink a day?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.water_day === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "None",
                    "None",
                    "water_day",
                    this.state.water_day
                  )}
                  {this.RadiobtnStyle(
                    "1–2 glasses",
                    "1–2 glasses",
                    "water_day",
                    this.state.water_day
                  )}
                  {this.RadiobtnStyle(
                    "1 litre",
                    "1 litre",
                    "water_day",
                    this.state.water_day
                  )}
                  {this.RadiobtnStyle(
                    "2 litres",
                    "2 litres",
                    "water_day",
                    this.state.water_day
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
                  How many times per week do you exercise for more than 20 mins?{" "}
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.exercise === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "None",
                    "None",
                    "exercise",
                    this.state.exercise
                  )}
                  {this.RadiobtnStyle(
                    "1–2 times",
                    "1–2 times",
                    "exercise",
                    this.state.exercise
                  )}
                  {this.RadiobtnStyle(
                    "3-5 times",
                    "3-5 times",
                    "exercise",
                    this.state.exercise
                  )}
                  {this.RadiobtnStyle(
                    "Everyday",
                    "Everyday",
                    "exercise",
                    this.state.exercise
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>

       
          <div class="row">
            <div class="col-md-12">
              <div class="form-group ">
          <label className="abc">
            Do you have any recreational interests/hobbies?
          </label>
          <input
            className="form-control"
            name="givenName"
            type="text"
            value={this.state.recreational_hobbies}
            onChange={this.handleChange("recreational_hobbies")}
          />
        </div>
        </div>
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  How would you rate your diet on a scale of 1-10, with 10 being
                  the best?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.diet === "" && this.state.nameError}
                </label>
                {Array.from(Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), (e, i) => {
                  return this.RadioStyle(e, e, "diet", this.state.diet);
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you often sit more than 8hrs/day?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.sit === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle("No", "No", "sit", this.state.sit)}
                  {this.RadiobtnStyle("Yes", "Yes", "sit", this.state.sit)}
                </RadioGroup>
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
      </div>
    );
  }
}
export default CoreLifeStyleModule;
