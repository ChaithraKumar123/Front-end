import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import "react-dropdown/style.css";
import auth from "../auth";
import Select from "react-select";

// const family_disorder_options = [
//   "No",
//   "Cancer",
//   "Diabetes",
//   "Heart Condition",
//   "Lung Disease",
//   "Mental Illness",
//   "Stroke",
//   "Thyroid Problems",
//   "Don’t know",
//   "Other",
// ];

const family_disorder_options = [
  { value: 'No', label: 'No' },
  { value: 'Cancer', label: 'Cancer' },
  { value: 'Diabetes', label: 'Diabetes' },
  { value: 'Heart Condition', label: 'Heart Condition' },
  { value: 'Mental Illness', label: 'Mental Illness' },
  { value: 'Stroke', label: 'Stroke' },
  { value: 'Thyroid Problems', label: 'Thyroid Problems' },
  { value: 'Don’t know', label: 'Don’t know' },
  { value: 'Other', label: 'Other' }
]

class FamilyHistoryModule extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      family_disorder: "",
      family_disorder_details: "",
      POBPatientID: "",
      id: -1,
      other: "",
      loadingCircle: false
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
          family_disorder: response.data[0].familyHistory.includes("|")
            ? JSON.parse(response.data[0].familyHistory.split("|")[0])
            : JSON.parse(response.data[0].familyHistory),
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


  changeLoadingCircle = (flag) => {
    this.setState({ loadingCircle: flag });
    return true;
  };


  completeForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(this.initialState);
      this.changeLoadingCircle(true)


      axios
        .post(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails",
          // "https://localhost:44338/api/medhistorydetails",

          {
            ModuleName: "Family History",
            FamilyHistory:
              this.state.family_disorder_details !== ""
                ? JSON.stringify(this.state.family_disorder) +
                  "|" +
                  this.state.family_disorder_details
                : JSON.stringify(this.state.family_disorder),
            //family_disorder_details:this.state.family_disorder==="Other"?this.state.family_disorder.split('-')[1]:"",
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
            this.changeLoadingCircle(false)

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
      val.family_disorder === "" ||
      (val.family_disorder === "Other" && val.family_disorder_details === "")
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

  onChangeMultipleSelect = input=>(event) => {

    try{
      if (event[0].value === "Other"  ){
        this.setState({other :"Other"})
      }

    }
    catch{}
    try {
      if (event.length === 0){
        this.setState({other :""})

      }
    }
     catch{}

    if (event!==null)
      {
      this.setState({
          [input]: event,
      });
    }

    else {
      this.setState ({
        [input]: null,
        other : ""
      })
    }
  }

  render() {
    const {Leftarrow, loadingCircle} = this.props.pageProps

    return (
      <div id="MainDiv">
        {this.state.loadingCircle === true ? loadingCircle : null}

        <div className="page-title lg" style = {{    marginBottom: "80px"}}>
          <div className="title">
          {Leftarrow("/")}
          <div style = {{float: "right", marginLeft : "15px"}}>
          <h1>Family History</h1>
            </div>
          </div>
        </div>
        <div class="row has-form-forms">

        <div>
          <div class="col-md-12">
          <div class="form-group ">
          <br></br>
          <label className="abc" style = {{marginBottom: "10px"}}>
            Has anyone in your family had or suffered from cancer, diabetes,
            heart disease, lung disease, mental illness, stroke or thyroid
            problems?{" "}
          </label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.family_disorder === "" && this.state.nameError}
          </label>
          {/* <Dropdown
            options={family_disorder_options}
            onChange={this.handleChange("family_disorder")}
            value={this.state.family_disorder}
            placeholder="Select an option"
          /> */}

          <br></br>

          <Select 
          theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          })}
          options={family_disorder_options} 
          placeholder="select" 
          // menuPlacement="top"
          isSearchable
          isMulti 
          onChange={this.onChangeMultipleSelect('family_disorder')} value={this.state.family_disorder}></Select>

           </div>
        </div>
        </div>
          {this.state.other === "Other" && <div>
          <div class="row">
          <div class="col-md-12">
          <div class="form-group ">
          <label style = {{"margin-left": "15px"}} className="abc">Provide Details if Other</label>
          <label style={{ fontSize: 12, color: "red" }}>
            {this.state.other === "Other" &&
              this.state.family_disorder_details === "" &&
              this.state.nameError}
          </label>
          <textarea
            style = {{"width": "473px", "margin-left": "12px"}}
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

        <div>
          <button
          style = {{"position": "relative",   "margin-top": "100%"}}
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
export default FamilyHistoryModule;
