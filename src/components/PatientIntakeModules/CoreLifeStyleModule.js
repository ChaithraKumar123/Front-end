import React,{Component} from 'react'
import {RadioGroup, Radio} from 'react-radio-group';
import '../../App.css'
import axios from 'axios'

class CoreLifeStyleModule extends Component
{
    constructor(props) {
        super(props);
        this.initialState=
        {
            quality_sleep:'',
            smoke_cigar:'',
            water_day:'',
            exercise:'',
            recreational_hobbies:'',
            diet:'',
            sit:'',
            POBPatientID:60,
            id:'',
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
                
                quality_sleep:response.data[0].sleepQuality,
                smoke_cigar:response.data[0].smokePerDay,
                water_day:response.data[0].waterPerDay,
                exercise:response.data[0].exercise,
                recreational_hobbies:response.data[0].recreation, 
                diet:response.data[0].dietRating,
                sit:response.data[0].sitEightsHours,
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
            [input]: e 
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
    .post('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails', 
    {
        ModuleName:'Core Life Style',

        

        SleepQuality:this.state.quality_sleep,
        SmokePerDay:this.state.smoke_cigar,
        WaterPerDay:this.state.water_day,
        exercise:this.state.exercise,
        Recreation:this.state.recreational_hobbies,
        DietRating:this.state.diet,
        SitEightsHours:this.state.sit,
        POBPatientID: this.state.POBPatientID,
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
    if (val.quality_sleep==="" || val.smoke_cigar === "" ||val.water_day === "" ||val.exercise==="") 
    {
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
           
           <p id = "Stepscolor">Core Life Style Module</p>
            <div>
                <label className="abc">How do you generally rate the quality of your sleep on a scale of 1-5, with 5 being excellent?</label>
                <label style={{ fontSize: 12, color: "red" }}>{this.state.quality_sleep==="" && this.state.nameError}</label>
                <div id ="radio">
                <RadioGroup name="quality_sleep" selectedValue={this.state.quality_sleep} onChange={this.handleChange('quality_sleep')}>
                    <Radio value="1" />1
                    <Radio value="2" />2
                    <Radio value="3" />3
                    <Radio value="4" />4
                    <Radio value="5" />5
                </RadioGroup>
                </div>
            </div>
        
            <div>
                <label className="abc">Do you smoke cigarettes, cigars, or e-cigarettes?</label>
                <label style={{ fontSize: 12, color: "red" }}>{this.state.smoke_cigar==="" && this.state.nameError}</label>
                <div id = "radio">
                <RadioGroup name="smoke_cigar" selectedValue={this.state.smoke_cigar} onChange={this.handleChange('smoke_cigar')}>
                    <Radio value="No" />No
                    <Radio value="1–2 per day" />1–2 per day 
                    <Radio value="3–6 per day" />3–6 per day
                    <Radio value="More than 6 per day" />More than 6 per day
                 
                </RadioGroup>
                </div>
            </div>
            <div>
                <label className="abc">How much water do you normally drink a day?</label>
                <label style={{ fontSize: 12, color: "red" }}>{this.state.water_day==="" && this.state.nameError}</label>
                <div id = "radio">
                <RadioGroup name="water_day" selectedValue={this.state.water_day} onChange={this.handleChange('water_day')}>
                    <Radio value="None" />None
                    <Radio value="1–2 glasses" />1–2 glasses 
                    <Radio value="1 litre" />1 litre
                    <Radio value="2 litres" />2 litres
                 
                </RadioGroup>
                </div>
            </div>
            <div>
                <label className="abc">How many times per week do you exercise for more than 20 mins? </label>
                <label style={{ fontSize: 12, color: "red" }}>{this.state.exercise==="" && this.state.nameError}</label>
                <div id = "radio">
                <RadioGroup name="exercise" selectedValue={this.state.exercise} onChange={this.handleChange('exercise')}>
                    
                    <Radio value="None" />None
                    <Radio value="1–2 times" />1–2 times 
                    <Radio value="3-5 times" />3-5 times
                    <Radio value="Everyday" />Everyday
                 
                </RadioGroup>
                </div>
            </div>
            
            <div id ="radio">
            <label className = "abc">Do you have any recreational interests/hobbies?</label>
              <input className="form-control" name="givenName" type="text" value={this.state.recreational_hobbies} 
              onChange={this.handleChange('recreational_hobbies')}/>
            </div>
            <div>
                <label className="abc">How would you rate your diet on a scale of 1-10, with 10 being the best?</label>
                <label style={{ fontSize: 12, color: "red" }}>{this.state.diet==="" && this.state.nameError}</label>
                <div id = "radio">
                <RadioGroup name="diet" selectedValue={this.state.diet} onChange={this.handleChange('diet')}>
                    
                    <Radio value="1" />1
                    <Radio value="2" />2
                    <Radio value="3" />3
                    <Radio value="4" />4
                    <Radio value="5" />5
                    <Radio value="6" />6
                    <Radio value="7" />7
                    <Radio value="8" />8
                    <Radio value="9" />9
                    <Radio value="10" />10
                 
                </RadioGroup>
                </div>
            </div>
            <div>
                <label className="abc">Do you often sit more than 8hrs/day?</label>
                <label style={{ fontSize: 12, color: "red" }}>{this.state.sit==="" && this.state.nameError}</label>
                <div id = "radio">
                <RadioGroup name="sit" selectedValue={this.state.sit} onChange={this.handleChange('sit')}>
                    <Radio value="Yes" />Yes
                    <Radio value="No" />No
                </RadioGroup>
                </div>
            </div>
            <button className="next" onClick={this.completeForm}>Submit</button>
        </div>
        )
    }

   
}
export default CoreLifeStyleModule