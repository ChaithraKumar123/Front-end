import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import auth from "../auth";
import Select from 'react-select'



import { RadioGroup } from "react-radio-group";

const cholesteroloptions = [
  "No",
  "High blood pressure",
  "Low blood pressure",
  "High cholesterol",
  "Both are high",
  "Other",
];
const digestiveoptions = [
  "No",
  "Bloating",
  "Bleeding",
  "GORD",
  "Heartburn",
  "IBD",
  "Indigestion",
  "Irregular Bowel movements",
  "Reflux",
  "Other",
];
const heartproblemsoptions = [
  "No",
  "Angina",
  "Previous heart attack",
  "Heart disease",
  "Murmer",
  "Tachycardia",
  "Other",
];
const breathing_options = [
  "No",
  "Asthma",
  "Emphysema",
  "Exertional",
  "Smoking-related",
  "Pregnancy-related",
  "Pain with breathing",
  "Other",
];


class CoreMedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      allergies: "",
      allergies_reason: "",
      diabetes: "",
      diabetes_other_details: "",
      cholesterol: "",
      cholesterol_details: "",
      nameError: "",
      digestive: "",
      digestive_details: "",
      heart_problems: "",
      heart_problems_details: "",
      breathing_problems: "",
      breathing_problems_details: "",
      headache_details: "",
      headache: "",
      medication: "",
      medication_yes: null,
      medication_yes_temp : null,
      fracture: "",
      fracture_details: "",
      high_fever: "",
      high_fever_details: "",
      disorders: "",
      disorders_details: "",
      thyroid: "",
      thyroid_details: "",
      medical_conditions: "",
      medical_conditions_details: "",
      concerns: "",
      dizziness: "",
      POBPatientID: 60,
      temp:'',
      medications_options:[],
      id: -1,
    };
    this.state = this.initialState;
  }
  onChangeMultipleSelect = input=>(event) => {


  if (event!==null)

    {

    this.setState({
        [input]: event
    });
  }
}

roundedDropdown= ()=> {
  var element = document.getElementsByClassName("Dropdown-control");
  var i;
  var len = element.length;
  for (i = 0; i < len; i++) {
    element[0].className = element[0].className.replace("Dropdown-control", "pleasework");
  }

}


  componentDidMount() {

    this.roundedDropdown()

    axios
    .get(
      'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medlist'


      )
    .then(response => {
        this.setState({
            medications_options : response.data
        })

    })
    .catch(error => {
        console.log(error)
    })
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
          allergies: response.data[0].allergies.includes("|")
            ? response.data[0].allergies.split("|")[0]
            : response.data[0].allergies,
          allergies_reason: response.data[0].allergies.includes("|")
            ? response.data[0].allergies.split("|")[1]
            : "",

          diabetes: response.data[0].diabetes.includes("|")
            ? response.data[0].diabetes.split("|")[0]
            : response.data[0].diabetes,
          diabetes_other_details: response.data[0].diabetes.includes("|")
            ? response.data[0].diabetes.split("|")[1]
            : "",

          cholesterol: response.data[0].cholesterol.includes("|")
            ? response.data[0].cholesterol.split("|")[0]
            : response.data[0].cholesterol,
          cholesterol_details: response.data[0].cholesterol.includes("|")
            ? response.data[0].cholesterol.split("|")[1]
            : "",

          digestive: response.data[0].digestive.includes("|")
            ? response.data[0].digestive.split("|")[0]
            : response.data[0].digestive,
          digestive_details: response.data[0].digestive.includes("|")
            ? response.data[0].digestive.split("|")[1]
            : "",

          heart_problems: response.data[0].heart.includes("|")
            ? response.data[0].heart.split("|")[0]
            : response.data[0].heart,
          heart_problems_details: response.data[0].heart.includes("|")
            ? response.data[0].heart.split("|")[1]
            : "",

          breathing_problems: response.data[0].breath.includes("|")
            ? response.data[0].breath.split("|")[0]
            : response.data[0].breath,
          breathing_problems_details: response.data[0].breath.includes("|")
            ? response.data[0].breath.split("|")[1]
            : "",

          dizziness: response.data[0].vertigo,

          headache: response.data[0].headaches.includes("|")
            ? response.data[0].headaches.split("|")[0]
            : response.data[0].headaches,
          headache_details: response.data[0].headaches.includes("|")
            ? response.data[0].headaches.split("|")[1]
            : "",

          medication: response.data[0].medications.includes("|")
            ? response.data[0].medications.split("|")[0]
            : response.data[0].medications,


          fracture: response.data[0].previousTrauma.includes("|")
            ? response.data[0].previousTrauma.split("|")[0]
            : response.data[0].previousTrauma,
          fracture_details: response.data[0].previousTrauma.includes("|")
            ? response.data[0].previousTrauma.split("|")[1]
            : "",

          high_fever: response.data[0].hospitalDetails.includes("|")
            ? response.data[0].hospitalDetails.split("|")[0]
            : response.data[0].hospitalDetails,
          high_fever_details: response.data[0].hospitalDetails.includes("|")
            ? response.data[0].hospitalDetails.split("|")[1]
            : "",

          disorders: response.data[0].degenerativeDisorder.includes("|")
            ? response.data[0].degenerativeDisorder.split("|")[0]
            : response.data[0].degenerativeDisorder,
          disorders_details: response.data[0].degenerativeDisorder.includes("|")
            ? response.data[0].degenerativeDisorder.split("|")[1]
            : "",

          thyroid: response.data[0].thyroidDisorder.includes("|")
            ? response.data[0].thyroidDisorder.split("|")[0]
            : response.data[0].thyroidDisorder,
          thyroid_details: response.data[0].thyroidDisorder.includes("|")
            ? response.data[0].thyroidDisorder.split("|")[1]
            : "",

          medical_conditions: response.data[0].illDisease.includes("|")
            ? response.data[0].illDisease.split("|")[0]
            : response.data[0].illDisease,
          medical_conditions_details: response.data[0].illDisease.includes("|")
            ? response.data[0].illDisease.split("|")[1]
            : "",
          //concerns:response.data[0].digestive,

          id: response.data[0].pobcpMedHistoryID,
          POBPatientID: response.data[0].pobPatientID,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(
        'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/med_list_insert',
        // 'https://localhost:44338/api/med_list_insert',

      {
        params: { value: localStorage.getItem("KNC") ,value1 : this.state.id},
      })
      .then(response => {
          this.setState({

              medication_yes_temp : response.data
          })
          this.setState({
            medication_yes : response.data
          })

      })
      .catch(error => {
          console.log(error)
      })
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
          // "https://localhost:44338/api/medhistorydetails",

          {
            Allergies:
              this.state.allergies === "No"
                ? "No"
                : this.state.allergies + "|" + this.state.allergies_reason,
            ModuleName: "Core Medical History",
            //this.state.allergies_reason
            Diabetes:
              this.state.diabetes_other_details !== ""
                ? this.state.diabetes + "|" + this.state.diabetes_other_details
                : this.state.diabetes,
            //this.state.diabetes_other_details
            Cholesterol:
              this.state.cholesterol_details !== ""
                ? this.state.cholesterol + "|" + this.state.cholesterol_details
                : this.state.cholesterol,
            //this.state.cholesterol_details
            Digestive:
              this.state.digestive_details !== ""
                ? this.state.digestive + "|" + this.state.digestive_details
                : this.state.digestive,
            //this.state.digestive_details
            Heart:
              this.state.heart_problems_details !== ""
                ? this.state.heart_problems +
                  "|" +
                  this.state.heart_problems_details
                : this.state.heart_problems,
            //this.state.heart_problems_details
            Breath:
              this.state.breathing_problems_details !== ""
                ? this.state.breathing_problems +
                  "|" +
                  this.state.breathing_problems_details
                : this.state.breathing_problems,
            //this.state.breathing_problems_details
            //this.state.headache_details
            Vertigo: this.state.dizziness,
            Headaches:
              this.state.headache_details !== ""
                ? this.state.headache + "|" + this.headache_details
                : this.state.headache,

            Medications:
              this.state.medication === "No"
                ? "No"
                : this.state.medication ,
            //this.state.medication_yes
            PreviousTrauma:
              this.state.fracture === "No"
                ? "No"
                : this.state.fracture + "|" + this.state.fracture_details,
            // this.state.fracture_details
            HospitalDetails:
              this.state.high_fever === "No"
                ? "No"
                : this.state.high_fever + "|" + this.state.high_fever_details,
            // this.state.high_fever_details
            DegenerativeDisorder:
              this.state.disorders_details !== ""
                ? this.state.disorders + "|" + this.state.disorders_details
                : this.state.disorders,
            // this.state.disorders_details
            ThyroidDisorder:
              this.state.thyroid_details !== ""
                ? this.state.thyroid + "|" + this.state.thyroid_details
                : this.state.thyroid,
            // this.state.thyroid_details
            IllDisease:
              this.state.medical_conditions === "No"
                ? "No"
                : this.state.medical_conditions +
                  "|" +
                  this.state.medical_conditions_details,
            // this.state.medical_conditions_details

            POBPatientID: localStorage.getItem("KNC"),
            POBCPMedHistoryID: this.state.id,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

        if(this.state.medication==="Yes")
        {
          if(this.state.medication_yes!=="" || this.state.medication_yes===null)
          {
          for(var i=0 ; i< this.state.medication_yes.length ;i++)
          {
          if(!this.state.medication_yes[i].id)
          {
          axios
          .post(
            "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/med_list_insert",
            {

              POBPatientID : localStorage.getItem("KNC"),
              EntityType : 52,
              MedicationPBSID : this.state.medication_yes[i].value,
              POBCPMedHistoryID: this.state.id,
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      }
     }
      if(this.state.medication_yes_temp!=="" || this.state.medication_yes_temp===null)
      {
        for(var i=0 ; i < this.state.medication_yes_temp.length ;i ++)
        {
          if (this.state.medication_yes.includes(this.state.medication_yes_temp[i]))
          {
            continue ;
          }
          else
          {
            axios
            .delete("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/med_list_insert", {
              params: { value: this.state.medication_yes_temp[i].id} ,
            })
            .then((response) => {
              console.log(response.data[0]);

            })
            .catch((error) => {
              console.log(error);
            });

          }
        }

      }
    }
    axios
    .post(
      "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/saveWorkflow",
      // "https://localhost:44338/api/saveWorkflow",

      {
        KNC: localStorage.getItem("KNC"),
        DateCompleted: new Date(),
        processID: localStorage.getItem("WorkFlowId")
      }
    )
    .then((response) => {
      if (response.data === "Success")
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

    auth.login(() => {
          this.props.history.push("/Home");
        });

    }
  };
  validate = () => {
    let nameError = "";

    const val = this.state;
    if (
      val.allergies === "" ||
      (val.allergies === "Yes" && val.allergies_reason === "") ||
      val.diabetes === "" ||
      (val.diabetes === "Other" && val.diabetes_other_details === "") ||
      val.cholesterol === "" ||
      (val.cholesterol === "Other" && val.cholesterol_details === "") ||
      val.digestive === "" ||
      (val.digestive === "Other" && val.digestive_details === "") ||
      val.heart_problems === "" ||
      (val.heart_problems === "Other" && val.heart_problems_details === "") ||
      val.breathing_problems === "" ||
      (val.breathing_problems === "Other" &&
        val.breathing_problems_details === "") ||
      val.headache === "" ||
      (val.headache === "Other" && val.headache_details === "") ||
      val.medication === "" ||
      (val.medication === "Yes" && (val.medication_yes===null || val.medication_yes==="")) ||
      val.fracture === "" ||
      (val.fracture === "Yes" && val.fracture_details === "") ||
      val.high_fever === "" ||
      (val.high_fever === "Yes" && val.high_fever_details === "") ||
      val.disorders === "" ||
      (val.disorders === "Other" && val.disorders_details === "") ||
      val.thyroid === "" ||
      (val.thyroid === "Other" && val.thyroid_details === "") ||
      val.medical_conditions === "" ||
      (val.medical_conditions === "Yes" &&
        val.medical_conditions_details === "") ||
      val.dizziness === ""
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
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Medical History</h1>
          </div>
        </div>
        <div className = "row has-form-forms">
         <div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group custom-radio-wrapper">
                  <label className="abc">
                    Do you have any known allergies?{" "}
                  </label>
                  <label style={{ fontSize: 12, color: "red" }}>
                    {this.state.allergies === "" && this.state.nameError}
                  </label>
                  <RadioGroup>
                    {this.RadiobtnStyle(
                      "Yes",
                      "Yes",
                      "allergies",
                      this.state.allergies
                    )}
                    {this.RadiobtnStyle(
                      "No",
                      "No",
                      "allergies",
                      this.state.allergies
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>


           {this.state.allergies === "Yes" &&
           <div class="row">
              <div class="col-md-12">
                <div class="form-group">
          <label className="abc">Please provide details</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.allergies === "Yes" &&
              this.state.allergies_reason === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("allergies_reason")}
            value={this.state.allergies_reason}
          />
                </div>
                </div>
                </div>
                }
                </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">Do you suffer from Diabetes?</label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.diabetes === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "diabetes",
                    this.state.diabetes
                  )}
                  {this.RadiobtnStyle(
                    "Type1",
                    "Type1",
                    "diabetes",
                    this.state.diabetes
                  )}{" "}
                  {this.RadiobtnStyle(
                    "Type2",
                    "Type2",
                    "diabetes",
                    this.state.diabetes
                  )}{" "}
                  {this.RadiobtnStyle(
                    "Other",
                    "Other",
                    "diabetes",
                    this.state.diabetes
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

          {this.state.diabetes === "Other" &&
          <div class="row">
              <div class="col-md-12">
                <div class="form-group">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.diabetes === "Other" &&
              this.state.diabetes_other_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("diabetes_other_details")}
            value={this.state.diabetes_other_details}
          />
          </div>
          </div>
          </div> }
        </div>

        <div>
        <div class="row">
          <div class="col-md-12">
          <div class="form-group">

            <label className="abc">
            Do you have any problems with your blood pressure or cholesterol?
            </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.cholesterol === "" && this.state.nameError}
          </label>
          <Dropdown
            options={cholesteroloptions}
            onChange={this.handleChange("cholesterol")}
            value={this.state.cholesterol}
            placeholder="Select an option"
          />
          </div>
          </div>
          </div>

          {this.state.cholesterol === "Other" &&
            <div class="row">
          <div class="col-md-12">
          <div class="form-group">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.cholesterol === "Other" &&
              this.state.cholesterol_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("cholesterol_details")}
            value={this.state.cholesterol_details}
          />
          </div>
          </div>
          </div> }
        </div>

        <div>
        <div class="row">
          <div class="col-md-12">
          <div class="form-group">
            <label className="abc">
            Do you experience any digestive issues, such as heartburn or
            irritable bowel syndrome (IBS)?{" "}
          </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.digestive === "" && this.state.nameError}
          </label>
          <Dropdown
            options={digestiveoptions}
            onChange={this.handleChange("digestive")}
            value={this.state.digestive}
            placeholder="Select an option"
          />
          </div>

          </div>
          </div>

        {this.state.digestive === "Other" &&
          <div class="row">
          <div class="col-md-12">
          <div class="form-group">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.digestive === "Other" &&
              this.state.digestive_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("digestive_details")}
            value={this.state.digestive_details}
          />
          </div>
          </div>
          </div>
          }
        </div>

        <div>
        <div class="row">
          <div class="col-md-12">
          <div class="form-group">
        <label className="abc">Do you have any known heart problems? </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.heart_problems === "" && this.state.nameError}
          </label>
          <Dropdown
            options={heartproblemsoptions}
            onChange={this.handleChange("heart_problems")}
            value={this.state.heart_problems}
            placeholder="Select an option"
          />
          </div>
          </div>
          </div>
          { this.state.heart_problems === "Other" &&
            <div class="row">
            <div class="col-md-12">
            <div class="form-group">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.heart_problems === "Other" &&
              this.state.heart_problems_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("heart_problems_details")}
            value={this.state.heart_problems_details}
          />
          </div>
          </div>
          </div>
          }
        </div>

        <div>

        <div class="row">
          <div class="col-md-12">
          <div class="form-group">
        <label className="abc">
            Do you ever have any problems with breathing or being short of
            breath?{" "}
          </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.breathing_problems === "" && this.state.nameError}
          </label>
          <Dropdown
            options={breathing_options}
            onChange={this.handleChange("breathing_problems")}
            value={this.state.breathing_problems}
            placeholder="Select an option"
          />
          </div>
          </div>
          </div>

         {
           this.state.breathing_problems === "Other" &&
         <div class="row">
          <div class="col-md-12">
          <div class="form-group">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.breathing_problems === "Other" &&
              this.state.breathing_problems_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("breathing_problems_details")}
            value={this.state.breathing_problems_details}
          />
          </div>
          </div>
          </div>
        }
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you experience any dizziness, vertigo, or feel like the
                  room is spinning?{" "}
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.dizziness === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "dizziness",
                    this.state.dizziness
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "dizziness",
                    this.state.dizziness
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
                  Do you suffer from headaches?{" "}
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.headache === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "headache",
                    this.state.headache
                  )}
                  {this.RadiobtnStyle(
                    "Weekly",
                    "Weekly",
                    "headache",
                    this.state.headache
                  )}{" "}
                  {this.RadiobtnStyle(
                    "Daily",
                    "Daily",
                    "headache",
                    this.state.headache
                  )}{" "}
                  {this.RadiobtnStyle(
                    "Monthly",
                    "Monthly",
                    "headache",
                    this.state.headache
                  )}
                  {this.RadiobtnStyle(
                    "Other",
                    "Other",
                    "headache",
                    this.state.headache
                  )}
                </RadioGroup>

              </div>
            </div>
          </div>

        {this.state.headache === "Other" &&
          <div class="row">
            <div class="col-md-12">
              <div class="form-group ">
          <label className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.headache === "Other" &&
              this.state.headache_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("headache_details")}
            value={this.state.headache_details}
          />
        </div>
        </div>
        </div>
        }
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Are you currently taking any medications or supplements?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.medication === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "medication",
                    this.state.medication
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "medication",
                    this.state.medication
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

        {  this.state.medication === "Yes" &&
         <div class="row">
         <div class="col-md-12">
           <div class="form-group">
        <label className="abc">Select medication if yes </label>

        <label style={{ fontSize: 12, color: "red" }}>{this.state.medication==="Yes" && (this.state.medication_yes===null || this.state.medication_yes==="" )&& this.state.nameError}</label>
        <Select 
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 8,
                        })}
        options={this.state.medications_options} 
        placeholder="select" 
        isSearchable isMulti 
        autoFocus 
        onChange={this.onChangeMultipleSelect('medication_yes')} value={this.state.medication_yes}></Select>

             </div>
             </div>
             </div>    }
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Have you previously had any bone fractures/breaks, surgeries
                  or physical trauma?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.fracture === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "fracture",
                    this.state.fracture
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "fracture",
                    this.state.fracture
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

       {this.state.fracture === "Yes" &&   <div class="row">
            <div class="col-md-12">
              <div class="form-group">
          <label className="abc">Please provide details </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.fracture === "Yes" &&
              this.state.fracture_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("fracture_details")}
            value={this.state.fracture_details}
          />
        </div>
        </div>
        </div>}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Have you ever been very ill eg. fever or spent the night in a
                  hospital
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.high_fever === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "high_fever",
                    this.state.high_fever
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "high_fever",
                    this.state.high_fever
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

         {this.state.high_fever === "Yes" && <div class="row">
            <div class="col-md-12">
              <div class="form-group">
          <label className="abc">Please provide details </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.high_fever === "Yes" &&
              this.state.high_fever_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("high_fever_details")}
            value={this.state.high_fever_details}
          />
        </div>
        </div>
        </div>}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Do you have any degenerative disorders, arthritis or
                  rheumatism?
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.disorders === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "disorders",
                    this.state.disorders
                  )}
                  {this.RadiobtnStyle(
                    "Arthritis",
                    "Arthritis",
                    "disorders",
                    this.state.disorders
                  )}
                  {this.RadiobtnStyle(
                    "Other",
                    "Other",
                    "disorders",
                    this.state.disorders
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

         {
           this.state.disorders === "Other" &&
          <div class="row">
            <div class="col-md-12">
              <div class="form-group ">
          <label className="abc">Provide Details if Other </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.disorders === "Other" &&
              this.state.disorders_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("disorders_details")}
            value={this.state.disorders_details}
          />
          </div>
          </div>
          </div>
          }
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">Do you have a thyroid disorder?</label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.thyroid === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "thyroid",
                    this.state.thyroid
                  )}
                  {this.RadiobtnStyle(
                    "Overactive",
                    "Overactive",
                    "thyroid",
                    this.state.thyroid
                  )}{" "}
                  {this.RadiobtnStyle(
                    "Underactive",
                    "Underactive",
                    "thyroid",
                    this.state.thyroid
                  )}{" "}
                  {this.RadiobtnStyle(
                    "Other",
                    "Other",
                    "thyroid",
                    this.state.thyroid
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

        { this.state.thyroid === "Other" && <div class="row">
            <div class="col-md-12">
              <div class="form-group">
          <label className="abc">Provide Details if Other </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.thyroid === "Other" &&
              this.state.thyroid_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("thyroid_details")}
            value={this.state.thyroid_details}
          />
          </div>
          </div>
          </div>}
        </div>

        <div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
                <label className="abc">
                  Have you ever had any medical conditions/diseases
                </label>
                <label style={{ fontSize: 12, color: "red" }}>
                  {this.state.medical_conditions === "" && this.state.nameError}
                </label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "medical_conditions",
                    this.state.medical_conditions
                  )}
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "medical_conditions",
                    this.state.medical_conditions
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

        {  this.state.medical_conditions === "Yes" && <div class="row">
            <div class="col-md-12">
              <div class="form-group">
          <label className="abc">Please provide details </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.medical_conditions === "Yes" &&
              this.state.medical_conditions_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("medical_conditions_details")}
            value={this.state.medical_conditions_details}
          />
          </div>
          </div>
          </div> }
        </div>


        <div class="row">
            <div class="col-md-12">
              <div class="form-group">
        <label className="abc">
            Do you have any other issues of concern?
          </label>

          <textarea
            className="form-control"
            rows="1"
            cols="5"
            onChange={this.handleChange("concerns")}
            value={this.state.concerns}
          />
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
export default CoreMedicalHistory;
