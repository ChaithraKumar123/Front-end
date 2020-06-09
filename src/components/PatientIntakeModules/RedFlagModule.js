import React,{Component} from 'react'
import '../../App.css'
import axios from 'axios'

class RedFlagModule extends Component
{

    constructor(props) {
        super(props);
        this.initialState={
                recent_weight_gain:'',
                toilet_pain:'',
                wake_up_pain:'',
                nameError:'',
                coordination_change:'',
                POBPatientID:60,
                id:-1
        };
        this.state = this.initialState;

    }
    componentDidMount()
    {
        axios
        .get('https://localhost:44338/api/medhistorydetails',
        {
            params: { value : this.state.POBPatientID }
        }) 
        .then(response => {
            console.log(response.data[0])
            this.setState({
                
                recent_weight_gain:response.data[0].weightChanges,
                toilet_pain:response.data[0].toiletPain,
                wake_up_pain:response.data[0].nightPain,
                coordination_change:response.data[0].coordination,
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
            alert('Submitted')
            axios
            .post('https://localhost:44338/api/medhistorydetails', 
            {
                ModuleName:'Red Flag',
                WeightChanges  :this.state.recent_weight_gain,
                ToiletPain :this.state.toilet_pain,
                NightPain: this.state.wake_up_pain ,
                Coordination :this.state.coordination_change,
                POBPatientID:this.state.POBPatientID,
                POBCPMedHistoryID:this.state.id

    
            }
            
            )
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
        }
    
    
      validate = () => {
        let nameError = "";
        
        const val = this.state
        if (val.recent_weight_gain==="" ||val.toilet_pain ===""  || val.wake_up_pain==="" 
        || val.coordination_change==="") {
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
                <p id = "Stepscolor">Red Flag Questionnaire</p> 
                <div>
                    <label className="abc">Have you noticed any recent changes to your weight that you can’t explain?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.recent_weight_gain==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.recent_weight_gain === "No"} onChange={this.handleChange('recent_weight_gain')}/>No
                        <input type="radio" value="Gained Weight" checked={this.state.recent_weight_gain === "Gained Weight"} onChange={this.handleChange('recent_weight_gain')}/>Gained Weight
                        <input type="radio" value="Lost Weight" checked={this.state.recent_weight_gain === "Lost Weight"} onChange={this.handleChange('recent_weight_gain')}/>Lost Weight
                        <input type="radio" value="Don't Know" checked={this.state.recent_weight_gain === "Don't Know"} onChange={this.handleChange('recent_weight_gain')}/>Don't Know
                    </div>
                    </div>
                <div>
                <label className="abc"> Do you have any problems or pain when going to the toilet?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.toilet_pain==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.toilet_pain === "No"} onChange={this.handleChange('toilet_pain')}/>No
                        <input type="radio" value="Sometimes" checked={this.state.toilet_pain === "Sometimes"} onChange={this.handleChange('toilet_pain')}/>Sometimes
                        <input type="radio" value="Yes" checked={this.state.toilet_pain === "Yes"} onChange={this.handleChange('toilet_pain')}/>Yes
                      
                    </div>
                   
                </div>
                <div>
                <label className="abc">Do you wake up from pain at night? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.wake_up_pain==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.wake_up_pain === "No"} onChange={this.handleChange('wake_up_pain')}/>No
                        <input type="radio" value="Sometimes" checked={this.state.wake_up_pain === "Sometimes"} onChange={this.handleChange('wake_up_pain')}/>Sometimes
                        <input type="radio" value="Yes" checked={this.state.wake_up_pain === "Yes"} onChange={this.handleChange('wake_up_pain')}/>Yes
                      
                    </div>
                   
                </div>
                <div>
                <label className="abc">Have you noticed any changes in your coordination (for example dropping things, or losing your balance)? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.coordination_change==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.coordination_change === "No"} onChange={this.handleChange('coordination_change')}/>No
                        <input type="radio" value="Sometimes" checked={this.state.coordination_change === "Sometimes"} onChange={this.handleChange('coordination_change')}/>Sometimes
                        <input type="radio" value="Yes" checked={this.state.coordination_change === "Yes"} onChange={this.handleChange('coordination_change')}/>Yes
                      
                    </div>
                   
                </div>
               
                    <button className="next" onClick={this.completeForm}>Submit</button>}
            </div>

        )
    }

}
export default RedFlagModule