import React, { Component } from "react";
import auth from "./auth";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

class Home extends Component {
  state = {};

  logout = () => {
    auth.logout(() => {
      this.props.history.push("/");
    });

    localStorage.removeItem("login");
  };

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
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />

          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <div>
                <Link
                  style={{ textDecoration: "inherit" }}
                  className="create"
                  to="/patientDetails"
                >
                  Patient Details
                </Link>
                <Link
                  style={{ textDecoration: "inherit" }}
                  className="create"
                  to="/History"
                >
                  Patient Medical History
                </Link>
              </div>
            </Container>
          </Navbar>
        </div>

        <div className="btn-block">
                <button className=" btn-block logout"
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
