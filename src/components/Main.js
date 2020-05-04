import React, { Component } from "react";
import "../App.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { ProtectedRoute } from "./protected.route";

import "react-dropdown/style.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Loginpage from "./loginpage";
import Signup from "./signuppage";
import Brilliant from './brilliantpage';



const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    //setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

// handleChange={this.handleChange}
// nextStep={this.nextStep}
// state={this.state}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     Auth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/' />
//   )} />
// )

class Main extends Component {
  state = {
    step: 1,
    //step1
    titleOpt: "",
    titleOptError: "",
    givenName: "",
    givenNameError: "",
    givenNameisValid: false,
    surName: "",
    surNameError: "",
    surNameisValid: false,
    middleName: "",
    DateofB: "",
    DateofBError: "",

    DateofBisValid: false,
    gender: "",
    genderError: "",
    mobileNumber: "",
    mobileNumberError: "",

    mobileNumberisValid: false,
    email: "",
    emailError: "",
    culturalGroup: "",
    //step2
    CurrentPosition: "",
    EmpStDate: "",
    EmpStDateError: "",
    EmpStDateisValid: false,
    Department: "",
    LineTask: "",
    CompClaim: "",
    CompClaimDetails: "",
    CompClaimDetailsError: "",
    CompClaimDetailsisValid: false,
    //step3
    addressLine1: "",
    addressLine1Error: "",
    addressLine1isValid: false,
    addressLine2: "",
    suburb: "",
    suburbError: "",
    suburbisValid: false,
    stateName: "",
    stateNameError: "",
    stateNameisValid: false,
    postCode: "",
    postCodeError: "",
    postCodeisValid: false,
    country: "",
    countryError: "",
    countryisValid: false,
    //step4
    familyDoctor: "",
    lastVisit: "",
    reasonOfVisit: "",
    height: "",
    heightError: "",
    heightisValid: false,
    weight: "",
    weightError: "",
    weightisValid: false,
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
          givenNameisValid: false,
        });
        return false;
      } else this.setState({ givenNameisValid: true, givenNameError: "" });
      return true;
    }

    if (e.target.id === "surName") {
      if (e.target.value.length <= 0) {
        this.setState({
          surNameError: "Required Field",
          surNameisValid: false,
        });
        return false;
      } else this.setState({ surNameisValid: true, surNameError: "" });
      return true;
    }

    if (e.target.id === "DateofB") {
      try {
        if (
          new Date().getFullYear() - e.target.valueAsDate.getFullYear() <
          15
        ) {
          this.setState({
            DateofBError: "Age must be over 15",
            DateofBisValid: false,
          });
          return false;
        } else this.setState({ DateofBisValid: true, DateofBError: "" });
        return true;
      } catch (err) {
        this.setState({
          DateofBError: "Invalid date",
          DateofBisValid: false,
        });
        return false;
      }
    }

    if (e.target.id === "EmpStDate") {
      if (!e.target.valueAsDate) {
        this.setState({
          EmpStDateError: "Invalid date",
          EmpStDateisValid: false,
        });
        return false;
      } else this.setState({ EmpStDateisValid: true, EmpStDateError: "" });
      return true;
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
          mobileNumberisValid: false,
        });
        return false;
      } else
        this.setState({ mobileNumberisValid: true, mobileNumberError: "" });
      return true;
    }

    if (e.target.id === "email") {
      var em = /^\S+@\S+\.\S+$/;

      if (!e.target.value.match(em)) {
        this.setState({
          emailError: "Invalid email",
        });
        return false;
      } else this.setState({ emailError: "" });
      return true;
    }

    if (e.target.id === "CompClaimDetails") {
      if (e.target.value.length <= 0) {
        this.setState({
          CompClaimDetailsError: "Required Field",
          CompClaimDetailsisValid: false,
        });
        return false;
      } else
        this.setState({
          CompClaimDetailsisValid: true,
          CompClaimDetailsError: "",
        });
      return true;
    }

    if (e.target.id === "addressLine1") {
      if (e.target.value.length <= 0) {
        this.setState({
          addressLine1Error: "Required Field",
          addressLine1isValid: false,
        });
        return false;
      } else
        this.setState({ addressLine1isValid: true, addressLine1Error: "" });
      return true;
    }
    if (e.target.id === "suburb") {
      if (e.target.value.length <= 0) {
        this.setState({
          suburbError: "Required Field",
          suburbisValid: false,
        });
        return false;
      } else this.setState({ suburbisValid: true, suburbError: "" });
      return true;
    }

    if (e.target.id === "postCode") {
      if (!(Number(e.target.value) >= 200 && Number(e.target.value) <= 9999)) {
        this.setState({
          postCodeError: "Invalid input",
          postCodeisValid: false,
        });
        return false;
      } else this.setState({ postCodeisValid: true, postCodeError: "" });
      return true;
    }
    if (e.target.id === "height") {
      if (!(Number(e.target.value) >= 50 && Number(e.target.value) <= 250)) {
        this.setState({
          heightError: "Invalid input",
          heightisValid: false,
        });
        return false;
      } else this.setState({ heightisValid: true, heightError: "" });
      return true;
    }
    if (e.target.id === "weight") {
      if (!(Number(e.target.value) >= 20 && Number(e.target.value) <= 500)) {
        this.setState({
          weightError: "Invalid input",
          weightisValid: false,
        });
        return false;
      } else this.setState({ weightisValid: true, weightError: "" });
      return true;
    }
  };

  validateStateCountry = (e, input) => {
    if (input === "stateName") {
      if (e.value.length <= 0) {
        this.setState({
          stateNameError: "Required Field",
          stateNameisValid: false,
        });
        return false;
      } else this.setState({ stateNameisValid: true, stateNameError: "" });
      return true;
    }

    if (input === "country") {
      if (e.value.length <= 0) {
        this.setState({
          countryError: "Required Field",
          countryisValid: false,
        });
        return false;
      } else this.setState({ countryisValid: true, countryError: "" });
      return true;
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
        [input]: e.target.value,
      });
      if (
        !(
          e.target.id === "titleOpt" ||
          e.target.id === "gender" ||
          e.target.id === "middleName" ||
          e.target.id === "culturalGroup" ||
          e.target.id === "CurrentPosition" ||
          e.target.id === "Department" ||
          e.target.id === "LineTask" ||
          e.target.id === "CompClaim" ||
          e.target.id === "addressLine2" ||
          e.target.id === "familyDoctor" ||
          e.target.id === "lastVisit" ||
          e.target.id === "reasonOfVisit" ||
          e.target.id === "handedness"
        )
      ) {
        const isValid = this.validator(e);
      }
    } else {
      this.setState({
        [input]: e.value,
      });
      if (!(input === "culturalGroup")) {
        const isValid = this.validateStateCountry(e, input);
      }
    }
  };

  // showStep = () => {
  //   const { step } = this.state;
  //   if (step === 0) {
  //     return <Loginpage nextStep={this.nextStep} />;
  //   }
  //   if (step === 1) {
  //     return (
  //       <Signup
  //         state={this.state}
  //         handleChange={this.handleChange}
  //         nextStep={this.nextStep}
  //       />
  //     );
  //   }
  //   if (step === 2) {
  //     return (
  //       <Brilliant
  //         state={this.state}
  //         handleChange={this.handleChange}
  //         nextStep={this.nextStep}
  //       />
  //     );
  //   }
  //   // if (step === 1)
  //   //   return (
  //   //     <Step1
  //   //       handleChange={this.handleChange}
  //   //       nextStep={this.nextStep}
  //   //       state={this.state}
  //   //     />
  //   //   );
  //   if (step === 2)
  //     return (
  //       <Step2
  //         handleChange={this.handleChange}
  //         nextStep={this.nextStep}
  //         prevStep={this.prevStep}
  //         state={this.state}
  //       />
  //     );
  //   if (step === 3)
  //     return (
  //       <Step3
  //         handleChange={this.handleChange}
  //         nextStep={this.nextStep}
  //         prevStep={this.prevStep}
  //         state={this.state}
  //       />
  //     );
  //   if (step === 4)
  //     return (
  //       <Step4
  //         handleChange={this.handleChange}
  //         nextStep={this.nextStep}
  //         prevStep={this.prevStep}
  //         state={this.state}
  //       />
  //     );
  // };

  // render() {
  //   return <div>{this.showStep()}</div>;
  // }

  showStep = () => {
    const { step } = this.state;
    // if (step === 0) {
    //   return <Loginpage nextStep={this.nextStep} />;
    // }
    // if (step === 1) {
    //   return (
    //     <Signup
    //       state={this.state}
    //       handleChange={this.handleChange}
    //       nextStep={this.nextStep}
    //     />
    //   );
    // }
    // if (step === 2) {
    //   return (
    //     <Brilliant
    //       state={this.state}
    //       handleChange={this.handleChange}
    //       nextStep={this.nextStep}
    //     />
    //   );
    // }
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
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route  path="/Signup">
            <Signup state={this.state} handleChange={this.handleChange} nextStep={this.nextStep}/>
          </Route>
          <ProtectedRoute path='/patientDetails' component={this.showStep}
          />
        </Switch>
      </Router>
    );
  }
}

export default Main;
