import React,{Component} from 'react'
import '../../App.css'
import {RadioGroup, Radio} from 'react-radio-group';

import auth from "../auth";


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
                  auth.login(() => {
                    this.props.history.push("/Home");
                  });
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
    RadiobtnStyle = (num, sptxt, type, tmpstate) => {
        return (
          <div className="custom-radio rounded">
            <input
              type="radio"
              className="custom-input"
              value={num}
              name={type}
              checked={tmpstate === num.toString()}
              onChange={this.handleChange(type)}
            />
            <span>{sptxt}</span>
          </div>
        );
      };
    render()
    {   
         const { handleChange, state } = this.props;
         

        return(
            <div id="MainDiv">
                        <div className="page-title lg">
          <div className="title">
            <h1>Manual Handling Module</h1>
          </div>
        </div>
                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you have any pain/discomfort when lifting/handling heavy objects?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_lift==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_lift",
                    this.state.pain_lift
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_lift",
                    this.state.pain_lift
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
   
                  <div>
                      <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_lift_reason')} value={this.state.pain_lift_reason}/>
                </div>
                
                </div>
                <div>
                    <label className="abc"> Do you have any pain when doing any of the following for any period of time:</label><br/>
                  
                    <div>
                    <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Walking</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_walk==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_walk",
                    this.state.pain_walk
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_walk",
                    this.state.pain_walk
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_walk",
                    this.state.pain_walk
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
     
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_walk_reason')} value={this.state.pain_walk_reason}/>
                    </div>
                    <div>
                    <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Bending</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_bend==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_bend",
                    this.state.pain_bend
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_bend",
                    this.state.pain_bend
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_bend",
                    this.state.pain_bend
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
     
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_bend_reason')} value={this.state.pain_bend_reason}/>
                    </div>
                    <div>
                    <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Squating</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_squat==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_squat",
                    this.state.pain_squat
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_squat",
                    this.state.pain_squat
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_squat",
                    this.state.pain_squat
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
  
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_squat_reason')} value={this.state.pain_squat_reason}/>
                    </div>
                    <div>
                    <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Standing</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_stand==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_stand",
                    this.state.pain_stand
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_stand",
                    this.state.pain_stand
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_stand",
                    this.state.pain_stand
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
   
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_stand_reason')} value={this.state.pain_stand_reason}/>
                    </div>
                </div>
                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you have any pain or difficulty when lifting objects below or overhead?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_lift_below==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_lift_below",
                    this.state.pain_lift_below
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_lift_below",
                    this.state.pain_lift_below
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_lift_below",
                    this.state.pain_lift_below
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
  
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_lift_below_reason')} value={this.state.pain_lift_below_reason}/>
                </div>


                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you have any pain when using a gripping motion?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.pain_grip==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "pain_grip",
                    this.state.pain_grip
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "pain_grip",
                    this.state.pain_grip
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "pain_grip",
                    this.state.pain_grip
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
  
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('pain_grip_reason')} value={this.state.pain_grip_reason}/>
                </div>


                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you experience any difficulty operating machinery?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.difficult_operating==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "difficult_operating",
                    this.state.difficult_operating
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "difficult_operating",
                    this.state.difficult_operating
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "difficult_operating",
                    this.state.difficult_operating
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('difficult_operating_reason')} value={this.state.difficult_operating_reason}/>
                </div>
                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you have any problems working in hot dry conditions, humid conditions, cold conditions, wet conditions?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.problem_working_conditions==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "problem_working_conditions",
                    this.state.problem_working_conditions
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "problem_working_conditions",
                    this.state.problem_working_conditions
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "problem_working_conditions",
                    this.state.problem_working_conditions
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('problem_working_conditions_reason')} value={this.state.problem_working_conditions_reason}/>
                </div>
                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you have problems working at heights?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.problem_working_heights==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "problem_working_heights",
                    this.state.problem_working_heights
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "problem_working_heights",
                    this.state.problem_working_heights
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "problem_working_heights",
                    this.state.problem_working_heights
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>

                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('problem_working_heights_reason')} value={this.state.problem_working_heights_reason}/>
                </div>
                <div>
                <div class="row">
            <div class="col-md-12">
              <div class="form-group custom-radio-wrapper">
              <label className="abc">Do you anticipate that you will require assistance, in the form of specific aids or task modification?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.require_assistance==="" && this.state.nameError}</label>
                <RadioGroup>
                  {this.RadiobtnStyle(
                    "No",
                    "No",
                    "require_assistance",
                    this.state.require_assistance
                  )}
                  {this.RadiobtnStyle(
                    "Yes",
                    "Yes",
                    "require_assistance",
                    this.state.require_assistance
                  )}
                                    {this.RadiobtnStyle(
                    "Sometimes",
                    "Sometimes",
                    "require_assistance",
                    this.state.require_assistance
                  )}
                </RadioGroup>
              </div>
            </div>
          </div>
 
                    <label className="abc">Provide Details</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('require_assistance_reason')} value={this.state.require_assistance_reason}/>
                </div>
                <br></br>
                <div>
          <button className="btn btn-primary btn-block" onClick={this.completeForm}>
          Submit
          </button>
        </div>
            </div>

        )
    }

}
export default ManualHandling