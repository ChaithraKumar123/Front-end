import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import { RadioGroup } from "react-radio-group";
// import auth from "../auth";


class OreboModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      current_pain: -1,
      rate_pain: -1,
      tense: -1,
      night_sleep: -1,
      bothered_depressed: -1,
      light_work: -1,
      stop_work: -1,
      stop_normal_work: -1,
      risk_view: -1,
      normal_duties: -1,
      PatientID: -1,
      EntityType: 52,
      EntityID: 1,
      OMPQID: -1,
      entityId: 60,
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    axios
      .get(
        // "https://localhost:44338/api/orebrodetails",
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/orebrodetails",
        

        {
          params: { value: localStorage.getItem("KNC") },
        }
      )
      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          current_pain: response.data[0].q1.toString(),
          rate_pain: response.data[0].q2.toString(),
          light_work: response.data[0].q3.toString(),
          night_sleep: response.data[0].q4.toString(),
          tense: response.data[0].q5.toString(),
          bothered_depressed: response.data[0].q6.toString(),
          risk_view: response.data[0].q7.toString(),
          stop_work: response.data[0].q8.toString(),
          normal_duties: response.data[0].q9.toString(),
          stop_normal_work: response.data[0].q10.toString(),
          OMPQID: response.data[0].ompqid,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  completeForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(this.initialState);

      axios
        .post(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/orebrodetails",

          // "https://localhost:44338/api/orebrodetails",
          {
            Q1: this.state.current_pain,
            Q2: this.state.rate_pain,
            Q3: this.state.light_work,
            Q4: this.state.night_sleep,
            Q5: this.state.tense,
            Q6: this.state.bothered_depressed,
            Q7: this.state.risk_view,
            Q8: this.state.normal_duties,
            Q9: this.state.stop_work,
            Q10: this.state.stop_normal_work,
            EntityID: localStorage.getItem("KNC"),
            OMPQID: this.state.OMPQID,
          }
        )
        .then((response) => {
          // alert("Submitted");
          console.log(response);
        })
        .catch((error) => {
          alert("Error submitting the form");
          console.log(error);
        });

        // auth.login(() => {
        //     this.props.history.push("/Home");
        //   });
    }
  };
  validate = () => {
    let nameError = "";

    const val = this.state;
    if (val.current_pain === -1 || val.rate_pain === -1) {
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
            <h1>Örebro Musculoskeletal Pain Questionnaire</h1>
          </div>
        </div>
        <div className = "row has-form-forms">
        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  How long have you had your current pain problem?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.current_pain === -1 && this.state.nameError}
                </label>{" "}
                <RadioGroup>
                  <div>
                  {this.RadiobtnStyle(
                    0,
                    " 0-1 weeks",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    1,
                    "1-2 weeks",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    2,
                    "3-4 weeks",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    3,
                    "4-5 weeks",
                    "current_pain",
                    this.state.current_pain
                  )}
                  </div>

                  <div>
                  {this.RadiobtnStyle(
                    4,
                    "6-8 weeks",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    5,
                    "9-11 weeks",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    6,
                    "3-6 months",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    7,
                    "6-9 months",
                    "current_pain",
                    this.state.current_pain
                  )}
                  </div>



                  {this.RadiobtnStyle(
                    8,
                    "9-12 months",
                    "current_pain",
                    this.state.current_pain
                  )}
                  {this.RadiobtnStyle(
                    9,
                    "Over 1 year",
                    "current_pain",
                    this.state.current_pain
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                How would you rate the pain that you have had during the past
                week?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.rate_pain === -1 && this.state.nameError}
                </label>{" "}
              <div>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(i, i, "rate_pain", this.state.rate_pain);
              })}

              </div>

              <div class="radio-indicators">
                <span>No pain</span>
                <span>Pain as bad as it could be</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">I can do light work for an hour</label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(
                  i,
                  i,
                  "light_work",
                  this.state.light_work
                );
              })}
              <div class="radio-indicators">
                <span> Can’t do it because of the pain problem</span>
                <span>Can do it without pain being a problem</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">I can sleep at night</label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.night_sleep === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(
                  i,
                  i,
                  "night_sleep",
                  this.state.night_sleep
                );
              })}
              <div class="radio-indicators">
                <span> Can’t do it because of the pain problem</span>
                <span>Can do it without pain being a problem</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                {" "}
                How tense or anxious have you felt in the past week?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.tense === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(i, i, "tense", this.state.tense);
              })}
              <div class="radio-indicators">
                <span> Absolutely calm and relaxed</span>
                <span>As tense and anxious as I’ve ever felt</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                How much have you been bothered by feeling depressed in the past
                week?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.bothered_depressed === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(
                  i,
                  i,
                  "bothered_depressed",
                  this.state.bothered_depressed
                );
              })}
              <div class="radio-indicators">
                <span> Not at all </span>
                <span>Extremely</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                In your view, how large is the risk that your current pain may
                become persistent?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.risk_view === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(i, i, "risk_view", this.state.risk_view);
              })}
              <div class="radio-indicators">
                <span> No risk </span>
                <span>Very large risk</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                In your estimation, what are the chances you will be working
                your normal duties in 3 months?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.normal_duties === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(
                  i,
                  i,
                  "normal_duties",
                  this.state.normal_duties
                );
              })}
              <div class="radio-indicators">
                <span> No Chance </span>
                <span>Very large chance</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                An increase in pain is an indication that I should stop what I’m
                doing until the pain decreases?
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.stop_work === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(i, i, "stop_work", this.state.stop_work);
              })}
              <div class="radio-indicators">
                <span> Completely disagree </span>
                <span>Completely agree</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                I should not do my normal work with my present pain.
              </label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.stop_normal_work === -1 && this.state.nameError}
              </label>
              {Array.from(Array(11), (e, i) => {
                return this.RadioStyle(
                  i,
                  i,
                  "stop_normal_work",
                  this.state.stop_normal_work
                );
              })}
              <div class="radio-indicators">
                <span> Completely disagree </span>
                <span>Completely agree</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn-primary btn-block" onClick={this.completeForm}>
          Submit
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default OreboModule;
