import React, { Component } from "react";
// import UserPool from "../UserPool";
// import auth from "./auth";
import { withRouter } from "react-router-dom";
// import { Ouroboro } from "react-spinners-css";

// const IsLoading = () => (
//   <div id="loadingCiricle">
//     <Ouroboro color="#F04F1D" size={200} />
//   </div>
// );

class Landingpage extends Component {
  state = {};

  continue = (e) => {
    e.preventDefault();
  };

  render() {
    const { loginswitch } = this.props;
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Your Health Manager</h1>
          </div>
        </div>
        <div className="row has-form-forms">
          <div style={{ textAlignLast: "center" }}>
            <img src={require("./workhealthy.jfif")} height="150px" />
          </div>
          <h4
            style={{
              textAlign: "center",
              color: "#092C4C",
              fontFamily: "'Poppins', sans-serif",
              marginTop: "60px",
            }}
          >
            Welcome to Your Health Manager, this is an application to manage
            your information for your interactions with Work Healthy Australia
            Providers. <br /> <br />
            We make every effort to protect your data and privacy, your
            information is stored here in Australia with strict security
            protocols.
          </h4>

          <div style={{ marginTop: "60px" }}>
            <div className="btn-block">
              <button
                className="btn btn-primary btn-block"
                onClick={() => loginswitch()}
              >
                Login
              </button>
            </div>
            <div className="btn-block">
              <button
                className="btn btn-primary btn-block"
                onClick={() => (window.location.href = "/Signup")}
              >
                Create your account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Landingpage);
