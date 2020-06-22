import React, { Component } from "react";
import auth from "./auth";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";

class Home extends Component {
  state = {};


logout = () => {
    auth.logout(() => {
        this.props.history.push("/");
      })

      localStorage.removeItem("login")
}

  render() {
    const { handleChange, state } = this.props;

    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Home</h1>
          </div>
        </div>
        <h3>User</h3>
        <div>
          <div>
            <Link className="create" to="/patientDetails">
              Patient Details
            </Link> <br/>
            <Link className="create" to="/History">
              Patient Medical History
            </Link>
          </div>
        </div>

        <div>
          <button
            onClick={this.logout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
