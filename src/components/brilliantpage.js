import React, { Component } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

class Brilliant extends Component {
  state = {
    submit: false,
    userEmPh: "",
    pass: "",
    usernameErr: "",
    usernameErrvalid: false,
    passwordErr: "",
    passwordErrvalid: false,
    authErr: ""

  };

  
  continue = (e) => {

    e.preventDefault(); 
      // UserPool.signUp(this.state.userEmPh, this.state.pass, [], null, (err,data)=> {
      //   if(err) console.error(err);
        console.log(e)
        
      // })

    };



  render() {
    return (
      <div id="brilliantdiv">
       <h1 className="brilliant" > Brilliant!</h1>
       <h4 className = "hbrilliant">To help us understand better, we need you to complete the following<br/> 
       forms. These will be passed  on to your company once we match you up</h4>
       <div className = "brcont">
       <button
          id="stepOneSubmit"
          // disabled={isDisabled}
          className="next"
          onClick={this.continue}
        >
          Continue
        </button>
       </div>
      </div>
    );
  }
}
export default Brilliant;

