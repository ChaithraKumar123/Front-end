import React,{Component} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const stateOptions = [
    'NSW','VIC','QU'
  ];
class Step3 extends Component
{
    back=e=>
    {
    e.preventDefault();
    this.props.prevStep();
    }
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
    <p id = "Stepscolor">Step 3 of 4 <br />Address Details</p> 
    <div>
    <label className = "abc">Street Address (Line1)</label>
    <input type="text" className="form-control" name="addressLine1" value={state.addressLine1}
        onChange={handleChange('addressLine1')}></input>
    <label className = "abc">Street Address (Line2)</label>
    <input type="text" className="form-control" name="addressLine2" value={state.addressLine2}
        onChange={handleChange('addressLine2')}></input>
    <label className = "abc">Suburb</label>
    <input type="text" className="form-control" name="suburb" value={state.suburb}
        onChange={handleChange('suburb')}></input>
    </div>
    
    <div>
    <label className = "abc">State</label>
    <Dropdown options={stateOptions} onChange={handleChange('stateName')}
    value= {state.stateName} />
    </div>

    <div>
    <label className = "abc">Post Code</label>
    <input type="text" name="postCode" className="form-control" value={state.postCode}
        onChange={handleChange('postCode')}></input>
    </div>
    <div>
    <label className = "abc">Country</label>
    <Dropdown options={stateOptions} onChange={handleChange('country')}
    value= {state.country} />
    
    </div>
   </div>
   <button className="back" onClick={this.back}>
        Back
    </button>
    <button className="next" onClick={this.continue}>
        Continue
    </button>
    </div>
    );
}
}
export default Step3