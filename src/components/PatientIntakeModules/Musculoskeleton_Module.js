import React, { Component } from "react";
import "../../App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { RadioGroup, Radio } from "react-radio-group";
import axios from "axios";
import auth from "../auth";

const type_health_practitioner_options = ["GP", "Chiro", "Physio"];

class MusculoskeletonModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      NeckPain: "",
      NeckPainDate: "",
      NeckPainDateApprox: false,
      NeckPainConsulted: "",
      Neck_type_health_practitioner: "",
      NeckPainTimeOffWork: "",
      NeckPainIntervention: "",
      NeckPainIntervention_details: "",
      NeckPainStatus: "",

      BackPain: "",
      BackPainDate: "",
      BackPainDateApprox: false,
      BackPainConsulted: "",
      Back_type_health_practitioner: "",
      BackPainTimeOffWork: "",
      BackPainIntervention: "",
      BackPainIntervention_details: "",
      BackPainStatus: "",

      SHULPain: "",
      SHULPainDate: "",
      SHULPainDateApprox: false,
      SHULPainConsulted: "",
      SHUL_type_health_practitioner: "",
      SHULPainTimeOffWork: "",
      SHULPainIntervention: "",
      SHULPainIntervention_details: "",
      SHULPainStatus: "",

      HILLPain: "",
      HILLPainDate: "",
      HILLPainDateApprox: false,
      HILLPainConsulted: "",
      HILL_type_health_practitioner: "",
      HILLPainTimeOffWork: "",
      HILLPainIntervention: "",
      HILLPainIntervention_details: "",
      HILLPainStatus: "",

      MSKID: -1,
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    axios
      .get(
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/mskdetails",
        // "https://localhost:44338/api/mskdetails",

        {
          params: { value: localStorage.getItem("KNC") },
        }
      )
      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          MSKID: response.data[0].pobMedHistoryMSKID,
        });
        if (response.data[0].neckPain === "Yes") {
          this.setState({
            NeckPain: response.data[0].neckPain,
            NeckPainDate: response.data[0].neckPainDate.split("T")[0],
            NeckPainDateApprox: response.data[0].neckPainDateApprox,
            NeckPainConsulted:
              response.data[0].neckPainConsulted === "No"
                ? response.data[0].neckPainConsulted
                : response.data[0].neckPainConsulted.split("|")[0],
            Neck_type_health_practitioner:
              response.data[0].neckPainConsulted === "No"
                ? ""
                : response.data[0].neckPainConsulted.split("|")[1],
            NeckPainTimeOffWork: response.data[0].neckPainTimeOffWork,
            NeckPainIntervention:
              response.data[0].neckPainIntervention === "No"
                ? response.data[0].neckPainIntervention
                : response.data[0].neckPainIntervention.split("|")[0],
            NeckPainIntervention_details:
              response.data[0].neckPainIntervention === "No"
                ? ""
                : response.data[0].neckPainIntervention.split("|")[1],
            //NeckPainIntervention_details:'',
            NeckPainStatus: response.data[0].neckPainStatus,
          });
        } else {
          this.setState({ NeckPain: response.data[0].neckPain });
        }
        if (response.data[0].backPain === "Yes") {
          this.setState({
            BackPain: response.data[0].backPain,
            BackPainDate: response.data[0].backPainDate.split("T")[0],
            BackPainDateApprox: response.data[0].backPainDateApprox,
            BackPainConsulted:
              response.data[0].backPainConsulted === "No"
                ? response.data[0].backPainConsulted
                : response.data[0].backPainConsulted.split("|")[0],
            Back_type_health_practitioner:
              response.data[0].backPainConsulted === "No"
                ? ""
                : response.data[0].backPainConsulted.split("|")[1],
            //Neck_type_health_practitioner:response.data[0],
            BackPainTimeOffWork: response.data[0].backPainTimeOffWork,
            BackPainIntervention:
              response.data[0].backPainIntervention === "No"
                ? response.data[0].backPainIntervention
                : response.data[0].backPainIntervention.split("|")[0],
            BackPainIntervention_details:
              response.data[0].backPainIntervention === "No"
                ? ""
                : response.data[0].backPainIntervention.split("|")[1],

            //NeckPainIntervention_details:'',
            BackPainStatus: response.data[0].backPainStatus,
          });
        } else {
          this.setState({ BackPain: response.data[0].backPain });
        }
        if (response.data[0].shulPain === "Yes") {
          this.setState({
            SHULPain: response.data[0].shulPain,
            SHULPainDate: response.data[0].shulPainDate.split("T")[0],
            SHULPainDateApprox: response.data[0].shulPainDateApprox,
            SHULPainConsulted:
              response.data[0].shulPainConsulted === "No"
                ? response.data[0].shulPainConsulted
                : response.data[0].shulPainConsulted.split("|")[0],
            SHUL_type_health_practitioner:
              response.data[0].shulPainConsulted === "No"
                ? ""
                : response.data[0].shulPainConsulted.split("|")[1],

            //Neck_type_health_practitioner:response.data[0],
            SHULPainTimeOffWork: response.data[0].shulPainTimeOffWork,
            SHULPainIntervention:
              response.data[0].shulPainIntervention === "No"
                ? response.data[0].shulPainIntervention
                : response.data[0].shulPainIntervention.split("|")[0],
            SHULPainIntervention_details:
              response.data[0].shulPainIntervention === "No"
                ? ""
                : response.data[0].shulPainIntervention.split("|")[1],

            //NeckPainIntervention_details:'',
            SHULPainStatus: response.data[0].shulPainStatus,
          });
        } else {
          this.setState({ SHULPain: response.data[0].shulPain });
        }
        if (response.data[0].hillPain === "Yes") {
          this.setState({
            HILLPain: response.data[0].hillPain,
            HILLPainDate: response.data[0].hillPainDate.split("T")[0],
            HILLPainDateApprox: response.data[0].hillPainDateApprox,
            HILLPainConsulted:
              response.data[0].hillPainConsulted === "No"
                ? response.data[0].hillPainConsulted
                : response.data[0].hillPainConsulted.split("|")[0],
            HILL_type_health_practitioner:
              response.data[0].hillPainConsulted === "No"
                ? ""
                : response.data[0].hillPainConsulted.split("|")[1],
            HILLPainTimeOffWork: response.data[0].hillPainTimeOffWork,
            HILLPainIntervention:
              response.data[0].hillPainIntervention === "No"
                ? response.data[0].hillPainIntervention
                : response.data[0].hillPainIntervention.split("|")[0],
            HILLPainIntervention_details:
              response.data[0].hillPainIntervention === "No"
                ? ""
                : response.data[0].hillPainIntervention.split("|")[1],
            HILLPainStatus: response.data[0].hillPainStatus,
          });
        } else {
          this.setState({ HILLPain: response.data[0].hillPain });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChangeCheck = (input) => (e) => {
    var name = e.target.name;
    this.setState({
      [name]: e.target.checked,
    });
  };
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
  handleChangeDrop = (input) => (e) => {
    this.setState({
      [input]: e.value,
    });
  };
  completeForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert("Submitted");
      // check if dates are null

      axios
        .post(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/mskdetails",
          // "https://localhost:44338/api/mskdetails",

          {
            NeckPain: this.state.NeckPain,
            NeckPainDate:
              this.state.NeckPain === "No" ? "" : this.state.NeckPainDate,
            NeckPainDateApprox:
              this.state.NeckPain === "No"
                ? "false"
                : this.state.NeckPainDateApprox,
            NeckPainConsulted:
              this.state.NeckPain === "No"
                ? ""
                : this.state.NeckPainConsulted === "No"
                ? "No"
                : this.state.NeckPainConsulted +
                  "|" +
                  this.state.Neck_type_health_practitioner,
            //Neck_type_health_practitioner:this.state.NeckPain==="No"?'':this.state.Neck_type_health_practitioner,
            NeckPainTimeOffWork:
              this.state.NeckPain === "No"
                ? ""
                : this.state.NeckPainTimeOffWork,
            NeckPainIntervention:
              this.state.NeckPain === "No"
                ? ""
                : this.state.NeckPainIntervention === "No"
                ? "No"
                : this.state.NeckPainIntervention +
                  "|" +
                  this.state.NeckPainIntervention_details,
            //NeckPainIntervention_details:this.state.NeckPain==="No"?'':this.state.NeckPainIntervention_details,
            NeckPainStatus:
              this.state.NeckPain === "No" ? "" : this.state.NeckPainStatus,

            BackPain: this.state.BackPain,
            BackPainDate:
              this.state.BackPain === "No" ? "" : this.state.BackPainDate,
            BackPainDateApprox:
              this.state.BackPain === "No"
                ? "false"
                : this.state.BackPainDateApprox,
            BackPainConsulted:
              this.state.BackPain === "No"
                ? ""
                : this.state.BackPainConsulted === "No"
                ? "No"
                : this.state.BackPainConsulted +
                  "|" +
                  this.state.Back_type_health_practitioner,
            //Back_type_health_practitioner:this.state.BackPain==="No"?'':this.state.Back_type_health_practitioner,
            BackPainTimeOffWork:
              this.state.BackPain === "No"
                ? ""
                : this.state.BackPainTimeOffWork,
            BackPainIntervention:
              this.state.BackPain === "No"
                ? ""
                : this.state.BackPainIntervention === "No"
                ? "No"
                : this.state.BackPainIntervention +
                  "|" +
                  this.state.HILLPainIntervention_details,
            // BackPainIntervention_details:this.state.BackPain==="No"?'':this.state.BackPainIntervention_details,
            BackPainStatus:
              this.state.BackPain === "No" ? "" : this.state.BackPainStatus,

            SHULPain: this.state.SHULPain,
            SHULPainDate:
              this.state.SHULPain === "No" ? "" : this.state.SHULPainDate,
            SHULPainDateApprox:
              this.state.SHULPain === "No"
                ? "false"
                : this.state.SHULPainDateApprox,
            SHULPainConsulted:
              this.state.SHULPain === "No"
                ? ""
                : this.state.shulPainConsulted === "No"
                ? "No"
                : this.state.SHULPainConsulted +
                  "|" +
                  this.state.SHUL_type_health_practitioner,
            //SHUL_type_health_practitioner:this.state.SHULPain==="No"?'':this.state.SHUL_type_health_practitioner,
            SHULPainTimeOffWork:
              this.state.SHULPain === "No"
                ? ""
                : this.state.SHULPainTimeOffWork,
            SHULPainIntervention:
              this.state.SHULPain === "No"
                ? ""
                : this.state.SHULPainIntervention === "No"
                ? "No"
                : this.state.SHULPainIntervention +
                  "|" +
                  this.state.SHULPainIntervention_details,
            //SHULPainIntervention_details:this.state.SHULPain==="No"?'':this.state.SHULPainIntervention_details,
            SHULPainStatus:
              this.state.SHULPain === "No" ? "" : this.state.SHULPainStatus,

            HILLPain: this.state.HILLPain,
            HILLPainDate:
              this.state.HILLPain === "No" ? "" : this.state.HILLPainDate,
            HILLPainDateApprox:
              this.state.HILLPain === "No"
                ? "false"
                : this.state.HILLPainDateApprox,
            HILLPainConsulted:
              this.state.HILLPain === "No"
                ? ""
                : this.state.HILLPainConsulted === "No"
                ? "No"
                : this.state.HILLPainConsulted +
                  "|" +
                  this.state.HILL_type_health_practitioner,
            //HILL_type_health_practitioner:this.state.HILLPain==="No"?'':this.state.HILL_type_health_practitioner,
            HILLPainTimeOffWork:
              this.state.HILLPain === "No"
                ? ""
                : this.state.HILLPainTimeOffWork,
            HILLPainIntervention:
              this.state.HILLPain === "No"
                ? ""
                : this.state.HILLPainIntervention === "No"
                ? "No"
                : this.state.HILLPainIntervention +
                  "|" +
                  this.state.HILLPainIntervention_details,
            //HILLPainIntervention_details:this.state.HILLPain==="No"?'':this.state.HILLPainIntervention_details,
            HILLPainStatus:
              this.state.HILLPain === "No" ? "" : this.state.HILLPainStatus,

            MSKID: this.state.MSKID,
            KNC:localStorage.getItem("KNC")
          }
        )
        .then((response) => {
          console.log(response);
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


        // auth.login(() => {
        //   this.props.history.push("/Home");
        // });
    }
  };

  validate = () => {
    let nameError = "";

    const val = this.state;
    if (
      val.NeckPain === "" ||
      (val.NeckPain === "Yes" &&
        (val.NeckPainDate === "" ||
          val.NeckPainConsulted === "" ||
          (val.NeckPainConsulted === "Yes" &&
            val.Neck_type_health_practitioner === "") ||
          val.NeckPainTimeOffWork === "" ||
          val.NeckPainIntervention === "" ||
          (val.NeckPainIntervention === "Yes" &&
            val.NeckPainIntervention_details === "") ||
          val.NeckPainStatus === "")) ||
      val.BackPain === "" ||
      (val.BackPain === "Yes" &&
        (val.BackPainDate === "" ||
          val.BackPainConsulted === "" ||
          (val.BackPainConsulted === "Yes" &&
            val.Back_type_health_practitioner === "") ||
          val.BackPainTimeOffWork === "" ||
          val.BackPainIntervention === "" ||
          (val.BackPainIntervention === "Yes" &&
            val.BackPainIntervention_details === "") ||
          val.BackPainStatus === "")) ||
      val.SHULPain === "" ||
      (val.SHULPain === "Yes" &&
        (val.SHULPainDate === "" ||
          val.SHULPainConsulted === "" ||
          (val.SHULPainConsulted === "Yes" &&
            val.SHUL_type_health_practitioner === "") ||
          val.SHULPainTimeOffWork === "" ||
          val.SHULPainIntervention === "" ||
          (val.SHULPainIntervention === "Yes" &&
            val.SHULPainIntervention_details === "") ||
          val.SHULPainStatus === "")) ||
      val.HILLPain === "" ||
      (val.HILLPain === "Yes" &&
        (val.HILLPainDate === "" ||
          val.HILLPainConsulted === "" ||
          (val.HILLPainConsulted === "Yes" &&
            val.HILL_type_health_practitioner === "") ||
          val.HILLPainTimeOffWork === "" ||
          val.HILLPainIntervention === "" ||
          (val.HILLPainIntervention === "Yes" &&
            val.HILLPainIntervention_details === "") ||
          val.HILLPainStatus === ""))
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
            <h1>Musculoskeletal Pain Questionnaire</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group custom-radio-wrapper">
              <label className="abc">
                Have you had or have you ever had pain or injury to your:
              </label>
              <label className="abc">Neck</label>
              <label style={{ fontSize: 12, color: "red" }}>
                {this.state.NeckPain === "" && this.state.nameError}
              </label>
              <RadioGroup>
                {this.RadiobtnStyle(
                  "Yes",
                  "Yes",
                  "NeckPain",
                  this.state.NeckPain
                )}
                {this.RadiobtnStyle(
                  "No",
                  "No",
                  "NeckPain",
                  this.state.NeckPain
                )}
              </RadioGroup>
            </div>
          </div>
        </div>
        <div>
          <div>
            {this.state.NeckPain === "Yes" && (
              <div className="rounddiv">
                <div id="radio">
                  <label className="abc">Last date occurred</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.NeckPainDate === "" && this.state.nameError}
                  </label>
                  <div>
                  <input
                    className="form-control"
                    id="NeckPainDate"
                    name="NeckPainDate"
                    type="date"
                    placeholder="last date occurred"
                    value={this.state.NeckPainDate}
                    onChange={this.handleChange("NeckPainDate")}
                  ></input><br></br>
                  </div>

                  <div className="custom-radio square">
                    <input
                      type="checkbox"
                      name="NeckPainDateApprox"
                      className="custom-input"
                      checked={this.state.NeckPainDateApprox}
                      onChange={this.handleChangeCheck("NeckPainDateApprox")}
                    />
                    <span>Select if Last occurred date is approximate</span>
                  </div>
                </div>
                <br></br>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did you ever consult a health practitioner
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.NeckPainConsulted === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "NeckPainConsulted",
                            this.state.NeckPainConsulted
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "NeckPainConsulted",
                            this.state.NeckPainConsulted
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {this.state.NeckPainConsulted === "Yes" && (
                    <div>
                      <label className="abc">Type of Health Practitioner</label>
                      <label style={{ fontSize: 12, color: "red" }}>
                        {this.state.NeckPainConsulted === "Yes" &&
                          this.state.Neck_type_health_practitioner === "" &&
                          this.state.nameError}
                      </label>
                      <Dropdown
                        options={type_health_practitioner_options}
                        onChange={this.handleChangeDrop(
                          "Neck_type_health_practitioner"
                        )}
                        value={this.state.Neck_type_health_practitioner}
                        placeholder="Select an option"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did it require time off work
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.NeckPainTimeOffWork === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "NeckPainTimeOffWork",
                            this.state.NeckPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A day",
                            "A day",
                            "NeckPainTimeOffWork",
                            this.state.NeckPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "Less than a week",
                            "Less than a week",
                            "NeckPainTimeOffWork",
                            this.state.NeckPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A week to a month",
                            "A week to a month",
                            "NeckPainTimeOffWork",
                            this.state.NeckPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "More than a month",
                            "More than a month",
                            "NeckPainTimeOffWork",
                            this.state.NeckPainTimeOffWork
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
                          Was the intervention required? eg, imaging, medication
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.NeckPainIntervention === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "NeckPainIntervention",
                            this.state.NeckPainIntervention
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "NeckPainIntervention",
                            this.state.NeckPainIntervention
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                 { this.state.NeckPainIntervention === "Yes" && <div><label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.NeckPainIntervention_details === "" &&
                      this.state.NeckPainIntervention === "Yes" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("NeckPainIntervention_details")}
                    value={this.state.NeckPainIntervention_details}
                  />
                  </div> }
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Is it an ongoing or recurring problem?
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.NeckPainStatus === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "NeckPainStatus",
                            this.state.NeckPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Ongoing",
                            "Ongoing",
                            "NeckPainStatus",
                            this.state.NeckPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Recurring",
                            "Recurring",
                            "NeckPainStatus",
                            this.state.NeckPainStatus
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Back</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.BackPain === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Yes",
                      "Yes",
                      "BackPain",
                      this.state.BackPain
                    )}
                    {this.RadiobtnStyle(
                      "No",
                      "No",
                      "BackPain",
                      this.state.BackPain
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {this.state.BackPain === "Yes" && (
              <div className="rounddiv">
                <div>
                  <label className="abc">Approximate last date occurred</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.BackPainDate === "" && this.state.nameError}
                  </label>
                  <input
                    className="form-control"
                    id="BackPainDate"
                    name="BackPainDate"
                    type="date"
                    placeholder="last date occurred"
                    value={this.state.BackPainDate}
                    onChange={this.handleChange("BackPainDate")}
                  /><br></br>
                    <div className="custom-radio square">
                    <input
                      type="checkbox"
                      name="BackPainDateApprox"
                      className="custom-input"
                      checked={this.state.BackPainDateApprox}
                      onChange={this.handleChangeCheck("BackPainDateApprox")}
                    />
                    <span>Select if Last occurred date is approximate</span>
                  </div>
                </div>
                <br></br>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did you ever consult a health practitioner
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.BackPainConsulted === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "BackPainConsulted",
                            this.state.BackPainConsulted
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "BackPainConsulted",
                            this.state.BackPainConsulted
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {this.state.BackPainConsulted === "Yes" && (
                    <div>
                      <label className="abc">Type of Health Practitioner</label>
                      <label style={{ fontSize: 12, color: "red" }}>
                        {this.state.BackPainConsulted === "Yes" &&
                          this.state.Back_type_health_practitioner === "" &&
                          this.state.nameError}
                      </label>
                      <Dropdown
                        options={type_health_practitioner_options}
                        onChange={this.handleChangeDrop(
                          "Back_type_health_practitioner"
                        )}
                        value={this.state.Back_type_health_practitioner}
                        placeholder="Select an option"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did it require time off work
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.BackPainTimeOffWork === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "BackPainTimeOffWork",
                            this.state.BackPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A day",
                            "A day",
                            "BackPainTimeOffWork",
                            this.state.BackPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "Less than a week",
                            "Less than a week",
                            "BackPainTimeOffWork",
                            this.state.BackPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A week to a month",
                            "A week to a month",
                            "BackPainTimeOffWork",
                            this.state.BackPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "More than a month",
                            "More than a month",
                            "BackPainTimeOffWork",
                            this.state.BackPainTimeOffWork
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
                          Was the intervention required? eg, imaging, medication
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.BackPainIntervention === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "BackPainIntervention",
                            this.state.BackPainIntervention
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "BackPainIntervention",
                            this.state.BackPainIntervention
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                 {this.state.BackPainIntervention === "Yes" &&<div> <label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.BackPainIntervention === "Yes" &&
                      this.state.BackPainIntervention_details === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("BackPainIntervention_details")}
                    value={this.state.BackPainIntervention_details}
                  />
                  </div>}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Is it an ongoing or recurring problem?
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.BackPainStatus === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "BackPainStatus",
                            this.state.BackPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Ongoing",
                            "Ongoing",
                            "BackPainStatus",
                            this.state.BackPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Recurring",
                            "Recurring",
                            "BackPainStatus",
                            this.state.BackPainStatus
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Shoulders and Upper Limbs</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.SHULPain === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Yes",
                      "Yes",
                      "SHULPain",
                      this.state.SHULPain
                    )}
                    {this.RadiobtnStyle(
                      "No",
                      "No",
                      "SHULPain",
                      this.state.SHULPain
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {this.state.SHULPain === "Yes" && (
              <div className="rounddiv">
                <div>
                  <label className="abc">Approximate last date occurred</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.SHULPainDate === "" && this.state.nameError}
                  </label>
                  <input
                    className="form-control"
                    id="SHULPainDate"
                    name="SHULPainDate"
                    type="date"
                    placeholder="last date occurred"
                    value={this.state.SHULPainDate}
                    onChange={this.handleChange("SHULPainDate")}
                  />
                    <br></br>
                  <div className="custom-radio square">
                    <input
                      type="checkbox"
                      name="SHULPainDateApprox"
                      className="custom-input"
                      checked={this.state.SHULPainDateApprox}
                      onChange={this.handleChangeCheck("SHULPainDateApprox")}
                    />
                    <span>Select if Last occurred date is approximate</span>
                  </div>

                </div>
                <br></br>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did you ever consult a health practitioner
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.SHULPainConsulted === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "SHULPainConsulted",
                            this.state.SHULPainConsulted
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "SHULPainConsulted",
                            this.state.SHULPainConsulted
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {this.state.SHULPainConsulted === "Yes" && (
                    <div>
                      <label className="abc">Type of Health Practitioner</label>
                      <label style={{ fontSize: 12, color: "red" }}>
                        {this.state.SHULPainConsulted === "Yes" &&
                          this.state.SHUL_type_health_practitioner === "" &&
                          this.state.nameError}
                      </label>
                      <Dropdown
                        options={type_health_practitioner_options}
                        onChange={this.handleChangeDrop(
                          "SHUL_type_health_practitioner"
                        )}
                        value={this.state.SHUL_type_health_practitioner}
                        placeholder="Select an option"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did it require time off work
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.SHULPainTimeOffWork === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "SHULPainTimeOffWork",
                            this.state.SHULPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A day",
                            "A day",
                            "SHULPainTimeOffWork",
                            this.state.SHULPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "Less than a week",
                            "Less than a week",
                            "SHULPainTimeOffWork",
                            this.state.SHULPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A week to a month",
                            "A week to a month",
                            "SHULPainTimeOffWork",
                            this.state.SHULPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "More than a month",
                            "More than a month",
                            "SHULPainTimeOffWork",
                            this.state.SHULPainTimeOffWork
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
                          Was the intervention required? eg, imaging, medication
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.SHULPainIntervention === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "SHULPainIntervention",
                            this.state.SHULPainIntervention
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "SHULPainIntervention",
                            this.state.SHULPainIntervention
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                 {this.state.SHULPainIntervention === "Yes" && <div>
                    <label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.SHULPainIntervention === "Yes" &&
                      this.state.SHULPainIntervention_details === "" &&
                      this.state.nameError}
                  </label>

                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("SHULPainIntervention_details")}
                    value={this.state.SHULPainIntervention_details}
                  />
                  </div>}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Is it an ongoing or recurring problem?
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.SHULPainStatus === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "SHULPainStatus",
                            this.state.SHULPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Ongoing",
                            "Ongoing",
                            "SHULPainStatus",
                            this.state.SHULPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Recurring",
                            "Recurring",
                            "SHULPainStatus",
                            this.state.SHULPainStatus
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">Hips and Lower Limbs</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.HILLPain === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Yes",
                      "Yes",
                      "HILLPain",
                      this.state.HILLPain
                    )}
                    {this.RadiobtnStyle(
                      "No",
                      "No",
                      "HILLPain",
                      this.state.HILLPain
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {this.state.HILLPain === "Yes" && (
              <div className="rounddiv">
                <div>
                  <label className="abc">Approximate last date occurred</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.HILLPainDate === "" && this.state.nameError}
                  </label>
                  <input
                    className="form-control"
                    id="HILLPainDate"
                    name="HILLPainDate"
                    type="date"
                    placeholder="last date occurred"
                    value={this.state.HILLPainDate}
                    onChange={this.handleChange("HILLPainDate")}
                  />
                    <br></br>
                  <div className="custom-radio square">
                    <input
                      type="checkbox"
                      name="HILLPainDateApprox"
                      className="custom-input"
                      checked={this.state.HILLPainDateApprox}
                      onChange={this.handleChangeCheck("HILLPainDateApprox")}
                    />
                    <span>Select if Last occurred date is approximate</span>
                  </div>
                </div>
                <br></br>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did you ever consult a health practitioner
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.HILLPainConsulted === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "HILLPainConsulted",
                            this.state.HILLPainConsulted
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "HILLPainConsulted",
                            this.state.HILLPainConsulted
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {this.state.HILLPainConsulted === "Yes" && (
                    <div>
                      <label className="abc">Type of Health Practitioner</label>
                      <label style={{ fontSize: 12, color: "red" }}>
                        {this.state.HILLPainConsulted === "Yes" &&
                          this.state.HILL_type_health_practitioner === "" &&
                          this.state.nameError}
                      </label>
                      <Dropdown
                        options={type_health_practitioner_options}
                        onChange={this.handleChangeDrop(
                          "HILL_type_health_practitioner"
                        )}
                        value={this.state.HILL_type_health_practitioner}
                        placeholder="Select an option"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Did it require time off work
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.HILLPainTimeOffWork === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "HILLPainTimeOffWork",
                            this.state.HILLPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A day",
                            "A day",
                            "HILLPainTimeOffWork",
                            this.state.HILLPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "Less than a week",
                            "Less than a week",
                            "HILLPainTimeOffWork",
                            this.state.HILLPainTimeOffWork
                          )}
                          {this.RadiobtnStyle(
                            "A week to a month",
                            "A week to a month",
                            "HILLPainTimeOffWork",
                            this.state.HILLPainTimeOffWork
                          )}{" "}
                          {this.RadiobtnStyle(
                            "More than a month",
                            "More than a month",
                            "HILLPainTimeOffWork",
                            this.state.HILLPainTimeOffWork
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
                          Was the intervention required? eg, imaging, medication
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.HILLPainIntervention === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "Yes",
                            "Yes",
                            "HILLPainIntervention",
                            this.state.HILLPainIntervention
                          )}
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "HILLPainIntervention",
                            this.state.HILLPainIntervention
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

               { this.state.HILLPainIntervention === "Yes" && <div> <label className="abc">Provide Details if Yes</label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.HILLPainIntervention === "Yes" &&
                      this.state.HILLPainIntervention_details === "" &&
                      this.state.nameError}
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    cols="5"
                    onChange={this.handleChange("HILLPainIntervention_details")}
                    value={this.state.HILLPainIntervention_details}
                  />
                   </div>}
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group custom-radio-wrapper">
                        <label className="abc">
                          Is it an ongoing or recurring problem?
                        </label>
                        <label style={{ fontSize: 12, color: "red" }}>
                          {this.state.HILLPainStatus === "" &&
                            this.state.nameError}
                        </label>
                        <RadioGroup>
                          {this.RadiobtnStyle(
                            "No",
                            "No",
                            "HILLPainStatus",
                            this.state.HILLPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Ongoing",
                            "Ongoing",
                            "HILLPainStatus",
                            this.state.HILLPainStatus
                          )}
                          {this.RadiobtnStyle(
                            "Recurring",
                            "Recurring",
                            "HILLPainStatus",
                            this.state.HILLPainStatus
                          )}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <button className="btn btn-primary btn-block" onClick={this.completeForm}>
          Submit
          </button>
        </div>
      </div>
    );
  }
}
export default MusculoskeletonModule;
