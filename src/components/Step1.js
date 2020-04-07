import React,{Component} from 'react'
import Dropdown from 'react-dropdown';
const options = [
  'Aus', 'Ind', 'Pak',''
];
class Step1 extends Component
{
continue=e=>
{
e.preventDefault();
this.props.nextStep();
}

render()


{
    const{handleChange,state}=this.props
     return(
    
   <div id="MainDiv">
      <div>
          <p id = "Stepscolor">Step 1 of 4 <br />Personal Details</p> 
          <label className = "abc">Title</label>
          <div id = "radio">
            <input type="radio" value="Mr" id= "titleOpt"  checked={state.titleOpt === "Mr"} onChange={handleChange('titleOpt')}/>Mr
            <input type="radio" value="Mrs" id= "titleOpt"  checked={state.titleOpt === "Mrs"} onChange={handleChange('titleOpt')}/>Mrs
            <input type="radio" value="Miss" id= "titleOpt"  checked={state.titleOpt === "Miss"} onChange={handleChange('titleOpt')}/>Miss
            <input type="radio" value="Ms"  id= "titleOpt" checked={state.titleOpt === "Ms"} onChange={handleChange('titleOpt')}/>Ms
            <input type="radio" value="Other" id= "titleOpt"  checked={state.titleOpt === "Other"} onChange={handleChange('titleOpt')}/>Other
          </div>
          <div>
              <label className = "abc">Given Name</label>
              <input className="form-control" name="givenName" type="text" value={state.givenName} 
              onChange={handleChange('givenName')}/>

              <label className = "abc">Surname</label>
              <input className="form-control" id="Surname" name="Surname" type="text" 
               value={state.surName} onChange={handleChange('surName')}/>

              <label className = "abc">Middle Name </label>
              <input className="form-control" name="middleName" type="text" 
              placeholder="Enter Middle Name" value={state.middleName} onChange={handleChange('middleName')}/>
          </div>

          <label className = "abc">Date of Birth</label>
          <input className="form-control" id="DateofB" name="DateofB" type="date" 
          placeholder="Date of Birth" value={state.dob} onChange={handleChange('dob')}/>
          
          <label className = "abc">Gender</label>
          <div id = "radio">
            <input type="radio" value="Male" checked={state.gender === "Male"} onChange={handleChange('gender')}/>Male
            <input type="radio" value="Female" checked={state.gender === "Female"} onChange={handleChange('gender')}/>Female
            <input type="radio" value="Unspecified" checked={state.gender === "Unspecified"} onChange={handleChange('gender')}/>Unspecified
          </div>

          <div>
              <label className = "abc">Mobile Number</label>
              <input className="form-control" name="MobileNumber" type="text" placeholder="Enter Mobile Number" 
              value={state.mobileNumber} onChange={handleChange('mobileNumber')}/>
              <label className = "abc">email</label>
              <input className="form-control" name="email" type="text" placeholder="Enter email" 
              value={state.email} onChange={handleChange('email')}/>
          </div>
          <label className = "abc">Cultural/Ethnic Group</label>
          <Dropdown options={options} onChange={handleChange('culturalGroup')} value={state.culturalGroup} 
          placeholder="Select an option" />

      </div>
      <button className="next" onClick={this.continue}>
      Continue
    </button>
    </div>
    
    
    );
}
}
export default Step1