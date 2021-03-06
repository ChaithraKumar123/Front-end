import React, { Component } from "react";
//import 'react-tabs/style/react-tabs.css';
import update from "react-addons-update";
import auth from "../auth";

//import {Tabs,TabPanel,TabList,Tab} from 'react-tabs'
import InjuryQuestions from "./InjuryQuestions";
import { withRouter } from "react-router-dom";
import { createPOBDetails, createSaveWorkflow, getPOBDetails } from "../../services/api";
import LocalStorageService from "../../services/localStorageService";

class BodyImageTabs extends Component {
  localStorageService = new LocalStorageService();
  constructor(props) {
    super(props);

    const people = [];

    for (let i = 0; i < this.props.state.body_area1.length; i++) {
      people.push({
        id: i,
        region_name: this.props.state.body_area1[i],
        PainRegionID: this.props.state.body_region_id1[i],
        pain_side: this.props.state.body_side1[i],
        body_orientation: this.props.state.body_orientation1[i],
        body_desc: this.props.state.body_desc1[i],
        pain_duration: "",
        pain_duration_approx: false,
        pain_firstime: "",
        pain_first_reason: "",
        pain_firstime_approx: false,
        pain_firstime_date: "",
        pain_type: "",
        pain_type_reason: "",
        pain_often: "",
        pain_often_reason: "",
        pain_worst: "",
        pain_worst_reason: "",
        pain_better: "",
        pain_better_reason: "",
        pain_scale: -1,
        pain_symp: "",
        pain_symp_hand: "",
        pain_symp_feet: "",
        pain_symp_swell: "",
        pain_symp_click: "",
        pain_symp_lock: "",
        pain_symp_weak: "",
        pain_symp_heat: "",
        pain_symp_reason: "",
        pain_treatment: "",

        //pain_treatment_reason:'',
        pain_limit_work: "",
        pain_limit_work_reason: "",
        pain_futurerisk: "",
        POBCPRegionID: this.props.state.data_id1[i] ? this.props.state.data_id1[i] : -1,
      });
    }

    this.state = {
      step1: 1,
      InjuryRegion: people,
      nameError: "",
      emailError: "",
      POBPatientID: "",
      workflowID: this.props.state.workflowID,
      workflow: this.props.state.workflow
    };
  }
  addExtra(k, n) {
    const people = [];
    for (let i = k; i < n; i++) {
      people.push({
        id: i,
        region_name: this.props.state.body_area1[i],
        PainRegionID: this.props.state.body_region_id1[i],
        pain_side: this.props.state.body_side1[i],
        body_orientation: this.props.state.body_orientation1[i],
        body_desc: this.props.state.body_desc1[i],
        pain_duration: "",
        pain_duration_approx: false,
        pain_firstime: "",
        pain_first_reason: "",
        pain_firstime_approx: false,
        pain_firstime_date: "",
        pain_type: "",
        pain_type_reason: "",
        pain_often: "",
        pain_often_reason: "",
        pain_worst: "",
        pain_worst_reason: "",
        pain_better: "",
        pain_better_reason: "",
        pain_scale: -1,
        pain_symp: "",
        pain_symp_hand: "",
        pain_symp_feet: "",
        pain_symp_swell: "",
        pain_symp_click: "",
        pain_symp_lock: "",
        pain_symp_weak: "",
        pain_symp_heat: "",
        pain_symp_reason: "",
        pain_treatment: "",

        //pain_treatment_reason:'',
        pain_limit_work: "",
        pain_limit_work_reason: "",
        pain_futurerisk: "",
        POBCPRegionID: this.props.state.data_id1[i] ? this.props.state.data_id1[i] : -1,
      });
      this.setState({
        // InjuryRegion: update(this.state.InjuryRegion, {$push: people})
        //InjuryRegion: update(this.state.InjuryRegion, {[i]:people[i]})

        InjuryRegion: update(this.state.InjuryRegion, {
          $splice: [[i, 1, people[i]]],
        }),
      });
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)

    const temp = [];
    // axios
    //   .get(
    //     // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails",
    //     "https://localhost:44338/api/POBdetails",

    //     {
    //       params: { value: localStorage.getItem("KNC") },
    //     }
    //   )
    getPOBDetails({ POBCPRegionID: this.state.workflow[3] })
      .then((response) => {
        console.log(response.data);

        for (let i = 0; i < response.data.length; i++) {
          if (!response.data[i].painRegionID) {
            continue
          }
          temp.push({
            id: i,
            region_name: response.data[i].painWhere,
            PainRegionID: response.data[i].painRegionID,
            pain_side: response.data[i].painSide,
            body_orientation: response.data[i].painOrientation,
            body_desc: response.data[i].painBodyMapDescription,
            pain_duration: response.data[i].occurredCurrent.split("T")[0] === "1900-01-01" ? null : response.data[i].occurredCurrent.split("T")[0],
            pain_duration_approx: response.data[i].occurredCurrentApprox,
            pain_firstime: response.data[i].occurrence,
            pain_first_reason: response.data[i].causes,
            pain_firstime_approx: response.data[i].occurredFirstApprox,
            pain_firstime_date: response.data[i].occurredFirst.split("T")[0] === "1900-01-01" ? null : response.data[i].occurredFirst.split("T")[0],
            pain_type: response.data[i].painType,
            pain_type_reason: response.data[i].painTypeOther,
            pain_often: response.data[i].frequency,
            pain_often_reason: response.data[i].frequencyOther,
            pain_worst: response.data[i].makesWorse,
            pain_worst_reason: response.data[i].makesWorseOther,
            pain_better: response.data[i].makesBetter,
            pain_better_reason: response.data[i].makesBetterOther,
            pain_scale: response.data[i].painScale.toString(),
            pain_symp: response.data[i].otherSymptoms,
            pain_symp_hand: response.data[i].symptomNumbness,
            pain_symp_feet: response.data[i].symptomPinsNeedles,
            pain_symp_swell: response.data[i].symptomSwelling,
            pain_symp_click: response.data[i].symptomClicking,
            pain_symp_lock: response.data[i].symptomLocking,
            pain_symp_weak: response.data[i].symptomWeakness,
            pain_symp_heat: response.data[i].symptomHeat,
            pain_symp_reason: response.data[i].symptomOther,
            pain_treatment: response.data[i].otherTreatment,

            //pain_treatment_reason:'',
            pain_limit_work: response.data[i].limitWorkLife,
            // pain_limit_work_reason:response.data[i].Limi,
            pain_futurerisk: response.data[i].futurePainRisk.toString(),
            POBCPRegionID: response.data[i].pobcpRegionID,
            patientCompleteDate: response.data[i].patientCompleteDate
          });
          this.setState({
            // InjuryRegion: update(this.state.InjuryRegion, {$push: people})
            //InjuryRegion: update(this.state.InjuryRegion, {[i]:people[i]})

            InjuryRegion: update(this.state.InjuryRegion, {
              $splice: [[i - 1, 1, temp[i]]],
            }),
            patientCompleteDate: response.data[i].patientCompleteDate
          });
        }
        // if (temp.length !== 0)
        // {
        //     this.setState({InjuryRegion:temp})
        // }
        //this.addExtra(response.data.length ,this.props.state.body_area1.length)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (input, id) => (e) => {
    if (e.target) {
      this.setState({
        InjuryRegion: update(this.state.InjuryRegion, {
          [id]: { [input]: { $set: e.target.value } },
        }),
      });
    } else {
      this.setState({
        InjuryRegion: update(this.state.InjuryRegion, {
          [id]: { [input]: { $set: e.value } },
        }),
      });
    }
  };
  handleChangeCheck = (input, id) => (e) => {
    this.setState({
      InjuryRegion: update(this.state.InjuryRegion, {
        [id]: { [input]: { $set: e.target.checked } },
      }),
    });
  };

  apicall = async (step1) => {
    const save = this.state.InjuryRegion[step1 - 1];
    let response = await createPOBDetails({
      UUID: this.localStorageService.getKNC(),
      POBCPRegionID: save.POBCPRegionID,
      PainRegionID: save.PainRegionID,
      PainSide: save.pain_side,
      PainOrientation: save.body_orientation,
      PainBodyMapDescription: save.body_desc,
      PainWhere: save.region_name,
      MainRegion: this.state.step1 === 1 ? 1 : 0,
      Causes: save.pain_first_reason,
      Frequency: save.pain_often,
      FrequencyOther: save.pain_often_reason,
      MakesBetter: save.pain_better,
      MakesBetterOther: save.pain_better_reason,
      MakesWorse: save.pain_worst,
      MakesWorseOther: save.pain_worst_reason,
      Occurrence: save.pain_firstime,
      PainScale: save.pain_scale,
      PainType: save.pain_type,
      PainTypeOther: save.pain_type_reason,
      OtherTreatment: save.pain_treatment,
      LimitWorkLife: save.pain_limit_work,
      OtherSymptoms: save.pain_symp,
      SymptomClicking: save.pain_symp_click,
      SymptomHeat: save.pain_symp_heat,
      SymptomLocking: save.pain_symp_lock,
      SymptomNumbness: save.pain_symp_hand,
      SymptomPinsNeedles: save.pain_symp_feet,
      SymptomSwelling: save.pain_symp_swell,
      SymptomWeakness: save.pain_symp_weak,
      SymptomOther: save.pain_symp_reason,
      OccurredCurrent: save.pain_duration,
      OccurredCurrentApprox: save.pain_duration_approx,
      OccurredFirst:
        save.pain_firstime === "I???ve had it before"
          ? save.pain_firstime_date
          : "1990-01-01",
      OccurredFirstApprox:
        save.pain_firstime === "I???ve had it before"
          ? save.pain_firstime_approx
          : false,
      // FuturePainRisk: save.pain_futurerisk,
    })
    if (response.data === "Success") {
      // alert("Successfully Submitted!");
      console.log(response);

      if (this.state.step1 === 1) {
        let res = await createSaveWorkflow({
          UUID: this.localStorageService.getKNC(),
          DateCompleted: new Date(),
          workflowID: this.localStorageService.getWorkFlowId()

        })
        // axios
        //   .post(
        //     // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/saveWorkflow",
        //     "https://localhost:44338/api/saveWorkflow",

        //     {
        //       KNC: localStorage.getItem("KNC"),
        //       DateCompleted: new Date(),
        //       processID: localStorage.getItem("WorkFlowId")

        //     }
        //   )

        if (res.data === "Success") {

          console.log("updated body wf")
        }
      }
    }
  };


  nextStep = async (event) => {
    window.scrollTo(0, 0)

    const { step1 } = this.state;
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      // this.apicall(step1);
      this.setState({
        step1: step1 + 1,
      }, await this.apicall(step1))
    }
  }
  prevStep = () => {
    window.scrollTo(0, 0)

    const { step1 } = this.state;
    if (step1 === 1) {
      this.props.render_main();
    } else {
      this.setState({
        step1: step1 - 1,
      });
    }
  };

  completeForm = async (event) => {
    window.scrollTo(0, 0)

    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      try {
        if (!this.state.patientCompleteDate) {
          await this.apicall(this.state.step1)
        }
        this.localStorageService.setRef(true);

        auth.login(() => {
          this.props.history.push("/Home");
        })
      }
      catch (err) {
        console.log(err)
      }
      // this.props.render_main();
    }
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";
    const val = this.state.InjuryRegion[this.state.step1 - 1];
    if (
      (val.pain_side === "") || (val.pain_duration === "") ||
      // val.pain_firstime === "" ||
      // (val.pain_firstime === "I???ve had it before" &&
      //   val.pain_firstime_date === "") ||
      val.pain_type === "" ||
      (val.pain_type === "Other" && val.pain_type_reason === "") ||
      val.pain_often === "" ||
      (val.pain_often === "Other" && val.pain_often_reason === "") ||
      val.pain_worst === "" ||
      (val.pain_worst === "Other" && val.pain_worst_reason === "") ||
      val.pain_better === "" ||
      (val.pain_better === "Other" && val.pain_better_reason === "")
      //|| val.pain_scale === "" ||
      // val.pain_symp === "" ||
      // (val.pain_symp === "Yes" &&
      //   (val.pain_symp_click === "" ||
      //     val.pain_symp_feet === "" ||
      //     val.pain_symp_hand === "" ||
      //     val.pain_symp_lock === "" ||
      //     val.pain_symp_swell === "" ||
      //     val.pain_symp_weak === "")) ||
      // val.pain_treatment === "" ||
      // val.pain_limit_work === ""
    ) {
      nameError = "This field is required";
    }
    if (nameError) {
      this.setState({ emailError, nameError });
      return false;
    } else {
      this.setState({
        nameError: "",
      });
      return true;
    }
  };
  render() {
    const { state } = this.props;
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>
              Pain indicator step {this.state.step1} of {state.body_area1.length}
            </h1>
            {this.state.step1 === 1 && (
              <p>{state.body_area1[this.state.step1 - 1]}</p>
            )}
            {this.state.step1 !== 1 && (
              <p>{state.body_area1[this.state.step1 - 1]}</p>
            )}
          </div>
        </div>

        <div className='row has-form-forms'>


          <InjuryQuestions
            InjuryRegion={this.state.InjuryRegion[this.state.step1 - 1]}
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            state={this.state}
          />

          <div className="btn-block prev-back-btn">
            {this.state.step1 >= 1 && (
              <button style={{ "min-width": "241px" }} className="btn btn-outline-primary" onClick={this.prevStep}>
                Back
              </button>
            )}
            {this.state.step1 !== state.body_area1.length && (
              <button
                style={{ "min-width": "241px" }}
                className="btn btn-primary modal-btn"
                data-modal-id="sampleModal"
                onClick={this.nextStep}
              >
                Continue
              </button>
            )}
            {this.state.step1 === state.body_area1.length && (
              <button
                style={{ "min-width": "241px" }}
                className="btn btn-primary modal-btn"
                data-modal-id="sampleModal"
                onClick={this.completeForm}
              >
                Finish
              </button>
            )}
          </div>

        </div>
      </div>

    );
  }
}

export default withRouter(BodyImageTabs);
