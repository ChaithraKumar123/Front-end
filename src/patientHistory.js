import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from"react-router-dom"
import BodyImageMain from './components/InjuryDetailsModule/BodyImageMain'
import CoreMedicalHistory from './components/PatientIntakeModules/CoreMedicalHistory'
import CorePsychologicalModule from './components/PatientIntakeModules/CorePsychologicalModule'
import RedFlagModule from './components/PatientIntakeModules/RedFlagModule'
import CoreLifeStyleModule from './components/PatientIntakeModules/CoreLifeStyleModule'
import ManualHandling from './components/PatientIntakeModules/ManualHandling'
import IndustrySpecificModule from './components/PatientIntakeModules/IndustrySpecificModule'
import FamilyHistoryModule from './components/PatientIntakeModules/FamilyHistoryModule'
import MusculoskeletonModule from './components/PatientIntakeModules/Musculoskeleton_Module'
import OreboModule from './components/PatientIntakeModules/OreboModule'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'


function History() {
  
  return (
    <div className="App container">
       <Navbar expand="lg" variant="light" bg="light">
      <Container>
    <Nav.Link href="/painIndicator" >Pain Indicator</Nav.Link>
  
    
    <NavDropdown title="Medical History" id="nav-dropdown">
    <Nav.Link href="/CoreMedicalHistory" >CoreMedicalHistory</Nav.Link>
    <Nav.Link href="/CorePsychologicalModule" >CorePsychologicalModule</Nav.Link>
    <Nav.Link href="/RedFlagModule" >RedFlagModule</Nav.Link>
    <Nav.Link href="/CoreLifeStyleModule" >CoreLifeStyleModule</Nav.Link>
    <Nav.Link href="/ManualHandling" >ManualHandling</Nav.Link>
    <Nav.Link href="/IndustrySpecificModule" >IndustrySpecificModule</Nav.Link>
    <Nav.Link href="/FamilyHistoryModule" >FamilyHistoryModule</Nav.Link>
    </NavDropdown>
    
    <Nav.Link href="/MusculoskeletonModule" >MusculoskeletonModule</Nav.Link>
    <Nav.Link href="/OreboModule" >OreboModule</Nav.Link>
  </Container>
</Navbar>
    {/* <BrowserRouter>
      <Container>
     <Switch>
     <Route path="/OreboModule" component={OreboModule} ></Route>
     <Route path="/painIndicator" component={BodyImageMain} ></Route>
    <Route path="/CoreMedicalHistory" component={CoreMedicalHistory} ></Route>
     
     <Route path="/CorePsychologicalModule" component={CorePsychologicalModule} ></Route>
     
     <Route path="/RedFlagModule" component={RedFlagModule} ></Route>
     
     <Route path="/CoreLifeStyleModule" component={CoreLifeStyleModule} ></Route>
     
     <Route path="/ManualHandling" component={ManualHandling} ></Route>
     
     <Route path="/IndustrySpecificModule" component={IndustrySpecificModule} ></Route>
    
     <Route path="/FamilyHistoryModule" component={FamilyHistoryModule} ></Route>
    
     <Route path="/MusculoskeletonModule" component={MusculoskeletonModule} ></Route>
     </Switch>
     </Container>
     </BrowserRouter>  */}
     
    
   </div>

    
    
      
  );
}


export default History;
