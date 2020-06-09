import React, { Component } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import auth from "./auth";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

class Brilliant extends Component {
  state = {};

  continue = (e) => {
    e.preventDefault();
    // UserPool.signUp(this.state.userEmPh, this.state.pass, [], null, (err,data)=> {
    //   if(err) console.error(err);
    auth.login(() => {
      this.props.history.push("/patientDetails");
    });

    // })
  };

  render() {
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Brilliant!</h1>
          </div>
        </div>
        <div>
          <h4>
            To help us understand better, we need you to complete the following
            forms. These will be passed on to your company once we match you up.
          </h4>
          <div>
            <div className="btn-block prev-back-btn">
              <button
                className="btn btn-primary modal-btn"
                data-modal-id="sampleModal"
                id="stepOneSubmit"
                onClick={this.continue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Brilliant);
