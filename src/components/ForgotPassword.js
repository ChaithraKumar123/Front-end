import React, { Component } from "react";

import auth from "./auth";
import { withRouter } from "react-router-dom";
import { createForgotPassword, createConfirmPassword } from "../services/api";

// const EnterCode = (state) => (
//   <div>
//     <label className="abc">Enter the code</label>
//     <input
//       className="form-control"
//       id="pass"
//       name="pass"
//       type="password"
//       value={state.code}
//       onChange={(event) => this.setState({ code: event.target.value })}
//       //  onChange={(event) => this.setState({password:event.target.value})}
//     />
//   </div>
// );

class ForgotPassword extends Component {
  state = {
    submit: false,
    code: "",
    Newpassword: "",
    retypeNewPassword: "",
  };

  sendCode = (e) => {
    if (this.props.state.email === "") {
      window.alert("Please enter your email");
      return;
    }

    const forgotPassword = {
      schema: {
        email: this.props.state.email,
      },
    };

    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    //   },
    //   body: JSON.stringify(forgotPassword.schema),
    // };

    // try {
    //   fetch(
    //     "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/forgotpassword",
    //     requestOptions
    //   )
    //     .then((response) => response.json())
    //     .then((data) =>
    //       window.alert("Successfully sent verification code to your email."),
    //       this.setState({ submit: true })
    //     )
    //     .catch(function (data) {
    //       window.alert("Error processing your request.");
    //     });
    // } catch (error) {
    //   window.alert(error);
    // }
    createForgotPassword(forgotPassword.schema)
      .then(({ data }) => {
        window.alert("A code has been sent to your email address.");
        this.setState({ submit: true })
      })
      .catch((error) => {
        window.alert("Error processing your request.")
      })
  };

  continue = (e) => {
    e.preventDefault();
    // console.log(this.state.code);
    // console.log(this.state.Newpassword);

    if (this.state.Newpassword !== this.state.retypeNewPassword) {
      window.alert("Passwords do not match");
      return;
    }

    const confirmforgotPassword = {
      schema: {
        Email: this.props.state.email,
        Password: this.state.Newpassword,
        Code: this.state.code,
      },
    };

    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    //   },
    //   body: JSON.stringify(confirmforgotPassword.schema),
    // };

    // try {
    //   fetch(
    //     "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/confirmpassword",
    //     requestOptions
    //   )
    //     .then((response) => response.json())
    //     .catch((rejected) => {
    //       console.log(rejected);
    //       return 400;
    //     })
    //     .then((data) => {
    //       if (Number(data.httpStatusCode) === 200) {
    //         auth.login(() => {
    //           window.alert("Login using your new password");
    //           this.props.history.push("/");
    //         });
    //       } else {
    //         if (data === 400) {
    //           window.alert("failed to connect to the backend");
    //         } else {
    //           window.alert(data.message);
    //         }
    //       }
    //     });
    // } catch (error) {
    //   window.alert("failed");
    //   console.log(error);
    // }
    createConfirmPassword(confirmforgotPassword.schema)
      .then(({ data }) => {
        auth.login(() => {
          window.alert("Login using your new password");
          this.props.history.push("/");
        })
      })
      .catch((error) => {
        window.alert(error.response.data.message);
      })
  };

  render() {
    const { handleChange, state } = this.props;
    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            <h1>Reset Password</h1>
          </div>
        </div>

        <div className="row has-form">
          <label className="abc">
            {" "}
            Please enter the email address associated with your account and
            we'll email you a verification code to reset your Password.
          </label>
          <br></br>
          <div>
            <div className="errorMessage">Please do not close this screen</div>
            <div className="form-group">
              <label className="abc">Email</label>
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                placeholder="enter your email"
                value={state.email}
                onChange={handleChange("email")}
              />
              <div className="errorMessage">{state.emailError}</div>
            </div>
          </div>

          {this.state.submit ? (
            <div>
              <div>
                <div className="form-group">
                  <label className="abc">Enter the code</label>
                  <input
                    className="form-control"
                    id="pass"
                    name="pass"
                    type="password"
                    value={this.state.code}
                    onChange={(event) =>
                      this.setState({ code: event.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="form-group">
                  <label className="abc"> New Password</label>
                  <input
                    className="form-control"
                    id="pass"
                    name="pass"
                    type="password"
                    value={this.state.Newpassword}
                    onChange={(event) =>
                      this.setState({ Newpassword: event.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="form-group">
                  <label className="abc">Re-enter New password</label>
                  <input
                    className="form-control"
                    id="Repass"
                    name="pass"
                    type="password"
                    value={this.state.retypeNewPassword}
                    onChange={(event) =>
                      this.setState({ retypeNewPassword: event.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="btn-block">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={this.continue}
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="btn-block prev-back-btn">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.sendCode}
              >
                Send code
              </button>
            </div>

            // <div class="btn-block prev-back-btn">
            //   <button class="btn btn-outline-primary" onClick={this.sendCode}>
            //     Send code
            //   </button>
            // </div>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(ForgotPassword);
