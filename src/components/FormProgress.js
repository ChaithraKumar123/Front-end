import React, { Component } from "react";
import auth from "./auth";
import {  withRouter } from "react-router-dom";
import axios from "axios";

class FormProgress extends Component {
  state = {
    CurrentForm: "" ,
    NextForm:"" ,
    Progress: "",
    Total: "",
  };

  // logout = () => {
  //   auth.logout(() => {
  //     this.props.history.push("/");
  //   });

  //   localStorage.removeItem("login");
  // };

  componentDidMount() {


    axios
    .get(
      // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/workflow", 

      "https://localhost:44338/api/workflow",
      {
        params: { value: localStorage.getItem("KNC") },
      }
    )
    .then((response) => {
    //   localStorage.setItem("CurrentForm", response.data[0].CurrentForm );
    //   localStorage.setItem("NextForm", response.data[0].NextForm);
    //   localStorage.setItem("Progress", response.data[1].Progress);
    //   localStorage.setItem("Total", response.data[1].Total);
    this.setState({
        CurrentForm: response.data[0].CurrentForm,
        NextForm: response.data[0].NextForm,
        Progress: response.data[1].Progress,
        Total: response.data[1].Total  
    })
  
    })
    .catch((error) => {
      console.log(error);
    });

}


continue = (e) =>
{
    if (e === "Core Medical History")
    {
        auth.login(() => {
            this.props.history.push("/CoreMedicalHistory");
          });
    }
    else if (e === "Lifestyle Medical History")
    {
        auth.login(() => {
            this.props.history.push("/CoreLifeStyleModule");
          });
    }

    else if (e === "Personal Details" | "Current Employment Details")
    {
        auth.login(() => {
            this.props.history.push("/patientDetails");
          });
    }
    else if (e === "Psychological Medical History")
    {
        auth.login(() => {
            this.props.history.push("/CorePsychologicalModule");
          });
    }
    else if (e === "Musculoskeletal Screen Medical History")
    {
        auth.login(() => {
            this.props.history.push("/MusculoskeletonModule");
          });
    }
    else if (e === "Red Flag Medical History")
    {
        auth.login(() => {
            this.props.history.push("/RedFlagModule");
          });
    }

    else if (e === "Family History Medical History")
    {
        auth.login(() => {
            this.props.history.push("/FamilyHistoryModule");
          });
    }

    else if (e === "Manual Handling Screen")
    {
        auth.login(() => {
            this.props.history.push("/ManualHandling");
          });
    }

    else if (e === "Industry Specific Screen")
    {
        auth.login(() => {
            this.props.history.push("/IndustrySpecificModule");
          });
    }

    else return null

}

  todoList = () => {
    return (
      <div>
          <div className = "todoList">
          <h4 style = {{"float": "left"}}>
              {this.state.CurrentForm}
              </h4> 
        <button
        style = {{"float": "right", "margin-top": "4px;"}}
          className="btn btn-primary modal-btn"
          data-modal-id="sampleModal"
          onClick={() => this.continue(this.state.CurrentForm)}
        >
          Begin
        </button>
          </div>
          <br></br>

        {/* <div className = "todoList">
         <h4 style = {{"float": "left"}}>
             {this.state.NextForm}</h4> 
        <button
        style = {{"float": "right", "margin-top": "4px;"}}
          className="btn btn-primary modal-btn"
          data-modal-id="sampleModal"
          onClick={() => this.continue(this.state.NextForm)}
        >
          Begin
        </button>
      </div> */}
      </div>

    );
  };

  render() {
    //  const { handleChange, state } = this.props;

    return (
      <div className="cont" id="MainDiv">
        <div>
          <div className="page-title lg">
            <div className="title">
              <h1>Forms and documents</h1>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: "700" }}>To Do</h4>
<br></br>
            {this.todoList()}

            {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          /> */}

            {/* <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <div>
                <Link
                  style={{ textDecoration: "inherit" }}
                  className="HomeList"
                  to="/patientDetails"
                >
                  Patient Details
                </Link>
                <Link
                  style={{ textDecoration: "inherit" }}
                  className="HomeList"
                  to="/History"
                >
                  Patient Medical History
                </Link>
              </div>
            </Container>
          </Navbar> */}
          </div>

          {/* <div className="btn-block">
                <button className=" btn-block logout"
                  onClick={this.logout}
                >
                  Logout
                </button>
              </div> */}
        </div>
      </div>
    );
  }
}
export default withRouter(FormProgress);
