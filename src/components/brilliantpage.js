import React, { Component } from "react";

import auth from "./auth";
import { withRouter } from "react-router-dom";
import LocalStorageService from "../services/localStorageService";

class Brilliant extends Component {
  state = {};
  localStorageService = new LocalStorageService();
  continue = (e) => {
    e.preventDefault();
    // UserPool.signUp(this.state.userEmPh, this.state.pass, [], null, (err,data)=> {
    //   if(err) console.error(err);
    auth.login(() => {
      this.props.history.push("/Home");
    });

    // })
  };

  render() {
    // const { handleChange, state } = this.props;
    let tempToken = this.localStorageService.getConfToken();
    if (tempToken !== null) {
      return (
        <div id="MainDiv">
          <div className="page-title lg">
            <div className="title">
              <h1>Success!</h1>
            </div>
          </div>
          <div className="row has-form">
            <h4
              style={{
                "text-align": "center",
                color: "#092C4C",
                "font-family": "'Poppins', sans-serif",
              }}
            >
              Your account has been confirmed.
              <br /> <br />
              Click continue to complete the registration process.
            </h4>
            <br></br>
            <div>
              <div>
                <button
                  style={{ "position": "relative", "margin-top": "100%" }}

                  className="btn btn-primary btn-block"
                  onClick={this.continue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h4>Unauthorized access</h4>;
    }
  }
}
export default withRouter(Brilliant);
