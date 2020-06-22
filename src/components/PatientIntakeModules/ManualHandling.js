import React,{Component} from 'react'
import '../../App.css'
import {RadioGroup, Radio} from 'react-radio-group';



class ManualHandling extends Component
{

    constructor(props) {
        super(props);
        this.initialState={
              
               pain_lift:'',
               pain_walk:'',
               pain_stand:'',
               pain_squat:'',
               pain_bend:'',
               pain_lift_reason:'',
               pain_walk_reason:'',
               pain_stand_reason:'',
               pain_squat_reason:'',
               pain_bend_reason:'',
               problem_working_conditions:'',
               problem_working_conditions_reason:'',
               difficult_operating:'',
               difficult_operating_reason:'',
               pain_lift_below:'',
               pain_lift_below_reason:'',
               problem_working_heights_reason:'',
               problem_working_heights:'',
               require_assistance_reason:'',
               require_assistance:'',
               nameError:'',
               pain_grip_reason:"",
               pain_grip:""
        };
        this.state = this.initialState;

    }
    handleChange= input=>e=>
    {
       
    
    
        if(e.target)
        {
        this.setState(
            {
               [input]:e.target.value 
            }
        )
        }
        else{
            this.setState({
                [input]: e
              })  
        }
    }
    completeForm=event=>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
          //  this.setState(this.initialState);


          const Signupschema = {
            schema: {
                KNC: this.props.state.KNC,
                HeavyObjects: this.state.pain_lift_reason,
                PainWalking: this.state.pain_walk_reason,
                PainBending: this.state.pain_bend_reason,
                PainSquating: this.state.pain_squat_reason,
                PainStanding: this.state.pain_stand_reason,
                BelowOverhead: this.state.pain_lift_below_reason,
                Gripping: this.state.pain_grip_reason,
                OperatingMachinery: this.state.difficult_operating_reason,
                TemperatureDifficulty: this.state.problem_working_conditions_reason,
                Heights: this.state.problem_working_heights_reason,
                AncticipateAssistance: this.state.require_assistance_reason
            },
          };
    
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            },
            body: JSON.stringify(Signupschema.schema),
          };



          try {
            fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/manualhandling", requestOptions)
              .then((response) => response.json())
              .then(data => {
                if(Number(data.httpStatusCode) ===200){
                  window.confirm("Submitted")
                }
                else{
                  window.confirm(data.message)
                }
              
              })
          } 
          catch (error) {
            window.alert(error);
          }
          //  alert('Submitted')
        }

        else {
            alert('error submitting')

          }


    
    }
      validate = () => {
        let nameError = "";
        
        const val = this.state
        if (val.pain_lift==="" ||val.pain_walk ==="" ||val.pain_stand ==="" || val.pain_squat==="" 
        || val.pain_bend===""|| val.problem_working_conditions===""||val.difficult_operating===""
        || val.pain_grip ===""
        || val.pain_lift_below==="" || val.problem_working_heights === "" || val.require_assistance==="") {
          nameError = "*required";
        }
        if (nameError) {
            this.setState({nameError });
            return false;
          }
        else
        {
            this.setState(
                {
                    nameError:''
                }
            );
            return true;
        }
    }
    render()
    {   
         const { handleChange, state } = this.props;
         

        return(
            <div id="MainDiv">
               <p id = "Stepscolor">Manual Handling Module</p> 
                <div></div>
                <div>
                    <label className="abc">Do you have any pain/discomfort when lifting/handling heavy objects?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_lift==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.pain_lift === "No"} onChange={this.handleChange('pain_lift')}/>No
                        <input type="radio" value="Yes" checked={this.state.pain_lift === "Yes"} onChange={this.handleChange('pain_lift')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_lift_reason')} value={this.state.pain_lift_reason}/>
                </div>
                <div>
                    <label className="abc"> Do you have any pain when doing any of the following for any period of time:</label><br/>
                  
                    <div>
                    <label className="abc">Walking</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_walk==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="walk" selectedValue={this.state.pain_walk} onChange={this.handleChange('pain_walk')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_walk_reason')} value={this.state.pain_walk_reason}/>
                    </div>
                    <div>
                    <label className="abc">Bending</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_bend==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="Bend" selectedValue={this.state.pain_bend} onChange={this.handleChange('pain_bend')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_bend_reason')} value={this.state.pain_bend_reason}/>
                    </div>
                    <div>
                    <label className="abc">Squating</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_squat==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="Squat" selectedValue={this.state.pain_squat} onChange={this.handleChange('pain_squat')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_squat_reason')} value={this.state.pain_squat_reason}/>
                    </div>
                    <div>
                    <label className="abc">Standing</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_stand==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="Stand" selectedValue={this.state.pain_stand} onChange={this.handleChange('pain_stand')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_stand_reason')} value={this.state.pain_stand_reason}/>
                    </div>
                </div>
                <div>
                    <label className="abc">Do you have any pain or difficulty when lifting objects below or overhead?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_lift_below==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="lift" selectedValue={this.state.pain_lift_below} onChange={this.handleChange('pain_lift_below')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_lift_below_reason')} value={this.state.pain_lift_below_reason}/>
                </div>


                <div>
                    <label className="abc">Do you have any pain when using a gripping motion?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_grip==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="grip" selectedValue={this.state.pain_grip} onChange={this.handleChange('pain_grip')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_grip_reason')} value={this.state.pain_grip_reason}/>
                </div>


                <div>
                    <label className="abc">Do you experience any difficulty operating machinery?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.difficult_operating==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="operate_diff" selectedValue={this.state.difficult_operating} onChange={this.handleChange('difficult_operating')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                    </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('difficult_operating_reason')} value={this.state.difficult_operating_reason}/>
                </div>
                <div>
                    <label className="abc">Do you have any problems working in hot dry conditions, humid conditions, cold conditions, wet conditions?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.problem_working_conditions==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="working_conditions" selectedValue={this.state.problem_working_conditions} onChange={this.handleChange('problem_working_conditions')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                    </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('problem_working_conditions_reason')} value={this.state.problem_working_conditions_reason}/>
                </div>
                <div>
                    <label className="abc">Do you have problems working at heights?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.problem_working_heights==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="height" selectedValue={this.state.problem_working_heights} onChange={this.handleChange('problem_working_heights')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                    </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('problem_working_heights_reason')} value={this.state.problem_working_heights_reason}/>
                </div>
                <div>
                    <label className="abc">Do you anticipate that you will require assistance, in the form of specific aids or task modification?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.require_assistance==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="require_assistance" selectedValue={this.state.require_assistance} onChange={this.handleChange('require_assistance')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                        <Radio value="Sometimes" />Sometimes
                    </RadioGroup>
                    </div>
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('require_assistance_reason')} value={this.state.require_assistance_reason}/>
                </div>
                    <button className="next" onClick={this.completeForm}>Submit</button>
            </div>

        )
    }

}
export default ManualHandling