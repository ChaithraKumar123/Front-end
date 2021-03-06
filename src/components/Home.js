import React, { Component } from "react";
import auth from "./auth";
import { withRouter } from "react-router-dom";
import { getWorkFlow, createWorkFlow } from "../services/api";
import LocalStorageService from "../services/localStorageService";
// import Popup from "reactjs-popup";
// import CustomModal from "./CustomModal";
// import { Ouroboro } from "react-spinners-css";


class Home extends Component {
  state = {
    completedList: false,
    progressList: "",
    todo: false,
    CurrentForm: "",
    Progress: "",
    Total: "",
    medHistory: false,
    medHistoryCompListSwitch: false,
    loadingCircle: true,

  };
  localStorageService = new LocalStorageService();
  // logout = () => {
  //   auth.logout(() => {
  //     this.props.history.push("/");
  //   });

  //   localStorage.removeItem("login");
  // };


  componentDidMount() {


    if (this.localStorageService.getRef() === 'true') {
      window.location.reload();
      this.localStorageService.clearRef();
    }

    if (this.localStorageService.getKNC()) {
      this.props.switchfunc();
    }
    this.props.stepReset();

    if (this.localStorageService.getKNC() === null) {
      auth.logout(() => {
        this.props.history.push("/");
      });
    }
    this.getWorkflow();

  }

  getWorkflow = () => {
    getWorkFlow({ value: this.localStorageService.getKNC() })
      .then((response) => {
        if (response.data[0][1].length > 1 && response.data[0][1].map(function (x) { return x[6] != null })) {
          //localStorage.setItem("disablebtn", "yes")
          //  document.getElementById("myBtn").disabled = true;
        }
        // if (response.data[1][0].wfeWorkflowID === -1) {
        //   this.setState({ todo: false, loadingCircle: false });
        //   //return;
        // }
        if (response.data[0][0].length !== 0) {
          this.setState({
            CurrentForm: response.data[0][0][0], //first item in the response bag, as only the first item needs to be displayed
            // Progress: response.data[1].Progress,
            // Total: response.data[1].Total,
            todo: true,
            loadingCircle: false
          });
        }

        if (response.data[0][1].length !== 0) {
          this.setState({
            progressList: response.data[0][1],
            completedList: true,
            loadingCircle: false
          });

          response.data[0][1].forEach((element) => {
            if (
              [
                "Core Medical History",
                "Psychological Medical History",
                "Red Flag Medical History",
                "Family History Medical History",
              ].indexOf(element[12]) > -1
            ) {
              this.setState({
                medHistory: true,

              });
            }
          });
        }

        if (response.data[2]) {
          console.log(response.data[2]);

          this.setState({
            CurrentForm: response.data[2][0]["value"],
            loadingCircle: false
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loadingCircle: false })
      });
  }
  continue = (e, workflow) => {
    this.localStorageService.setWorkFlowId(workflow[0]);
    if (e === "Personal Details") {
      auth.login(() => {
        this.props.history.push({
          pathname: '/patientDetails',
          state: { workflow: workflow }
        });
      });
    } else if (e === "Injury Details") {
      auth.login(() => {
        this.props.history.push({
          pathname: '/painIndicator',
          state: { workflow: workflow }
        });
      });
    }
    else return null;
    // if (e === "Medical History") {
    //   auth.login(() => {
    //     this.props.history.push("/CoreMedicalHistory");
    //   });
    // } else if (e === "Lifestyle") {
    //   auth.login(() => {
    //     this.props.history.push("/CoreLifeStyleModule");
    //   });
    // } else 
    // } else if (e === "Current Employment Details") {
    //   // this.props.stepReset(2);

    //   auth.login(() => {
    //     this.props.history.push("/patientDetails");
    //   });
    // } else if (e === "Wellbeing") {
    //   auth.login(() => {
    //     this.props.history.push("/CorePsychologicalModule");
    //   });
    // } else if (e === "Musculoskeletal Screen Medical History") {
    //   auth.login(() => {
    //     this.props.history.push("/MusculoskeletonModule");
    //   });
    // } else if (e === "Health check") {
    //   auth.login(() => {
    //     this.props.history.push("/RedFlagModule");
    //   });
    // } else if (e === "Family History") {
    //   auth.login(() => {
    //     this.props.history.push("/FamilyHistoryModule");
    //   });
    // } else if (e === "Manual Handling") {
    //   auth.login(() => {
    //     this.props.history.push("/ManualHandling");
    //   });
    // } else if (e === "Industry") {
    //   auth.login(() => {
    //     this.props.history.push("/IndustrySpecificModule");
    //   });
    // } else if (e === "PROM NDS - Neck Disability Index") {
    //   auth.login(() => {
    //     this.props.history.push("/NDSModule");
    //   });
    // } else if (e === "PROM QBPD - Quebec Back Pain Disability Scale") {
    //   auth.login(() => {
    //     this.props.history.push("/QuebecModule");
    //   });
    // }
    // else if (e === "PROM LEFS - Lower Extremity Functional Scale") {
    //   auth.login(() => {
    //     this.props.history.push("/LEFSModule");
    //   });
    // }
    // else if (e === "PROM PSS Perceived Stress Scale") {
    //   auth.login(() => {
    //     this.props.history.push("/PSSModule");
    //   });
    // }
    // else if (e === "PROM FABQ - Fear Avoidance Belief Questionnaire") {
    //   auth.login(() => {
    //     this.props.history.push("/FABQMain");
    //   });
    // }
    // else if (e === "PROM FOSQ - Functional Outcomes of Sleep Questionnaire") {
    //   auth.login(() => {
    //     this.props.history.push("/FOSQModule");
    //   });
    // }
    // else if (e === "PROM PCS - Pain Catastrophising Scale") {
    //   auth.login(() => {
    //     this.props.history.push("/PainScaleModule");
    //   });
    // }
    // else if (e === "PROM DASS21 - Depression Anxiety Stress Scale") {
    //   auth.login(() => {
    //     this.props.history.push("/DASSModule");
    //   });
    // }
    // else if (e === "PROM DASH - Disability of the Arm, shoulder, hand") {
    //   auth.login(() => {
    //     this.props.history.push("/DASHModule");
    //   });
  };

  todoList = (e, id) => {
    return (
      <div>
        <div className="todoList">
          <label style={{ float: "left" }} className="abc">{e}</label>
          <button
            style={{ float: "right", "marginTop": "4px", "minWidth": "88px" }}

            className="btn btn-primary modal-btn"
            data-modal-id="sampleModal"
            onClick={() => this.continue(e, id)}
          >
            Begin
            </button>

        </div>
      </div>
    );
  };

  viewMedHistory = (val) => {
    return (
      <div>
        <div className="todoList">
          {/* <h4 style={{ float: "left" }}>{val}</h4> */}
          <label style={{ float: "left" }} className="abc">{val}</label>

          <button
            style={{ float: "right", "marginTop": "4px" }}
            className="btn btn-outline-primary modal-btn"
            data-modal-id="sampleModal"
            onClick={() => this.setState({ completedList: false })}
          >
            Review
          </button>
        </div>
      </div>
    );
  };

  completedList = (e, id) => {
    return (
      <div key={id}>
        <div className="todoList">
          {/* <h4  style={{ float: "left" }}>{e}</h4> */}
          <label style={{ float: "left" }} className="abc">{e}</label>

          <button
            style={{ float: "right", "marginTop": "4px" }}
            className="btn btn-outline-primary modal-btn"
            data-modal-id="sampleModal"
            onClick={() => this.continue(e, id)}
          >
            Review
          </button>
        </div>
      </div>
    );
  };

  begin = () => {
    this.setState({
      loadingCircle: true
    })
    let body = {
      UUID: this.localStorageService.getKNC(),
      DateCompleted: new Date(),
    }
    createWorkFlow(body)
      .then((response) => {
        this.getWorkflow()
        // this.setState({
        //   todo: true,
        //   CurrentForm: response.data.result.result.value[0][0][0],
        //   Progress: response.data.result.result.value[1].Progress,
        //   Total: response.data.result.result.value[1].Total,
        // });
        // auth.login(() => {
        //   this.props.history.push("/formprogress");
        // });
        // console.log(this.state.todo);
        // this.setState({
        //   loadingCircle: false
        // })
      })
      .catch((error) => {
        this.setState({
          loadingCircle: false
        })
        console.log(error);
      });
  };

  render() {
    const { loadingCircle } = this.props;

    return (
      <div>
        <div id="MainDiv">
          {/* <CustomModal></CustomModal> */}
          {this.state.loadingCircle === true ? loadingCircle : null}
          <div>
            <div className="page-title lg">
              <div className="title">
                <h1>Your Health Manager</h1>
              </div>
            </div>
          </div>
          {this.state.CurrentForm.length === 0 ?
            <div className="row has-form-forms">
              <label className="abc">
                Thank you for completing your injury details! We look forward to being able to help you with your injury soon.  You will have the opportunity to discuss any other questions or information about your injury during your appointment with your practitioner.
                </label>
            </div> :
            <div className="row has-form-forms">
              <label className="abc">
                To ensure we can provide you with the best quality care, please answer the following questions.
            </label>
            </div>}
          <div>
            <div className="row has-form-forms">
              {this.state.todo ? null : (
                <div style={{ marginBottom: "65px" }}>
                  <h4 style={{ fontWeight: "700" }}>
                    Have a new injury you need to see us about?
                </h4>


                  <br></br>
                  <label className="abc" style={{ float: "left" }}>New Injury</label>
                  <button
                    id="myBtn"
                    style={{ float: "right", "marginTop": "4px", "minWidth": "88px" }}

                    className="btn btn-primary modal-btn"
                    data-modal-id="sampleModal"
                    onClick={() => this.begin()}
                  >
                    Begin
            </button>
                </div>
              )}

              <div>
                {this.state.todo ? (
                  <div style={{ marginBottom: "10px" }}>
                    <label className="headlinetwo">To Do</label>

                    {/* {this.todoList()} */}
                    {this.todoList(this.state.CurrentForm[13], this.state.CurrentForm)}
                  </div>
                ) : null}

                {this.state.completedList ? (
                  <div style={{ marginTop: "10px" }}>
                    <h4 style={{ fontWeight: "700" }}>Completed</h4>

                    {Array.from(this.state.progressList, (e, i) => {
                      if (
                        e[13] === "Personal Details" ||
                        e[13] === "Lifestyle" ||
                        e[13] === "Musculoskeletal Screen Medical History" ||
                        e[13] === "Injury Details"
                      ) {
                        return this.completedList(e[13], e);
                      } else if (e[12] === "Current Employment Details") {
                        return null;
                      }
                    })}

                    {this.state.medHistory
                      ? this.viewMedHistory("Medical History")
                      : null}
                  </div>
                ) : "" /* (
                    <div style={{ marginTop: "10px" }}>
                      <h4 style={{ fontWeight: "700" }}>Completed</h4>

                      {Array.from(this.state.progressList, (e, i) => {
                        if (
                          e[13] === "Medical History" ||
                          e[13] === "Wellbeing" ||
                          e[13] === "Health check" ||
                          e[13] === "Family History"
                        ) {
                          return this.completedList(e[13], e[0]);
                        }
                      })}

                      <div className="btn-block">
                        <button
                          style={{ "position": "relative" }}

                          className="btn btn-primary btn-block"
                          onClick={() => this.setState({ completedList: true })}
                        >
                          back
                  </button>
                      </div>
                    </div>
                    )*/}
                {/* 
                  {/* 
                {/* 
            {this.state.completedList && this.state.medHistory ? 
                      : null} */}
              </div>
            </div>
            {/* 
              {/* 
            {/* 
      <div id="MainDiv">
        <div>
          <div className="page-title lg">
            <div className="title">
              <h1>Forms and documents</h1>
            </div>
          </div>
        </div>
      </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
