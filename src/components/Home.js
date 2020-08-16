import React, { Component } from "react";
import auth from "./auth";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import axios from "axios";
import Popup from "reactjs-popup";
import CustomModal from "./CustomModal";
import { Ouroboro } from "react-spinners-css";


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
    loadingCircle: false,

  };

  // logout = () => {
  //   auth.logout(() => {
  //     this.props.history.push("/");
  //   });

  //   localStorage.removeItem("login");
  // };

  componentDidMount() {
    this.props.stepReset("reset");

    axios
      .get(
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/workflow",

        // "https://localhost:44338/api/workflow",
        {
          params: { value: localStorage.getItem("KNC") },
        }
      )
      .then((response) => {
        if (response.data[1][0].wfeWorkflowID === -1) {
          this.setState({ todo: false });
          return;
        }
        if (response.data[0][0].length !== 0) {
          this.setState({
            CurrentForm: response.data[0][0],
            // Progress: response.data[1].Progress,
            // Total: response.data[1].Total,
            todo: true,
          });
        }

        if (response.data[0][1].length !== 0) {
          this.setState({
            progressList: response.data[0][1],
            completedList: true,
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
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // let visited = localStorage["alreadyVisited"];
    // if(visited) {
    //      this.setState({ popup: false })
    //      //do not view Popup
    // } else {
    //      //this is the first time
    //      localStorage["alreadyVisited"] = true;
    //      this.setState({ popup: true});
    // }
    //   axios
    //   .get(
    //     "https://localhost:44338/api/workflow",
    //     {
    //       params: { value: localStorage.getItem("KNC") },
    //     }
    //   )
    //   .then((response) => {
    //     localStorage.setItem("CurrentForm", response.data[0].CurrentForm );
    //     localStorage.setItem("NextForm", response.data[0].NextForm);
    //     localStorage.setItem("Progress", response.data[1].Progress);
    //     localStorage.setItem("Total", response.data[1].Total);
    //       // CurrentForm: response.data[0].CurrentForm  ,
    //       // NextForm: response.data[0].NextForm,
    //       // Progress: response.data[1].Progress,
    //       // Total: response.data[1].Total
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // BeginPopUp = () => {
  //   return(
  //   <div>
  //     <Popup position="right center">
  //     <div>Popup content here !!</div>
  //     <button
  //           style={{ float: "right", "margin-top": "35px;" }}
  //           className="btn btn-primary modal-btn"
  //           data-modal-id="sampleModal"
  //           onClick={() => this.setState({popup : false})}
  //         >
  //           Begin
  //         </button>
  //   </Popup>
  //   </div>
  //   )
  // }

  continue = (e, id) => {
    localStorage.setItem("WorkFlowId", id) 
    if (e === "Core Medical History") {
      auth.login(() => {
        this.props.history.push("/CoreMedicalHistory");
      });
    } else if (e === "Lifestyle Medical History") {
      auth.login(() => {
        this.props.history.push("/CoreLifeStyleModule");
      });
    } else if (e === "Personal Details") {
      auth.login(() => {
        this.props.history.push("/patientDetails");
      });
    } else if (e === "Current Employment Details") {
      // this.props.stepReset(2);

      auth.login(() => {
        this.props.history.push("/patientDetails");
      });
    } else if (e === "Psychological Medical History") {
      auth.login(() => {
        this.props.history.push("/CorePsychologicalModule");
      });
    } else if (e === "Musculoskeletal Screen Medical History") {
      auth.login(() => {
        this.props.history.push("/MusculoskeletonModule");
      });
    } else if (e === "Red Flag Medical History") {
      auth.login(() => {
        this.props.history.push("/RedFlagModule");
      });
    } else if (e === "Family History Medical History") {
      auth.login(() => {
        this.props.history.push("/FamilyHistoryModule");
      });
    } else if (e === "Manual Handling Screen") {
      auth.login(() => {
        this.props.history.push("/ManualHandling");
      });
    } else if (e === "Industry Specific Screen") {
      auth.login(() => {
        this.props.history.push("/IndustrySpecificModule");
      });
    } else if (e === "Injury Details") {
      auth.login(() => {
        this.props.history.push("/painIndicator");
      });
    } else return null;
  };

  todoList = (e, id) => {
    return (
      <div>
        <div className="todoList">
          <h4 style={{ float: "left" }}>{e}</h4>
          <button
            style={{ float: "right", "margin-top": "4px;" }}
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
          <h4 style={{ float: "left" }}>{val}</h4>
          <button
            style={{ float: "right", "margin-top": "4px;" }}
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
      <div>
        <div className="todoList">
          <h4 style={{ float: "left" }}>{e}</h4>
          <button
            style={{ float: "right", "margin-top": "4px;" }}
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
      loadingCircle : true
    })
    axios
      .post(
        // "https://localhost:44338/api/workflow",
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/workflow",

        {
          KNC: localStorage.getItem("KNC"),
          DateCompleted: new Date(),
        }
      )
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            todo: true,
            CurrentForm: response.data.result.result.value[0][0],
            Progress: response.data.result.result.value[1].Progress,
            Total: response.data.result.result.value[1].Total,
          });
          // auth.login(() => {
          //   this.props.history.push("/formprogress");
          // });
          console.log(this.state.todo);
          this.setState({
            loadingCircle : false
          })
        } else {
          this.setState({
            loadingCircle : false
          })
          console.log(response);

        }
      })
      .catch((error) => {
        this.setState({
          loadingCircle : false
        })
        console.log(error);
      });
  };

  render() {
    const { handleChange, state, loadingCircle } = this.props;

    return (
      <div>
        <div id="MainDiv">
          {/* <CustomModal></CustomModal> */}
          {this.state.loadingCircle === true ? loadingCircle : null}
          <div>
            <div className="page-title lg">
              <div className="title">
                <h1>Forms and documents</h1>
              </div>
            </div>
          </div>
          <div className = "row has-form-forms">
          {this.state.todo ? null : (
            <div>
              <h4
                style={{
                  float: "left",
                  color: "#092C4C",
                  "font-family": "'Poppins', sans-serif",
                }}
              >
                <h4 style={{ fontWeight: "700" }}>
                  Have a new injury you need to see us about?
                </h4>
                New Complaint
              </h4>
              <br></br>
              <br></br>
              <button
                style={{ float: "right", "margin-top": "35px;" }}
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
              <div>
                <h4 style={{ fontWeight: "700" }}>To Do</h4>

                {/* {this.todoList()} */}
                {Array.from(this.state.CurrentForm, (e, i) => {
                  return this.todoList(e[12],e[0]);
                })}
              </div>
            ) : null}

            {this.state.completedList ? (
              <div>
                <h4 style={{ fontWeight: "700" }}>Completed</h4>

                {Array.from(this.state.progressList, (e, i) => {
                  if (
                    e[12] === "Personal Details" ||
                    e[12] === "Lifestyle Medical History" ||
                    e[12] === "Musculoskeletal Screen Medical History" ||
                    e[12] === "Injury Details"
                  ) {
                    return this.completedList(e[12], e[0]);
                  } else if (e[12] === "Current Employment Details") {
                    return null;
                  }
                })}

                {this.state.medHistory
                  ? this.viewMedHistory("Medical History")
                  : null}
              </div>
            ) : (
              <div>
                <h4 style={{ fontWeight: "700" }}>Completed</h4>

                {Array.from(this.state.progressList, (e, i) => {
                  if (
                    e[12] === "Core Medical History" ||
                    e[12] === "Psychological Medical History" ||
                    e[12] === "Red Flag Medical History" ||
                    e[12] === "Family History Medical History"
                  ) {
                    return this.completedList(e[12], e[0]);
                  }
                })}

                <div className="btn-block">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => this.setState({ completedList: true })}
                  >
                    back
                  </button>
                </div>
              </div>
            )}
            {/* 
            {this.state.completedList && this.state.medHistory ? 
                      : null} */}
          </div>
        </div>
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
    );
  }
}
export default withRouter(Home);
