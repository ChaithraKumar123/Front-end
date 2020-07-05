import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BodyImageMain from "./components/InjuryDetailsModule/BodyImageMain";
import CoreMedicalHistory from "./components/PatientIntakeModules/CoreMedicalHistory";
import CorePsychologicalModule from "./components/PatientIntakeModules/CorePsychologicalModule";
import RedFlagModule from "./components/PatientIntakeModules/RedFlagModule";
import CoreLifeStyleModule from "./components/PatientIntakeModules/CoreLifeStyleModule";
import ManualHandling from "./components/PatientIntakeModules/ManualHandling";
import IndustrySpecificModule from "./components/PatientIntakeModules/IndustrySpecificModule";
import FamilyHistoryModule from "./components/PatientIntakeModules/FamilyHistoryModule";
import MusculoskeletonModule from "./components/PatientIntakeModules/Musculoskeleton_Module";
import OreboModule from "./components/PatientIntakeModules/OreboModule";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function History() {
  return (
    <div id="MainDiv">
      <div style = {{"height" : "739px"}}>
      <div className="page-title lg">
        <div className="title">
          <h1>Patient History</h1>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      <div>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Nav.Link style = {{fontSize: "16px"}} href="/painIndicator">Pain Indicator</Nav.Link>
            <NavDropdown style = {{fontSize: "16px"}}  title="Medical History">
              <Nav.Link style = {{fontSize: "16px"}}  href="/CoreMedicalHistory">CoreMedicalHistory</Nav.Link>
              <Nav.Link style = {{fontSize: "16px"}}  href="/CorePsychologicalModule">
                CorePsychologicalModule
              </Nav.Link>
              <Nav.Link style = {{fontSize: "16px"}}  href="/RedFlagModule">RedFlagModule</Nav.Link>
              <Nav.Link style = {{fontSize: "16px"}}  href="/CoreLifeStyleModule">
                CoreLifeStyleModule
              </Nav.Link>
              <Nav.Link style = {{fontSize: "16px"}}  href="/ManualHandling">ManualHandling</Nav.Link>
              <Nav.Link style = {{fontSize: "16px"}}  href="/IndustrySpecificModule">
                IndustrySpecificModule
              </Nav.Link>
              <Nav.Link style = {{fontSize: "16px"}}  href="/FamilyHistoryModule">
                FamilyHistoryModule
              </Nav.Link>
            </NavDropdown>

            <Nav.Link style = {{fontSize: "16px"}}  href="/MusculoskeletonModule">
              MusculoskeletonModule
            </Nav.Link>
            <Nav.Link style = {{fontSize: "16px"}}  href="/OreboModule">OreboModule</Nav.Link>
          </Container>
        </Navbar>
      </div>
      </div>
    </div>
  );
}

export default History;
