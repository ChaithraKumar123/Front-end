import React,{Component} from 'react'
import '../../App.css'
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const personalstress= ['Never','Almost Never','Sometimes','Fairly Often','Very Often']

class CorePsychologicalModule extends Component
{

    constructor(props) {
        super(props);
        this.initialState={
                homestress:'',
                homestress_reason:'',
                personalstress:'',
                medications_impair:'',
                medications_impair_reason:'',
                depression:'',
                depression_reason:'',
                nameError:'',
                POBPatientID: 60,
                id:-1,

        };
        this.state = this.initialState;

    }

   
    componentDidMount()
    {
        axios
        .get('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails',
        {
            params: { value : this.state.POBPatientID }
        }) 
        .then(response => {
            console.log(response.data[0])
            this.setState({
                
                homestress:response.data[0].homeStress.includes("-")?response.data[0].homeStress.split("-")[0]:response.data[0].homeStress,
                homestress_reason:response.data[0].homeStress.includes("-")?response.data[0].homeStress.split("-")[1]:'',
                personalstress:response.data[0].personalStress,
                medications_impair:response.data[0].depressionMedication.includes("-")?response.data[0].depressionMedication.split("-")[0] :response.data[0].depressionMedication,
                medications_impair_reason:response.data[0].depressionMedication.includes("-")?response.data[0].depressionMedication.split("-")[1] :'',
                depression:response.data[0].depression.includes("-")?response.data[0].depression.split("-")[0] :response.data[0].depression,
                depression_reason:response.data[0].depression.includes("-")?response.data[0].depression.split("-")[1] :'',
                id:response.data[0].pobcpMedHistoryID,
                POBPatientID: response.data[0].pobPatientID
            
            
            })
            
           
           
        })
        .catch(error => {
            console.log(error)
        })
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
                [input]: e.value
              })  
        }
    }
    completeForm=event=>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
            this.setState(this.initialState);
            

            axios.post('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails', 
            {
                ModuleName:'Core Psycholoical',
                HomeStress: this.state.homestress==="No" ? "No" : this.state.homestress +"-" + this.state.homestress_reason,
                // ? this.state.homestress:this.state.homestress+ '-' + this.state.homestress_reason,
                PersonalStress:this.state.personalstress,
                Depression:this.state.depression==="No"?"No":this.state.depression + '-' + this.state.depression_reason,
                DepressionMedication:this.state.medications_impair ==="No" ?"No" :this.state.medications_impair +'-' + this.state.medications_impair_reason,
                POBPatientID: this.state.POBPatientID,
                POBCPMedHistoryID:this.state.id
            }
            
            )
            .then(response => {
                console.log(response)
                alert('Submitted')
            })
            .catch(error => {
                console.log(error)
            })

        }
    
    }
      validate = () => {
        let nameError = "";
        
        const val = this.state
        if (val.homestress==="" ||(val.homeStress==="Yes" && val.homestress_reason==="")
        ||val.personalstress ==="" ||val.medications_impair ==="" ||(val.medications_impair==="Yes" && val.medications_impair_reason==="")
        || val.depression==="" || (val.depression==="Yes" && val.depression_reason==="")) {
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
        return(
            <div id="MainDiv">
                 <p id = "Stepscolor">Core Psychological Module</p>
                 {/* <div>
                    <label className="abc">How would you best describe your mood/emotional state?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.emotional_state==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="Mostly happy" checked={this.state.emotional_state === "Mostly happy"} onChange={this.handleChange('emotional_state')}/>Mostly happy
                        <input type="radio" value="Up and down" checked={this.state.emotional_state === "Up and down"} onChange={this.handleChange('emotional_state')}/>Up and down
                        <input type="radio" value="Mostly down" checked={this.state.emotional_state === "Mostly down"} onChange={this.handleChange('emotional_state')}/>Mostly down
                        <input type="radio" value="Not sure" checked={this.state.emotional_state === "Not sure"} onChange={this.handleChange('emotional_state')}/>Not sure
                        <input type="radio" value="Other" checked={this.state.emotional_state === "Other"} onChange={this.handleChange('emotional_state')}/>Other
                    </div>
                    </div>
                   <div>
                    <label className="abc">Over the past two weeks, how would you rate your stress levels? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.stress_levels_week==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="High" checked={this.state.stress_levels_week === "High"} onChange={this.handleChange('stress_levels_week')}/>High
                        <input type="radio" value="Medium" checked={this.state.stress_levels_week === "Medium"} onChange={this.handleChange('stress_levels_week')}/>Medium
                        <input type="radio" value="Low" checked={this.state.stress_levels_week === "Low"} onChange={this.handleChange('stress_levels_week')}/>Low
                        <input type="radio" value="None" checked={this.state.stress_levels_week === "None"} onChange={this.handleChange('stress_levels_week')}/>None
                    </div>
                    </div>
                    <div>
                    <label className="abc">How about your stress levels over the past 3 months? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.stress_levels_month==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="High" checked={this.state.stress_levels_month === "High"} onChange={this.handleChange('stress_levels_month')}/>High
                        <input type="radio" value="Medium" checked={this.state.stress_levels_month === "Medium"} onChange={this.handleChange('stress_levels_month')}/>Medium
                        <input type="radio" value="Low" checked={this.state.stress_levels_month === "Low"} onChange={this.handleChange('stress_levels_month')}/>Low
                        <input type="radio" value="None" checked={this.state.stress_levels_month === "None"} onChange={this.handleChange('stress_levels_month')}/>None
                    </div>
                    </div>*/}
                    <div> 
                    <label className="abc">Are there any problems (eg. illness or stress) at home?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.homestress==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.homestress === "No"} onChange={this.handleChange('homestress')}/>No
                        <input type="radio" value="Yes" checked={this.state.homestress === "Yes"} onChange={this.handleChange('homestress')}/>Yes
                    </div>
                   
                    <label className="abc">Provide Details if Yes</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.homestress==="Yes" &&this.state.homestress_reason==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('homestress_reason')} value={this.state.homestress_reason}/>
                 
                    </div>
                    <div> 
                    <label className="abc">How often do you feel nervous and “stressed”? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.personalstress==="" && this.state.nameError}</label>
                    <Dropdown options={personalstress}  onChange={this.handleChange('personalstress')} value={this.state.personalstress} placeholder="Select an option" />
                    </div>
                    <div> 
                    <label className="abc">Do you have history of Depression, anxiety or nervous disorder?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.depression==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.depression === "No"} onChange={this.handleChange('depression')}/>No
                        <input type="radio" value="Yes" checked={this.state.depression === "Yes"} onChange={this.handleChange('depression')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.depression==="Yes" &&this.state.depression_reason==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('depression_reason')} value={this.state.depression_reason}/>
                    </div>
                    <div>
                    <label className="abc">Do you take medications that may impair your ability?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.medications_impair==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.medications_impair === "No"} onChange={this.handleChange('medications_impair')}/>No
                        <input type="radio" value="Yes" checked={this.state.medications_impair === "Yes"} onChange={this.handleChange('medications_impair')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.medications_impair==="Yes" &&this.state.medications_impair_reason==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('medications_impair_reason')} value={this.state.medications_impair_reason}/>
                    </div>
                    <button className="next" onClick={this.completeForm}>Submit</button>}
            </div>

        )
    }

}
export default CorePsychologicalModule