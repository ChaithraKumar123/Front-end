import React, { Component } from "react";
import "../App.css";

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { ProtectedRoute } from "./protected.route";

import "react-dropdown/style.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Loginpage from "./loginpage";
import Signup from "./signuppage";
import Brilliant from "./brilliantpage";
import ForgotPassword from "./ForgotPassword";
import History from "../patientHistory";
import Home from "./Home";

import BodyImageMain from "../components/InjuryDetailsModule/BodyImageMain";
import CoreMedicalHistory from "../components/PatientIntakeModules/CoreMedicalHistory";
import CorePsychologicalModule from "../components/PatientIntakeModules/CorePsychologicalModule";
import RedFlagModule from "../components/PatientIntakeModules/RedFlagModule";
import CoreLifeStyleModule from "../components/PatientIntakeModules/CoreLifeStyleModule";
import ManualHandling from "../components/PatientIntakeModules/ManualHandling";
import IndustrySpecificModule from "../components/PatientIntakeModules/IndustrySpecificModule";
import FamilyHistoryModule from "../components/PatientIntakeModules/FamilyHistoryModule";
import MusculoskeletonModule from "../components/PatientIntakeModules/Musculoskeleton_Module";
import OreboModule from "../components/PatientIntakeModules/OreboModule";

// prom

import NDSModule from "../components/PROMModules/NDSModule";
import QuebecModule from "../components/PROMModules/QuebecModule";
import LEFSModule from "../components/PROMModules/LEFSModule";
import PSSModule from "../components/PROMModules/PSSModule";
import FABQMain from "../components/PROMModules/FABQModule/FABQMain";
import FOSQModule from "../components/PROMModules/FOSQModule";
import PainScaleModule from "../components/PROMModules/PainScaleModule";
import DASSModule from "../components/PROMModules/DASSModule";
import DASHModule from "../components/PROMModules/DASHModule";

import FormProgress from "./FormProgress";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Ouroboro } from "react-spinners-css";

const IsLoading = () => (
  <Ouroboro
    style={{
      position: "absolute",
      "margin-left": "275px",
      "margin-top": "400px",
    }}
    color="#F04F1D"
    size={200}
  />
);

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    //setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

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
    KNC: "",
    ethnicityCode: "",
    ethnicityoptions: [],
    Countryoptions: [],
    countryCode: "",
    stateOpts: [
      { label: "ACT", value: 6 },
      { label: "NSW", value: 3 },
      { label: "NT", value: 4 },
      { label: "QLD", value: 1 },
      { label: "SA", value: 7 },
      { label: "TAS", value: 5 },
      { label: "VIC", value: 2 },
      { label: "WA", value: 8 },
    ],
    stateCode: "",
    stepActivate: false,
  };

  kncset = (e) => {
    this.setState({ KNC: e });
  };

  ethnicityCodef = (e) => {
    this.setState({ ethnicityoptions: e });
  };

  countryCodef = (e) => {
    this.setState({ Countryoptions: e });
  };

  stateCodef = (e) => {
    this.setState({ stateOpts: e });
  };

  stepReset = (e) => {
    if ((e = "reset")) {
      this.setState({ step: 1 });
    } else {
      this.setState({ step: e });
    }
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  dateFormatter = (date) => {
    var d = new Date(new Date(Date.parse(date)).toDateString()),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }

    return [year, month, day].join("-");
  };

  getdetails = (patient, address, employment) => {
    if (patient.length) {
      let sex = patient[0].gender.replace(/\s+/g, "");
      let temp;
      if (sex === "M") {
        temp = "M";
      } else if (sex === "F") {
        temp = "F";
      } else if (sex === "U") {
        temp = "U";
      } else {
        temp = "";
      }

      let code = this.state.ethnicityoptions.findIndex(function (item, i) {
        return item.value === patient[0].ethnicityID;
      });

      this.setState({
        titleOpt: patient[0].title ? patient[0].title : this.state.titleOpt,
        givenName: patient[0].firstName
          ? patient[0].firstName
          : this.state.givenName,
        surName: patient[0].lastName ? patient[0].lastName : this.state.surName,
        middleName: patient[0].middleNames
          ? patient[0].middleNames
          : this.state.middleName,
        DateofB: patient[0].dateOfBirth
          ? this.dateFormatter(patient[0].dateOfBirth)
          : this.state.DateofB,
        gender: temp ? temp : this.state.gender,
        mobileNumber:
          "0" + patient[0].mobile
            ? "0" + patient[0].mobile
            : this.state.mobileNumber,
        email: patient[0].email ? patient[0].email : this.state.email,
        culturalGroup: code
          ? this.state.ethnicityoptions[code]
          : this.state.culturalGroup,
      });
      this.setState({
        ethnicityCode: this.state.ethnicityoptions[code].value,
      });

      this.setState({
        familyDoctor: patient[0].familyDoctor
          ? patient[0].familyDoctor
          : this.state.familyDoctor,
        lastVisit: patient[0].lastVisit
          ? this.dateFormatter(patient[0].lastVisit)
          : this.state.lastVisit,
        reasonOfVisit: patient[0].whyLastVisit
          ? patient[0].whyLastVisit
          : this.state.reasonOfVisit,
        height: patient[0].height ? patient[0].height : this.state.height,
        weight: patient[0].weightKg ? patient[0].weightKg : this.state.weight,
        handedness: patient[0].handedness
          ? patient[0].handedness
          : this.state.handedness,
      });
    }

    if (address.length) {
      let statecode = [
        { label: "ACT", value: 6 },
        { label: "NSW", value: 3 },
        { label: "NT", value: 4 },
        { label: "QLD", value: 1 },
        { label: "SA", value: 7 },
        { label: "TAS", value: 5 },
        { label: "VIC", value: 2 },
        { label: "WA", value: 8 },
      ].findIndex(function (item, i) {
        return item.value === address[0].stateID;
      });

      this.setState({
        stateCode: this.state.stateOpts[statecode].value,
      });

      this.setState({
        // //step3
        addressLine1: address[0].line1
          ? address[0].line1
          : this.state.addressLine1,
        addressLine2: address[0].line2
          ? address[0].line2
          : this.state.addressLine2,
        suburb: address[0].suburb ? address[0].suburb : this.state.suburb,
        stateName:
          statecode == 0 || statecode
            ? this.state.stateOpts[statecode]
            : this.state.stateName,
        postCode: address[0].postCode
          ? address[0].postCode
          : this.state.postCode,
      });
    }
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
        }
        if (
          new Date().getFullYear() - e.target.valueAsDate.getFullYear() >
          110
        ) {
          this.setState({
            DateofBError: "Invalid Age",
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
      if (e.label.length <= 0) {
        this.setState({
          stateNameError: "Required Field",
          stateNameisValid: false,
        });
        return false;
      } else this.setState({ stateNameisValid: true, stateNameError: "" });
      return true;
    }

    if (input === "country") {
      if (e.label.length <= 0) {
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
    if (input == "culturalGroup") {
      this.setState({
        [input]: e,
      });

      var index = this.state.ethnicityoptions.findIndex(function (item, i) {
        return item.label === e.label;
      });

      this.setState({
        ethnicityCode: this.state.ethnicityoptions[index].value,
      });
    } else if (input == "stateName") {
      this.setState({
        [input]: e,
      });

      var index = this.state.stateOpts.findIndex(function (item, i) {
        return item.label === e.label;
      });

      this.setState({
        stateCode: this.state.stateOpts[index].value,
      });

      this.validateStateCountry(e, input);
    } else if (input == "country") {
      this.setState({
        [input]: e,
      });

      var index = this.state.Countryoptions.findIndex(function (item, i) {
        return item.label === e.label;
      });

      this.setState({
        countryCode: this.state.Countryoptions[index].value,
      });
      this.validateStateCountry(e, input);
    } else if (e.target) {
      var transfer = e.target.value;
      this.setState({
        [input]: transfer,
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

  showStep = () => {
    const { step } = this.state;
    if (step === 1)
      return (
        <Step1
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          stepReset={this.stepReset}
          ethnicityCodef={this.ethnicityCodef}
          state={this.state}
          getdetails={this.getdetails}
        />
      );
    if (step === "abc")
      return (
        <Step2
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          state={this.state}
        />
      );
    if (step === 2)
      return (
        <Step3
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          countryCodef={this.countryCodef}
          stateCodef={this.stateCodef}
          state={this.state}
        />
      );
    if (step === 3)
      return (
        <Step4
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          state={this.state}
        />
      );
  };

  successPage = () => {
    return <Brilliant state={this.state} handleChange={this.handleChange} />;
  };
  HomePage = () => {
    return (
      <Home
        loadingCircle={<IsLoading />}
        stepReset={this.stepReset}
        state={this.state}
        switchfunc={this.props.switchFunc}
      />
    );
  };

  History = () => {
    return <History state={this.state}></History>;
  };

  Formsprogress = () => {
    return <FormProgress state={this.state}></FormProgress>;
  };

  render() {
    // this.props.switchFunc();
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Loginpage loadingCircle={<IsLoading />} />
          </Route>
          <ProtectedRoute path="/Home" component={this.HomePage} />
          <Route path="/Signup">
            <Signup
              state={this.state}
              handleChange={this.handleChange}
              kncset={this.kncset}
              loadingCircle={<IsLoading />}
            />
          </Route>
          <Route path="/ForgotPassword">
            <ForgotPassword
              handleChange={this.handleChange}
              state={this.state}
            />
          </Route>

          <ProtectedRoute path="/formprogress" component={this.Formsprogress} />

          <ProtectedRoute path="/patientDetails" component={this.showStep} />
          <Route path="/success" component={this.successPage} />

          <ProtectedRoute path="/History" component={this.History} />
          {/* <History state={this.state}></History>
          </Route> */}

          <Switch>
            {/* <Route path="/OreboModule" component={OreboModule}></Route> */}

            <ProtectedRoute path="/OreboModule" component={OreboModule} />

            <ProtectedRoute
              path="/painIndicator"
              component={BodyImageMain}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/CoreMedicalHistory"
              switchfunc={this.props.switchFunc}
              roundedDropdown={this.roundedDropdown}
              component={CoreMedicalHistory}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/CorePsychologicalModule"
              component={CorePsychologicalModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/RedFlagModule"
              component={RedFlagModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/CoreLifeStyleModule"
              component={CoreLifeStyleModule}
            ></ProtectedRoute>

            <ProtectedRoute path="/ManualHandling">
              <ManualHandling state={this.state} />
            </ProtectedRoute>
            {/* <Route path="/ManualHandling" component={ManualHandling}></Route> */}

            <ProtectedRoute path="/IndustrySpecificModule">
              <IndustrySpecificModule state={this.state} />
            </ProtectedRoute>

            {/* <Route
              path="/IndustrySpecificModule"
              state={this.state}
              component={IndustrySpecificModule}
            ></Route> */}

            <ProtectedRoute
              path="/FamilyHistoryModule"
              component={FamilyHistoryModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/NDSModule"
              component={NDSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/QuebecModule"
              component={QuebecModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/LEFSModule"
              component={LEFSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/PSSModule"
              component={PSSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/FABQMain"
              component={FABQMain}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/FOSQModule"
              component={FOSQModule}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/PainScaleModule"
              component={PainScaleModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/DASSModule"
              component={DASSModule}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/DASHModule"
              component={DASHModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/MusculoskeletonModule"
              component={MusculoskeletonModule}
            ></ProtectedRoute>
          </Switch>
        </Switch>
      </Router>
    );
  }
}

export default Main;
