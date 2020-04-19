import React, { Component } from "react";
import "../App.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import "react-dropdown/style.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

class Main extends Component {
  state = {
    step: 1,
    //step1
    titleOpt: "", titleOptError: "",
    givenName: "", givenNameError: "",  givenNameisValid : false,
    surName: "", surNameError: "",  surNameisValid : false,
    middleName: "",
    DateofB: "", DateofBError: "",  DateofBisValid : false,
    gender: "", genderError: "", 
    mobileNumber: "", mobileNumberError: "",  mobileNumberisValid : false,
    email: "", emailError: "", 
    culturalGroup: "",
    //step2
    CurrentPosition: "",
    EmpStDate: "",
    Department: "",
    LineTask: "",
    CompClaim: "",
    CompClaimDetails: "",
    //step3
    addressLine1: "",
    addressLine2: "",
    suburb: "",
    stateName: "",
    postCode: "",
    country: "",
    //step4
    familyDoctor: "",
    lastVisit: "",
    reasonOfVisit: "",
    height: "",
    weight: "",
    handedness: "",
    //
    errormsg: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
 
  

  validator = (e) => {
    if (e.target.id === "givenName") {
      if (e.target.value.length <= 0) {
        this.setState({
          givenNameError: "Required Field",
          givenNameisValid: false
        });
        return false;
      }
      else this.setState({givenNameisValid: true})
      return [true, "givenNameError"];

    }

    if ( e.target.id === "surName") {
      if (e.target.value.length <= 0) {
        this.setState({
          surNameError: "Required Field",
          surNameisValid: false
        });
        return false;
      }
      else  this.setState({surNameisValid: true})
      return [true, "surNameError"];

    }

    if (e.target.id === "DateofB") {
      if (new Date().getFullYear() - e.target.valueAsDate.getFullYear() < 15) {
        this.setState({
          DateofBError: "Age should be over 15",
          DateofBisValid: false
        });
        return false;
      }
      else  this.setState({DateofBisValid: true})
      return [true, "DateofBError"];

    }

    if (e.target.id === "mobileNumber") {
      var phno = /^\d{10}$/;
      if (
        !(
          e.target.value.match(phno) &&
          e.target.value.toString().startsWith("04")
        )
      ) {
        this.setState({
          mobileNumberError: "Invalid number",
          mobileNumberisValid: false
        });
        return false;
      }
      else  this.setState({mobileNumberisValid: true})
      return [true, "mobileNumberError"];

    }

    if (e.target.id === "email") {
      var em = /^\S+@\S+\.\S+$/;

      if (!e.target.value.match(em)) {
        this.setState({
          emailError: "Invalid email",
        });
        return false;
      }

      else return [true, "emailError"];
    }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    if (e.target) {
      this.setState({
        [input]: e.target.value ,
      });
      if(!(e.target.id=== "titleOpt" || e.target.id=== "gender"|| e.target.id=== "middleName"|| e.target.id=== "culturalGroup"))
      {
        const isValid = this.validator(e);  
        if(isValid[0]){
          this.setState({
           [isValid[1]]:"",
          })
        }
      }


    } else {
      this.setState({
        [input]: e.value,
      });
    }
  };

  showStep = () => {
    const { step } = this.state;
    if (step === 1)
      return (
        <Step1
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          state={this.state}
        />
      );
    if (step === 2)
      return (
        <Step2
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          state={this.state}
        />
      );
    if (step === 3)
      return (
        <Step3
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          state={this.state}
        />
      );
    if (step === 4)
      return (
        <Step4
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          state={this.state}
        />
      );
  };

  render() {
    return <div>{this.showStep()}</div>;
  }
}

export default Main;
