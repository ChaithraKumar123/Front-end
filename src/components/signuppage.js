import React, { Component } from "react";

import {
  withRouter,
} from "react-router-dom";
import auth from "./auth";
import axios from "axios";

var randomToken = require("random-token");
const Errormsg = () => <div className="errorMessage">Missing or invalid field</div>;

const thankyou = (email) => (
  <div id="MainDiv">
    <div className="page-title lg">
      <div className="title">
        <p>Work Healthy Australia</p>
      </div>
    </div>
    <h4
      style={{
        "text-align": "center",
        color: "#092C4C",
        "font-family": "'Poppins', sans-serif",
      }}
    >
      Thanks!
      <br /> <br />
    </h4>
    <h4
      style={{
        "text-align": "center",
        color: "#092C4C",
        "font-family": "'Poppins', sans-serif",
      }}
    >
      We've sent an email to {email}. <br />
      Please confirm your account by clicking the link in the email.
    </h4>
  </div>
);

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      retypePassword: "",
      submit: false,
      checked: false,
      passwordErr: "",
      passwordErrvalid: false,
      renderThankyou: false,
      closed: false,
      modaldisplay: false,
      loadingCircle : false,
      cognitoErr: ""
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  toSend = require("./userSchema.json");
  changeLoadingCircle = () => {
    this.setState({ loadingCircle: true });
    return true;
  }
  continue = (e) => {
    e.preventDefault();
    this.setState({ cognitoErr: "" });

    var isvalid = this.passVal();
    if (
      isvalid &&
      this.props.state.givenNameisValid &&
      this.props.state.surNameisValid &&
      this.props.state.emailError !== "Invalid email" &&
      this.props.state.mobileNumberisValid &&
      this.props.state.email !== "" &&
      this.state.checked !== false &&
      this.state.password === this.state.retypePassword
    ) {
      this.changeLoadingCircle();

      const Signupschema = {
        schema: {
          Password: this.state.password,
          email: this.props.state.email,
          name: this.props.state.givenName
        },
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        },
        body: JSON.stringify(Signupschema.schema),
      };

      try {
        fetch(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/register",
          // "https://localhost:44338/api/register",
          requestOptions
        )
        .then((response) => response.json())
          .catch(function (data) {
            this.setState({
              loadingCircle : false,
            });
            // window.alert(data);
          })
          .then((data) => this.authenticate(data));
      } catch (error) {
        this.setState({
          loadingCircle : false,
          cognitoErr: error
        });
        // window.alert(error);
      }
    } else if (this.state.password !== this.state.retypePassword) {
      this.setState({
        passwordErr: "Password does not match",
        loadingCircle : false

      });
    } else this.setState({ submit: true, loadingCircle : false });
  };

  // continue = (e) => {
  //   auth.login(() => {
  //     this.props.history.push("/success");
  //   });
  // };

  back = (e) => {
    auth.login(() => {
      this.props.history.push("/");
    });
  };

  authenticate = (e) => {
    console.log(e);

    if (e.httpStatusCode === 200) {
      this.toSend.schema.FirstName = this.props.state.givenName;
      this.toSend.schema.LastName = this.props.state.surName;
      this.toSend.schema.MiddleNames = this.props.state.middleName;
      this.toSend.schema.Mobile = this.props.state.mobileNumber;
      this.toSend.schema.Email = this.props.state.email;
      this.toSend.schema.DateOfBirth = new Date();
      this.toSend.schema.EmpStartDate = new Date();
      this.toSend.schema.LastVisit = new Date();
      this.toSend.schema.CreateDate = new Date();
      this.toSend.schema.KNC = e.userSub;

      this.props.kncset(e.userSub);
      localStorage.setItem("KNC", e.userSub);

      //  this.setState({KNC: e.userSub})

      console.log(this.toSend.schema);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        },
        body: JSON.stringify(this.toSend.schema),
      };

      try {
        fetch(
          "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/v1/personaldetails",
                    // "https://localhost:44338/v1/personaldetails",

          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            if (Number(data.httpStatusCode) === 200) {

              axios
              .post(
                // "https://localhost:44338/api/workflowNewreg",
                "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/workflowNewreg",
        
                {
                  KNC: localStorage.getItem("KNC"),
                  DateCompleted: new Date(),
                }
              )
              .then((response) => {
                if (response.data === "Success") {
                  console.log(response);
                }
              })
              .catch((error) => {
                console.log(error);
              });
              localStorage.setItem("isAuth", true);

              localStorage.setItem("confToken", randomToken(16));
              this.setState({
                renderThankyou: true,
                loadingCircle : false
              });
            } else {
              // window.alert(data.message);
              this.setState({
                loadingCircle : false
              });
            }
          });
      } catch (error) {
        this.setState({
          loadingCircle : false,
          cognitoErr: error

        });
        console.log(error);
      }
    } else {
      this.setState({
        loadingCircle : false,
        cognitoErr: e.message
      });
      // window.alert(e.message);
    }
  };

  passVal = (e) => {
    if (this.state.password.length === 0) {
      this.setState({
        passwordErr: "password required",
      });
      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        passwordErr: "8 characters",
      });
      return false;
    } else {
      this.setState({ passwordErrvalid: true, passwordErr: "" });
      return true;
    }
  };
  //   continue = (e) => {
  //     e.preventDefault();
  //     this.props.nextStep();
  //   };
  termsAgree = (e) => {
    console.log(e.target.checked);
    this.setState({checked : ! this.state.checked});
  };
  
  termslink = (e) => {
    this.setState({modaldisplay: !this.state.modaldisplay });
  };


  componentDidUpdate() {
    if (this.state.checked === false && this.state.closed === true) {
      this.setState({
        closed: false,
      });
    }
  }
  handleCloseModal() {
    this.setState({
      closed: !this.state.closed,
    });
  }

  termsmodal = () => {
    return (
      <div>
      <div style={{ fontFamily: "Roboto, sans-serif", marginTop : "10px" }}>
        By clicking the checkbox, you confirm the information provided
        above is correct and agree to the following:
        <br />
        <br />
        You have been provided with a copy of the 
        {/* <a href="https://wha-consentform.s3-ap-southeast-2.amazonaws.com/WHA_Privacy_Policy_Public_V07a.pdf" download="WHA_Privacy_Policy_Public_V07a.pdf">Download Your Expense Report</a> */}
        <a rel="noopener noreferrer" href={"https://wha-consentform.s3-ap-southeast-2.amazonaws.com/WHA_Privacy_Policy_Public_V07a.pdf"} target="_blank" download={"WHA_Privacy_Policy_Public_V07a.pdf"}> Work Healthy Australia Privacy Policy</a>
        , and you agree to the handling of your personal
        information by Work Healthy Australia in accordance with that
        Policy, including the ways in which Work Healthy Australia may
        collect and use your personal information, and may disclose your
        personal information to the third parties specified in that
        Policy.
        <br />
        <br />
        Due to the duty of care that any company has with respect to
        your health and safety, it may be necessary for the Work Healthy
        Australia provider to coordinate with the relevant persons at
        this workplace. You therefore consent to allow the Work Healthy
        Australia provider to discuss, disclose or share your health
        information and other personal information relevant to your
        prospective job performance at this workplace with any of the
        following persons that are responsible for your health care or
        safety: other health and medical providers, OHS staff, HR staff,
        Rehabilitation Coordinators, and supervisors and managers at
        this workplace
      </div>
      <br />
      <br />
    </div>
    )
  }

  render() {
    const { handleChange, state, loadingCircle } = this.props;

    if (!this.state.renderThankyou) {
      return (
        <div>
            <div id="MainDiv">
            {this.state.loadingCircle === true ? loadingCircle : null}

              <div className="page-title lg">
                <div className="title">
                <h1 style = {{float : "left"}}> Let's create your account</h1>
                {/* <img style = {{float : "right", marginLeft : "200px",  marginBottom: "-4px", marginTop: "-19px"}} src={require("./whitelogo.png")} alt = "" height = "60px"/>    */}
                  {/* <p> Let's create your account</p> */}
                </div>
              </div>
              <div className="contentSpacing">
                <div className="row has-form">
                  <div>
                    <div className="form-group">
                      <label className="abc">Given Name</label>
                      <input
                        className="form-control"
                        id="givenName"
                        type="text"
                        value={state.givenName}
                        onChange={handleChange("givenName")}
                      />
                      {this.state.submit === true && state.givenName === "" ? (
                        <div className="errorMessage">This field is required</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="abc">
                        Middle Name <span className="optional">Optional</span>{" "}
                      </label>
                      <input
                        className="form-control"
                        id="middleName"
                        type="text"
                        value={state.middleName}
                        onChange={handleChange("middleName")}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="abc">Surname</label>
                      <input
                        className="form-control"
                        id="surName"
                        type="text"
                        value={state.surName}
                        onChange={handleChange("surName")}
                      />
                      {this.state.submit === true && state.surName === "" ? (
                        <div className="errorMessage">This field is required</div>
                      ) : null}

                      {/* <div className="errorMessage">{state.surNameError}</div> */}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="abc">Phone Number</label>
                      <input
                        className="form-control"
                        id="mobileNumber"
                        type="text"
                        value={state.mobileNumber}
                        onChange={handleChange("mobileNumber")}
                      />
                      {/* <Errormsg arg = {state.mobileNumber}></Errormsg> */}
                      {/* <div className="errorMessage">{state.mobileNumberError}</div> */}
                      {this.state.submit === true &&
                      state.mobileNumber === "" ? (
                        <div className="errorMessage">This field is required</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="abc">Email</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        value={state.email}
                        onChange={handleChange("email")}
                      />
                      {/* <Errormsg arg = {state.email}></Errormsg> */}
                      <div className="errorMessage">{state.emailError}</div>
                      {this.state.submit === true && state.email === "" ? (
                        <div className="errorMessage">This field is required</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="abc">Password</label>
                      <input
                        className="form-control"
                        placeholder = "8 characters"
                        id="pass"
                        name="pass"
                        type="password"
                        value={this.state.password}
                        onChange={(event) =>
                          this.setState({ password: event.target.value })
                        }
                        //  onChange={(event) => this.setState({password:event.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="abc">Re-enter password</label>
                      <input
                        className="form-control"
                        id="Repass"
                        name="pass"
                        type="password"
                        value={this.state.retypePassword}
                        onChange={(event) =>
                          this.setState({ retypePassword: event.target.value })
                        }
                        //  onChange={(event) => this.setState({password:event.target.value})}
                      />
                      <div className="errorMessage">
                        {this.state.passwordErr}
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="custom-radio square">
                    <input
                    style = {{float: "left"}}
                      type="checkbox"
                      className="custom-input"
                      checked={this.state.checked}
                     onChange={this.termsAgree}
                    />
                    <span></span>
                  </div>
                  <div style = {{float : "right" , marginRight: "80px"}}>
                  I agree to <a style = {{"cursor":"pointer"}} onClick = {this.termslink}><b style = {{color: "#563070"}}>Work Healthy Australia's terms</b></a>

                  </div>

                  </div>
                
                  {this.state.modaldisplay ? this.termsmodal(): null}

                  {this.state.submit ? <Errormsg /> : null}
                      <div className="errorMessage">{this.state.cognitoErr}</div>
                  <div className="btn-block prev-back-btn">
                    <button
                      className="btn btn-outline-primary"
                      onClick={this.back}
                    >
                      Back
                    </button>
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
        </div>
      );
    } else {
      return thankyou(this.props.state.email);
    }
  }
}
export default withRouter(Signup);
