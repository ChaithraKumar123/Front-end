import React, { Component } from "react";
import "../App.css";

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
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


import { Ouroboro } from "react-spinners-css";
import { DEFAULT_DATE } from "../services/constants";




const IsLoading = () => (
  <Ouroboro
    style={{
      position: "absolute",
      "marginLeft": "275px",
      "marginTop": "400px",
    }}
    color="#F04F1D"
    size={200}
  />
);

// const Auth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     //setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100); // fake async
//   },
// };

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
    ethnicityoptions: [
      { label: "Acehnese", value: 5208 },
      { label: "Acholi", value: 9111 },
      { label: "Afghan", value: 7201 },
      { label: "African American", value: 8101 },
      { label: "Afrikaner", value: 9201 },
      { label: "Akan", value: 9101 },
      { label: "Albanian", value: 3201 },
      { label: "Algerian", value: 4101 },
      { label: "American", value: 8102 },
      { label: "Amhara", value: 9222 },
      { label: "Anglo-Burmese", value: 5101 },
      { label: "Anglo-Indian", value: 7101 },
      { label: "Angolan", value: 9202 },
      { label: "Arab; other", value: 4199 },
      { label: "Argentinian", value: 8201 },
      { label: "Armenian", value: 7202 },
      { label: "Assyrian", value: 4908 },
      { label: "Australian", value: 1101 },
      { label: "Australian Aboriginal", value: 1102 },
      { label: "Australian South Sea Islander", value: 1103 },
      { label: "Austrian", value: 2301 },
      { label: "Azeri", value: 7207 },
      { label: "Bahraini", value: 4116 },
      { label: "Balinese", value: 5211 },
      { label: "Bangladeshi", value: 7118 },
      { label: "Barbadian", value: 8404 },
      { label: "Bari", value: 4301 },
      { label: "Basque", value: 3101 },
      { label: "Batswana", value: 9223 },
      { label: "Belarusan", value: 3301 },
      { label: "Belgian", value: 2311 },
      { label: "Bengali", value: 7102 },
      { label: "Berber", value: 4902 },
      { label: "Bermudan", value: 8107 },
      { label: "Bhutanese", value: 7121 },
      { label: "Bolivian", value: 8202 },
      { label: "Bosnian", value: 3202 },
      { label: "Brazilian", value: 8203 },
      { label: "British; other", value: 2199 },
      { label: "Bruneian", value: 5212 },
      { label: "Bulgarian", value: 3203 },
      { label: "Burgher", value: 7104 },
      { label: "Burmese", value: 5102 },
      { label: "Burundian", value: 9233 },
      { label: "Cameroonian", value: 9112 },
      { label: "Canadian", value: 8103 },
      { label: "Caribbean Islander; other", value: 8499 },
      { label: "Catalan", value: 3102 },
      { label: "Central American; other", value: 8399 },
      { label: "Central and West African; other", value: 9199 },
      { label: "Central Asian; other", value: 7299 },
      { label: "Chaldean", value: 4911 },
      { label: "Channel Islander", value: 2104 },
      { label: "Chilean", value: 8204 },
      { label: "Chin", value: 5112 },
      { label: "Chinese", value: 6101 },
      { label: "Chinese Asian; other", value: 6199 },
      { label: "Colombian", value: 8205 },
      { label: "Congolese", value: 9113 },
      { label: "Cook Islander", value: 1501 },
      { label: "Coptic", value: 4903 },
      { label: "Costa Rican", value: 8304 },
      { label: "Croatian", value: 3204 },
      { label: "Cuban", value: 8401 },
      { label: "Cypriot", value: 3215 },
      { label: "Czech", value: 3302 },
      { label: "Danish", value: 2401 },
      { label: "Darfur", value: 4302 },
      { label: "Dinka", value: 4303 },
      { label: "Dutch", value: 2303 },
      { label: "Eastern European; other", value: 3399 },
      { label: "Ecuadorian", value: 8206 },
      { label: "Egyptian", value: 4102 },
      { label: "Emirati", value: 4117 },
      { label: "English", value: 2101 },
      { label: "Eritrean", value: 9203 },
      { label: "Estonian", value: 3303 },
      { label: "Ethiopian", value: 9204 },
      { label: "Fijian", value: 1502 },
      { label: "Fijian Indian", value: 7122 },
      { label: "Filipino", value: 5201 },
      { label: "Finnish", value: 2402 },
      { label: "Flemish", value: 2304 },
      { label: "French", value: 2305 },
      { label: "French Canadian", value: 8104 },
      { label: "Frisian", value: 2312 },
      { label: "Fulani", value: 9102 },
      { label: "Georgian", value: 7203 },
      { label: "German", value: 2306 },
      { label: "Ghanaian", value: 9103 },
      { label: "Gibraltarian", value: 3107 },
      { label: "Gio", value: 9114 },
      { label: "Greek", value: 3205 },
      { label: "Guatemalan", value: 8305 },
      { label: "Gujarati", value: 7105 },
      { label: "Guyanese", value: 8207 },
      { label: "Hawaiian", value: 1506 },
      { label: "Hazara", value: 7208 },
      { label: "Hispanic North American", value: 8105 },
      { label: "Hmong", value: 5103 },
      { label: "Hungarian", value: 3304 },
      { label: "Hutu", value: 9225 },
      { label: "Icelandic", value: 2403 },
      { label: "Igbo", value: 9115 },
      { label: "I-Kiribati", value: 1401 },
      { label: "Indian", value: 7106 },
      { label: "Indian Tamil", value: 7128 },
      { label: "Indonesian", value: 5202 },
      { label: "Iranian", value: 4904 },
      { label: "Iraqi", value: 4103 },
      { label: "Irish", value: 2201 },
      { label: "Italian", value: 3103 },
      { label: "Ivorean", value: 9106 },
      { label: "Jamaican", value: 8402 },
      { label: "Japanese", value: 6901 },
      { label: "Javanese", value: 5203 },
      { label: "Jewish", value: 4201 },
      { label: "Jordanian", value: 4104 },
      { label: "Kadazan", value: 5213 },
      { label: "Karen", value: 5108 },
      { label: "Kashmiri", value: 7123 },
      { label: "Kazakh", value: 7204 },
      { label: "Kenyan", value: 9205 },
      { label: "Khmer (Cambodian)", value: 5104 },
      { label: "Korean", value: 6902 },
      { label: "Krahn", value: 9116 },
      { label: "Kunama", value: 9234 },
      { label: "Kurdish", value: 4905 },
      { label: "Kuwaiti", value: 4105 },
      { label: "Kyrgyz", value: 7215 },
      { label: "Lao", value: 5105 },
      { label: "Latvian", value: 3305 },
      { label: "Lebanese", value: 4106 },
      { label: "Liberian", value: 9107 },
      { label: "Libyan", value: 4107 },
      { label: "Lithuanian", value: 3306 },
      { label: "Luxembourg", value: 2313 },
      { label: "Macedonian", value: 3206 },
      { label: "Madi", value: 9235 },
      { label: "Madurese", value: 5204 },
      { label: "Mainland South-East Asian; other", value: 5199 },
      { label: "Malawian", value: 9206 },
      { label: "Malay", value: 5205 },
      { label: "Malayali", value: 7107 },
      { label: "Maldivian", value: 7117 },
      { label: "Maltese", value: 3104 },
      { label: "Mandaean", value: 4912 },
      { label: "Mandinka", value: 9117 },
      { label: "Manx", value: 2105 },
      { label: "Maori", value: 1201 },
      { label: "Maritime South-East Asian; other", value: 5299 },
      { label: "Masai", value: 9226 },
      { label: "Mauritian", value: 9207 },
      { label: "Mayan", value: 8306 },
      { label: "Melanesian and Papuan; other", value: 1399 },
      { label: "Mexican", value: 8301 },
      { label: "Micronesian; other", value: 1403 },
      { label: "Moldovan", value: 3207 },
      { label: "Mon", value: 5111 },
      { label: "Mongolian", value: 6903 },
      { label: "Montenegrin", value: 3208 },
      { label: "Moroccan", value: 4108 },
      { label: "Mozambican", value: 9208 },
      { label: "Namibian", value: 9211 },
      { label: "Native North American Indian", value: 8106 },
      { label: "Nauruan", value: 1402 },
      { label: "Nepalese", value: 7111 },
      { label: "New Caledonian", value: 1301 },
      { label: "New Zealander", value: 1202 },
      { label: "Nicaraguan", value: 8302 },
      { label: "Nigerian", value: 9104 },
      { label: "Niuean", value: 1503 },
      { label: "Ni-Vanuatu", value: 1302 },
      { label: "North American; other", value: 8199 },
      { label: "Northern European; other", value: 2499 },
      { label: "Norwegian", value: 2404 },
      { label: "Nubian", value: 4913 },
      { label: "Nuer", value: 4304 },
      { label: "Ogaden", value: 9236 },
      { label: "Omani", value: 4118 },
      { label: "Oromo", value: 9212 },
      { label: "Other North African and Middle Eastern; other", value: 4999 },
      { label: "Other North-East Asian; other", value: 6999 },
      { label: "Pakistani", value: 7112 },
      { label: "Palestinian", value: 4111 },
      { label: "Papua New Guinean", value: 1303 },
      { label: "Paraguayan", value: 8213 },
      { label: "Parsi", value: 7124 },
      { label: "Pathan", value: 7205 },
      { label: "Peoples of the Sudan; other", value: 4399 },
      { label: "Peruvian", value: 8208 },
      { label: "Pitcairn", value: 1512 },
      { label: "Polish", value: 3307 },
      { label: "Polynesian; other", value: 1599 },
      { label: "Portuguese", value: 3105 },
      { label: "Puerto Rican", value: 8405 },
      { label: "Punjabi", value: 7113 },
      { label: "Qatari", value: 4121 },
      { label: "Rohingya", value: 5113 },
      { label: "Roma Gypsy", value: 3212 },
      { label: "Romanian", value: 3211 },
      { label: "Russian", value: 3308 },
      { label: "Rwandan", value: 9237 },
      { label: "Salvadoran", value: 8303 },
      { label: "Samoan", value: 1504 },
      { label: "Saudi Arabian", value: 4112 },
      { label: "Scottish", value: 2102 },
      { label: "Senegalese", value: 9118 },
      { label: "Serbian", value: 3213 },
      { label: "Seychellois", value: 9213 },
      { label: "Shona", value: 9238 },
      { label: "Sierra Leonean", value: 9108 },
      { label: "Sikh", value: 7114 },
      { label: "Sindhi", value: 7125 },
      { label: "Singaporean", value: 5214 },
      { label: "Sinhalese", value: 7115 },
      { label: "Slovak", value: 3311 },
      { label: "Slovene", value: 3214 },
      { label: "Solomon Islander", value: 1304 },
      { label: "Somali", value: 9214 },
      { label: "Sorb/Wend", value: 3313 },
      { label: "South African", value: 9215 },
      { label: "South American; other", value: 8299 },
      { label: "South Eastern European; other", value: 3299 },
      { label: "South Sudanese", value: 4305 },
      { label: "Southern and East African; other", value: 9299 },
      { label: "Southern Asian; other", value: 7199 },
      { label: "Southern European; other", value: 3199 },
      { label: "Spanish", value: 3106 },
      { label: "Sri Lankan", value: 7126 },
      { label: "Sri Lankan Tamil", value: 7127 },
      { label: "Sudanese", value: 4306 },
      { label: "Sundanese", value: 5206 },
      { label: "Swahili", value: 9241 },
      { label: "Swazilander", value: 9242 },
      { label: "Swedish", value: 2405 },
      { label: "Swiss", value: 2307 },
      { label: "Syrian", value: 4113 },
      { label: "Tahitian", value: 1507 },
      { label: "Taiwanese", value: 6102 },
      { label: "Tajik", value: 7211 },
      { label: "Tamil", value: 7131 },
      { label: "Tanzanian", value: 9216 },
      { label: "Tatar", value: 7212 },
      { label: "Telugu", value: 7132 },
      { label: "Temoq", value: 5215 },
      { label: "Thai", value: 5106 },
      { label: "Themne", value: 9121 },
      { label: "Tibetan", value: 6904 },
      { label: "Tigrayan", value: 9228 },
      { label: "Tigre", value: 9231 },
      { label: "Timorese", value: 5207 },
      { label: "Togolese", value: 9122 },
      { label: "Tokelauan", value: 1508 },
      { label: "Tongan", value: 1505 },
      { label: "Torres Strait Islander", value: 1104 },
      { label: "Trinidadian Tobagonian", value: 8403 },
      { label: "Tunisian", value: 4114 },
      { label: "Turkish", value: 4907 },
      { label: "Turkmen", value: 7213 },
      { label: "Tuvaluan", value: 1511 },
      { label: "Ugandan", value: 9217 },
      { label: "Uighur", value: 7214 },
      { label: "Ukrainian", value: 3312 },
      { label: "Uruguayan", value: 8211 },
      { label: "Uzbek", value: 7206 },
      { label: "Venezuelan", value: 8212 },
      { label: "Vietnamese", value: 5107 },
      { label: "Vlach", value: 3216 },
      { label: "Welsh", value: 2103 },
      { label: "Western European; other", value: 2399 },
      { label: "Yemeni", value: 4115 },
      { label: "Yezidi", value: 4914 },
      { label: "Yoruba", value: 9105 },
      { label: "Zambian", value: 9218 },
      { label: "Zimbabwean", value: 9221 },
      { label: "Zulu", value: 9232 },
    ],
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

  uuidset = (e) => {
    this.setState({ UUID: e });
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

  stepReset = () => {
    // logic for taking patients to the page that is yet to be filled by bypassing filled details
    if (this.state.height > 0) {
      this.setState({ step: 1 });
    } else if (this.state.suburb.length > 0) {
      this.setState({ step: 3 });
    } else if (this.state.titleOpt.length > 0) {
      this.setState({ step: 2 });
    } else {
      this.setState({ step: 1 });
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

        DateofB: new Date(patient[0].dateOfBirth).getFullYear() === new Date(DEFAULT_DATE).getFullYear()
          ? null : this.dateFormatter(patient[0].dateOfBirth),

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
          statecode === 0 || statecode
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
    if (input === "culturalGroup") {
      this.setState({
        [input]: e,
      });

      var index = this.state.ethnicityoptions.findIndex(function (item, i) {
        return item.label === e.label;
      });

      this.setState({
        ethnicityCode: this.state.ethnicityoptions[index].value,
      });
    } else if (input === "stateName") {
      this.setState({
        [input]: e,
      });

      index = this.state.stateOpts.findIndex(function (item, i) {
        return item.label === e.label;
      });

      this.setState({
        stateCode: this.state.stateOpts[index].value,
      });

      this.validateStateCountry(e, input);
    } else if (input === "country") {
      this.setState({
        [input]: e,
      });

      index = this.state.Countryoptions.findIndex(function (item, i) {
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
        this.validator(e);
      }
    } else {
      this.setState({
        [input]: e.value,
      });
      if (!(input === "culturalGroup")) {
        this.validateStateCountry(e, input);
      }
    }
  };

  showStep = (props) => {
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
          Leftarrow={this.Leftarrow}
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
          workflow={props.location.state.workflow}
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


  Leftarrow = (hrefString) => {

    return (
      <div style={{ float: "left", "marginTop": "4px" }}>
        {/* <button style = {{ "background": "transparent", "border": "none"}} onClick = {()=> auth.login(() => {this.props.history.push("/")})}>
      <img  src={require("../images/left-arrow-white.svg")} height = "25px"/>
      </button> */}

        <a href={hrefString}>
          <img
            src={require("../images/left-arrow-white.svg")}
            alt=""
            height="25px"
          />
        </a>

      </div>
    )


  }

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
              uuidset={this.uuidset}
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
              Leftarrow={this.Leftarrow}

              component={BodyImageMain}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/CoreMedicalHistory"
              switchfunc={this.props.switchFunc}
              roundedDropdown={this.roundedDropdown}
              component={CoreMedicalHistory}
              Leftarrow={this.Leftarrow}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/CorePsychologicalModule"
              Leftarrow={this.Leftarrow}
              loadingCircle={<IsLoading />}
              component={CorePsychologicalModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/RedFlagModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}

              component={RedFlagModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/CoreLifeStyleModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
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
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}

              component={FamilyHistoryModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/NDSModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={NDSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/QuebecModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={QuebecModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/LEFSModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={LEFSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/PSSModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={PSSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/FABQMain"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={FABQMain}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/FOSQModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={FOSQModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/PainScaleModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={PainScaleModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/DASSModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={DASSModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/DASHModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}
              component={DASHModule}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/MusculoskeletonModule"
              loadingCircle={<IsLoading />}
              Leftarrow={this.Leftarrow}

              component={MusculoskeletonModule}
            ></ProtectedRoute>
          </Switch>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(Main);
