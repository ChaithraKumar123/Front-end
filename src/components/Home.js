import React, { Component } from "react";
import auth from "./auth";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import axios from "axios";
import Popup from "reactjs-popup";
import CustomModal from "./CustomModal";

class Home extends Component {
  state = {
    completedList: false,
    progressList: "",
    todo: false,
    CurrentForm: "",
    Progress: "",
    Total: "",
    medHistory : false,
    medHistoryCompListSwitch : false
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
        if (response.data === "no workflow") {
          this.setState({ todo: false });
        } else {
          this.setState({
            CurrentForm: response.data[1].CurrentForm,
            Progress: response.data[1].Progress,
            Total: response.data[1].Total,
            todo: true,
          });
        }

        if (response.data[0].length !== 0) {
          this.setState({
            progressList: response.data[0],
            completedList: true,
          });

          response.data[0].forEach(element => {
              if (["Core Medical History", "Psychological Medical History", "Red Flag Medical History", "Family History Medical History"].indexOf(element.value) > -1)
              {
                this.setState({
                  medHistory :true
                })
              }            
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

  continue = (e) => {
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
    }else if (e === "Injury Details") {
      auth.login(() => {
        this.props.history.push("/painIndicator");
      });
    } else return null;
  };

  todoList = () => {
    return (
      <div>
        <div className="todoList">
          <h4 style={{ float: "left" }}>{this.state.CurrentForm}</h4>
          <button
            style={{ float: "right", "margin-top": "4px;" }}
            className="btn btn-primary modal-btn"
            data-modal-id="sampleModal"
            onClick={() => this.continue(this.state.CurrentForm)}
          >
            Begin
          </button>
        </div>
        <br></br>
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
            onClick={() => this.setState({completedList: false})}
          >
            Review
          </button>
        </div>
      </div>
    );
  };

  completedList = (e) => {
    return (
      <div>
        <div className="todoList">
          <h4 style={{ float: "left" }}>{e}</h4>
          <button
            style={{ float: "right", "margin-top": "4px;" }}
            className="btn btn-outline-primary modal-btn"
            data-modal-id="sampleModal"
            onClick={() => this.continue(e)}
          >
            Review
          </button>
        </div>
      </div>
    );
  };

  begin = () => {
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
        if (response.data == "Success") {
          this.setState({
            todo: true,
            CurrentForm: response.data.result.result.value[0].CurrentForm,
            Progress: response.data.result.result.value[1].Progress,
            Total: response.data.result.result.value[1].Total,
          });
          // auth.login(() => {
          //   this.props.history.push("/formprogress");
          // });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { handleChange, state } = this.props;

    return (
      <div>
        <div id="MainDiv">
          {/* <CustomModal></CustomModal> */}

          <div>
            <div className="page-title lg">
              <div className="title">
                <h1>Forms and documents</h1>
              </div>
            </div>
          </div>
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

          <div style={{ marginTop: "70px" }}>
            {this.state.todo ? (
              <div>
                <h4 style={{ fontWeight: "700" }}>To Do</h4>
                {this.todoList()}
              </div>
            ) : null}
            

            {this.state.completedList ? (
              <div>

                {/* {this.state.progressList.forEach(element => {
                          return this.completedList(element.value);
                        })} */}
            <h4 style={{ fontWeight: "700" }}>Completed</h4>

                {Array.from(this.state.progressList, (e, i) => {
                  if (
                    e.value === "Personal Details" ||
                    e.value === "Lifestyle Medical History" ||
                    e.value === "Musculoskeletal Screen Medical History" ||
                    e.value === "Injury Details"
                  ) {
                    return this.completedList(e.value);
                  } else if (e.value === "Current Employment Details") {
                    return null;
                  }
                })}

                {this.state.medHistory ? this.viewMedHistory("Medical History"): null}

                {/* {this.completedList(this.state.progressList)} */}
              </div>
            ) : null}

            {this.state.completedList && this.state.medHistory ? 
                        <div>
                        <h4 style={{ fontWeight: "700" }}>Completed</h4>

            {Array.from(this.state.progressList, (e, i) => {
                if (
                  e.value === "Core Medical History" ||
                  e.value === "Psychological Medical History" ||
                  e.value === "Red Flag Medical History" ||
                  e.value === "Family History Medical History"
                ) {
                  return this.completedList(e.value);
                }
              })}

        <div className="btn-block">
              <button
                className="btn btn-primary btn-block"
                onClick={() => this.setState({completedList:true})}
              >
                back
              </button>
            </div>
            
            </div>: null}
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
    );
  }
}
export default withRouter(Home);
