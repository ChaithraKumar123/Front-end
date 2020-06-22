import React,{Component} from 'react'
import '../../App.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {RadioGroup, Radio} from 'react-radio-group';
import axios from 'axios'
const type_health_practitioner_options = ['GP','Chiro','Physio']

class MusculoskeletonModule extends Component
{
    constructor(props) {
        super(props);
        this.initialState=
        {
            
            NeckPain:'',
            NeckPainDate:'',
            NeckPainDateApprox:false,
            NeckPainConsulted:'',
            Neck_type_health_practitioner:'',
            NeckPainTimeOffWork:'',
            NeckPainIntervention:'',
            NeckPainIntervention_details:'',
            NeckPainStatus:'',

            BackPain:'',
            BackPainDate:'',
            BackPainDateApprox:false,
            BackPainConsulted:'',
            Back_type_health_practitioner:'',
            BackPainTimeOffWork:'',
            BackPainIntervention:'',
            BackPainIntervention_details:'',
            BackPainStatus:'',
            

            SHULPain:'',
            SHULPainDate:'',
            SHULPainDateApprox:false,
            SHULPainConsulted:'',
            SHUL_type_health_practitioner:'',
            SHULPainTimeOffWork:'',
            SHULPainIntervention:'',
            SHULPainIntervention_details:'',
            SHULPainStatus:'',

            HILLPain:'',
            HILLPainDate:'',
            HILLPainDateApprox:false,
            HILLPainConsulted:'',
            HILL_type_health_practitioner:'',
            HILLPainTimeOffWork:'',
            HILLPainIntervention:'',
            HILLPainIntervention_details:'',
            HILLPainStatus:'',

            MSKID : -1,

           
        };
        this.state = this.initialState;
    }

 
    componentDidMount()
    {
        
        axios
        .get('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/mskdetails',
        {
            params: { value : 60 }
        }) 
        .then(response => {
            console.log(response.data[0])
            this.setState({
                MSKID:response.data[0].pobMedHistoryMSKID
            })
            if(response.data[0].neckPain==="Yes")
            {
            this.setState({
                NeckPain:response.data[0].neckPain,
                NeckPainDate:response.data[0].neckPainDate.split("T")[0],
                NeckPainDateApprox:response.data[0].neckPainDateApprox,
                NeckPainConsulted:response.data[0].neckPainConsulted==="No" ? response.data[0].neckPainConsulted :response.data[0].neckPainConsulted.split("-")[0],
                Neck_type_health_practitioner:response.data[0].neckPainConsulted==="No" ? '': response.data[0].neckPainConsulted.split("-")[1],
                NeckPainTimeOffWork:response.data[0].neckPainTimeOffWork,
                NeckPainIntervention:response.data[0].neckPainIntervention==="No"?response.data[0].neckPainIntervention:response.data[0].neckPainIntervention.split('-')[0],
                NeckPainIntervention_details:response.data[0].neckPainIntervention==="No"?'':response.data[0].neckPainIntervention.split('-')[1],
                //NeckPainIntervention_details:'',
                NeckPainStatus:response.data[0].neckPainStatus,})
            }
            else
            { 
                this.setState({NeckPain:response.data[0].neckPain
                })

            }
            if(response.data[0].backPain==="Yes")
            {
            this.setState({
                BackPain:response.data[0].backPain,
                BackPainDate:response.data[0].backPainDate.split("T")[0],
                BackPainDateApprox:response.data[0].backPainDateApprox,
                BackPainConsulted:response.data[0].backPainConsulted==="No" ? response.data[0].backPainConsulted :response.data[0].backPainConsulted.split("-")[0],
                Back_type_health_practitioner:response.data[0].backPainConsulted==="No" ? '': response.data[0].backPainConsulted.split("-")[1],
                //Neck_type_health_practitioner:response.data[0],
                BackPainTimeOffWork:response.data[0].backPainTimeOffWork,
                BackPainIntervention:response.data[0].backPainIntervention==="No"?response.data[0].backPainIntervention:response.data[0].backPainIntervention.split('-')[0],
                BackPainIntervention_details:response.data[0].backPainIntervention==="No"?'':response.data[0].backPainIntervention.split('-')[1],

                //NeckPainIntervention_details:'',
                BackPainStatus:response.data[0].backPainStatus})
            }
            else
            { 
                this.setState({BackPain:response.data[0].backPain})

            }
            if(response.data[0].shulPain==="Yes")
            {
            this.setState({
                SHULPain:response.data[0].shulPain,
                SHULPainDate:response.data[0].shulPainDate.split("T")[0],
                SHULPainDateApprox:response.data[0].shulPainDateApprox,
                SHULPainConsulted:response.data[0].shulPainConsulted==="No"?response.data[0].shulPainConsulted:response.data[0].shulPainConsulted.split("-")[0],
                SHUL_type_health_practitioner:response.data[0].shulPainConsulted==="No"?'':response.data[0].shulPainConsulted.split("-")[1],

                //Neck_type_health_practitioner:response.data[0],
                SHULPainTimeOffWork:response.data[0].shulPainTimeOffWork,
                SHULPainIntervention:response.data[0].shulPainIntervention==="No"?response.data[0].shulPainIntervention:response.data[0].shulPainIntervention.split("-")[0],
                SHULPainIntervention_details:response.data[0].shulPainIntervention==="No"?'':response.data[0].shulPainIntervention.split("-")[1],

                //NeckPainIntervention_details:'',
                SHULPainStatus:response.data[0].shulPainStatus})
            }
            else
            { 
                this.setState({SHULPain:response.data[0].shulPain})

            }
            if(response.data[0].hillPain==="Yes")
            {
            this.setState({
                HILLPain:response.data[0].hillPain,
                HILLPainDate:response.data[0].hillPainDate.split("T")[0],
                HILLPainDateApprox:response.data[0].hillPainDateApprox,
                HILLPainConsulted:response.data[0].hillPainConsulted==="No"?response.data[0].hillPainConsulted:response.data[0].hillPainConsulted.split('-')[0],
                HILL_type_health_practitioner:response.data[0].hillPainConsulted==="No"?'':response.data[0].hillPainConsulted.split('-')[1],
                HILLPainTimeOffWork:response.data[0].hillPainTimeOffWork,
                HILLPainIntervention:response.data[0].hillPainIntervention==="No"?response.data[0].hillPainIntervention :response.data[0].hillPainIntervention.split('-')[0],
                HILLPainIntervention_details:response.data[0].hillPainIntervention==="No"?'':response.data[0].hillPainIntervention.split('-')[1],
                HILLPainStatus:response.data[0].hillPainStatus})
            }
            else
            { 
                this.setState({HILLPain:response.data[0].hillPain})

            }



        
           
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    handleChangeCheck = input =>e=>
    {
        var name =e.target.name
                this.setState(
                    {
                        [name] :e.target.checked 
                    }
                )
        
            
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
handleChangeDrop= input=>e=>
{
  
   
        this.setState({
            [input]: e.value
          })  
    
}
completeForm=event=>{
    event.preventDefault();
    const isValid = this.validate();
    if (isValid)
    {
        
    alert('Submitted')
    // check if dates are null
   


    
    axios.post('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/mskdetails',
    {
            NeckPain:this.state.NeckPain,
            NeckPainDate:this.state.NeckPain==="No"?'':this.state.NeckPainDate,
            NeckPainDateApprox:this.state.NeckPain==="No"?'false':this.state.NeckPainDateApprox,
            NeckPainConsulted:this.state.NeckPain==="No"?'':(this.state.NeckPainConsulted==="No"?"No" :this.state.NeckPainConsulted +'-' + this.state.Neck_type_health_practitioner),
            //Neck_type_health_practitioner:this.state.NeckPain==="No"?'':this.state.Neck_type_health_practitioner,
            NeckPainTimeOffWork:this.state.NeckPain==="No"?'':this.state.NeckPainTimeOffWork,
            NeckPainIntervention:this.state.NeckPain==="No"?'':(this.state.NeckPainIntervention==="No"?"No": this.state.NeckPainIntervention +'-' +this.state.NeckPainIntervention_details),
            //NeckPainIntervention_details:this.state.NeckPain==="No"?'':this.state.NeckPainIntervention_details,
            NeckPainStatus:this.state.NeckPain==="No"?'':this.state.NeckPainStatus,

            BackPain:this.state.BackPain,
            BackPainDate:this.state.BackPain==="No"?'':this.state.BackPainDate,
            BackPainDateApprox:this.state.BackPain==="No"?'false':this.state.BackPainDateApprox,
            BackPainConsulted:this.state.BackPain==="No"?'':(this.state.BackPainConsulted==="No"?"No":this.state.BackPainConsulted+'-'+this.state.Back_type_health_practitioner),
            //Back_type_health_practitioner:this.state.BackPain==="No"?'':this.state.Back_type_health_practitioner,
            BackPainTimeOffWork:this.state.BackPain==="No"?'':this.state.BackPainTimeOffWork,
            BackPainIntervention:this.state.BackPain==="No"?'':(this.state.BackPainIntervention==="No"?"No" :this.state.BackPainIntervention +'-' + this.state.HILLPainIntervention_details),
           // BackPainIntervention_details:this.state.BackPain==="No"?'':this.state.BackPainIntervention_details,
            BackPainStatus:this.state.BackPain==="No"?'':this.state.BackPainStatus,
            

            SHULPain:this.state.SHULPain,
            SHULPainDate:this.state.SHULPain==="No"?'':this.state.SHULPainDate,
            SHULPainDateApprox:this.state.SHULPain==="No"?'false':this.state.SHULPainDateApprox,
            SHULPainConsulted:this.state.SHULPain==="No"?'':(this.state.shulPainConsulted==="No"? "No":this.state.SHULPainConsulted +'-' +this.state.SHUL_type_health_practitioner),
            //SHUL_type_health_practitioner:this.state.SHULPain==="No"?'':this.state.SHUL_type_health_practitioner,
            SHULPainTimeOffWork:this.state.SHULPain==="No"?'':this.state.SHULPainTimeOffWork,
            SHULPainIntervention:this.state.SHULPain==="No"?'':(this.state.SHULPainIntervention ==="No" ? "No":this.state.SHULPainIntervention +'-'+this.state.SHULPainIntervention_details),
            //SHULPainIntervention_details:this.state.SHULPain==="No"?'':this.state.SHULPainIntervention_details,
            SHULPainStatus:this.state.SHULPain==="No"?'':this.state.SHULPainStatus,

            HILLPain:this.state.HILLPain,
            HILLPainDate:this.state.HILLPain==="No"?'':this.state.HILLPainDate,
            HILLPainDateApprox:this.state.HILLPain==="No"?'false':this.state.HILLPainDateApprox,
            HILLPainConsulted:this.state.HILLPain==="No"?'':(this.state.HILLPainConsulted==="No"?"No":this.state.HILLPainConsulted +'-' + this.state.HILL_type_health_practitioner),
            //HILL_type_health_practitioner:this.state.HILLPain==="No"?'':this.state.HILL_type_health_practitioner,
            HILLPainTimeOffWork:this.state.HILLPain==="No"?'':this.state.HILLPainTimeOffWork,
            HILLPainIntervention:this.state.HILLPain==="No"?'':(this.state.HILLPainIntervention==="No" ? "No" :this.state.HILLPainIntervention + '-' + this.state.HILLPainIntervention_details),
            //HILLPainIntervention_details:this.state.HILLPain==="No"?'':this.state.HILLPainIntervention_details,
            HILLPainStatus:this.state.HILLPain==="No"?'':this.state.HILLPainStatus,

            MSKID : this.state.MSKID,

        
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
    if (
    val.NeckPain==="" || (val.NeckPain==="Yes" && (val.NeckPainDate ==="" || val.NeckPainConsulted===""||
    (val.NeckPainConsulted==="Yes"&&val.Neck_type_health_practitioner==="") || val.NeckPainTimeOffWork==="" 
    || val.NeckPainIntervention==="" || (val.NeckPainIntervention==="Yes" && val.NeckPainIntervention_details==="")||val.NeckPainStatus===""))
    ||val.BackPain==="" || (val.BackPain==="Yes" && (val.BackPainDate ==="" || val.BackPainConsulted===""||
    (val.BackPainConsulted==="Yes"&& val.Back_type_health_practitioner==="") || val.BackPainTimeOffWork==="" || 
    val.BackPainIntervention===""||(val.BackPainIntervention==="Yes" && val.BackPainIntervention_details==="") || val.BackPainStatus===""))
    ||val.SHULPain==="" || (val.SHULPain==="Yes" && (val.SHULPainDate ==="" || val.SHULPainConsulted===""||
    (val.SHULPainConsulted==="Yes"&& val.SHUL_type_health_practitioner==="") || val.SHULPainTimeOffWork==="" || 
    val.SHULPainIntervention===""||(val.SHULPainIntervention==="Yes" && val.SHULPainIntervention_details==="") || val.SHULPainStatus===""))
    ||val.HILLPain==="" || (val.HILLPain==="Yes" && (val.HILLPainDate ==="" || val.HILLPainConsulted===""||
    (val.HILLPainConsulted==="Yes"&&val.HILL_type_health_practitioner==="")  || val.HILLPainTimeOffWork==="" || val.HILLPainIntervention==="" || 
    (val.HILLPainIntervention==="Yes" && val.HILLPainIntervention_details==="")|| val.HILLPainStatus===""
    ))
    )
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
            <p id = "Stepscolor">Musculoskeletal Pain Questionnaire</p> 
              <div>
                <label className="abc">Have you had or have you ever had pain or injury to your:</label>
                <div>
                    <label className="abc">Neck</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPain==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="NeckPain" selectedValue={this.state.NeckPain} onChange={this.handleChange('NeckPain')}>
                            <Radio value="Yes" />Yes
                            <Radio value="No" />No
                    </RadioGroup>
                    </div>   
                    {
                    this.state.NeckPain==="Yes" &&
                    <div className="rounddiv">
                        
                        <div id="radio">
                        <label className="abc">Last date occurred</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPainDate===""  && this.state.nameError}</label>
                        <input className="form-control" id="NeckPainDate" name="NeckPainDate" type="date" 
                        placeholder="last date occurred" value={this.state.NeckPainDate} onChange={this.handleChange('NeckPainDate')}></input>
                        <input name="NeckPainDateApprox" type="checkbox" checked={this.state.NeckPainDateApprox} onChange={this.handleChangeCheck('NeckPainDateApprox')}/> Select if Last occurred date is approximate
                        </div>
                        
                        <div >
                        <label className="abc">Did you ever consult a health practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPainConsulted==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="NeckPainConsulted" selectedValue={this.state.NeckPainConsulted} onChange={this.handleChange('NeckPainConsulted')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        { 
                        this.state.NeckPainConsulted==="Yes" &&
                        <div>
                        <label className="abc">Type of Health Practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{ this.state.NeckPainConsulted==="Yes" &&this.state.Neck_type_health_practitioner==="" && this.state.nameError}</label>
                        <Dropdown options={type_health_practitioner_options}  onChange={this.handleChangeDrop('Neck_type_health_practitioner')} value={this.state.Neck_type_health_practitioner} placeholder="Select an option" />
                        </div> 
                        }
                        </div>
                        <div>
                        <label className="abc">Did it require time off work</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPainTimeOffWork==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="NeckPainTimeOffWork" selectedValue={this.state.NeckPainTimeOffWork} onChange={this.handleChange('NeckPainTimeOffWork')}>
                                <Radio value="No" />No
                                <Radio value="A day" />A day
                                <Radio value="Less than a week" />Less than a week
                                <Radio value="A week to a month" />A week to a month
                                <Radio value="More than a month" />More than a month
                            </RadioGroup>
                        </div>
                        </div>
                        <div>
                        <label className="abc">Was the intervention required? eg, imaging, medication</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPainIntervention==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="NeckPainIntervention" selectedValue={this.state.NeckPainIntervention} onChange={this.handleChange('NeckPainIntervention')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        <label className="abc">Provide Details if Yes</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPainIntervention_details==="" &&this.state.NeckPainIntervention==="Yes" && this.state.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('NeckPainIntervention_details')} value={this.state.NeckPainIntervention_details}/>
                        </div>
                        <div>
                        <label className="abc">Is it an ongoing or recurring problem?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.NeckPainStatus==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="NeckPainStatus" selectedValue={this.state.NeckPainStatus} onChange={this.handleChange('NeckPainStatus')}>
                                <Radio value="No" />No
                                <Radio value="Ongoing" />Ongoing
                                <Radio value="Recurring" />Recurring
                            </RadioGroup>
                        </div>
                        </div>
                    </div>
                    }   
              </div>
                
                <div>
                <label className="abc">Back</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPain==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="BackPain" selectedValue={this.state.BackPain} onChange={this.handleChange('BackPain')}>
                            <Radio value="Yes" />Yes
                            <Radio value="No" />No
                    </RadioGroup>
                    </div>   
                    {
                    this.state.BackPain==="Yes" &&
                    <div className="rounddiv">
                        <div>
                        <label className="abc">Approximate last date occurred</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPainDate===""&& this.state.nameError}</label>
                        <input className="form-control" id="BackPainDate" name="BackPainDate" type="date" 
                        placeholder="last date occurred" value={this.state.BackPainDate} onChange={this.handleChange('BackPainDate')}/>
                        <input name="BackPainDateApprox" type="checkbox" checked={this.state.BackPainDateApprox} onChange={this.handleChangeCheck('BackPainDateApprox')}/> Select if Last occurred date is approximate
                        </div>
                        <div>
                        <label className="abc">Did you ever consult a health practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPainConsulted==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="BackPainConsulted" selectedValue={this.state.BackPainConsulted} onChange={this.handleChange('BackPainConsulted')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        { 
                        this.state.BackPainConsulted==="Yes" &&
                        <div>
                        <label className="abc">Type of Health Practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{ this.state.BackPainConsulted==="Yes" && this.state.Back_type_health_practitioner==="" && this.state.nameError}</label>
                        <Dropdown options={type_health_practitioner_options}  onChange={this.handleChangeDrop('Back_type_health_practitioner')} value={this.state.Back_type_health_practitioner} placeholder="Select an option" />
                        </div> 
                        }
                        </div>
                        <div>
                        <label className="abc">Did it require time off work</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPainTimeOffWork==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="BackPainTimeOffWork" selectedValue={this.state.BackPainTimeOffWork} onChange={this.handleChange('BackPainTimeOffWork')}>
                                <Radio value="No" />No
                                <Radio value="A day" />A day
                                <Radio value="Less than a week" />Less than a week
                                <Radio value="A week to a month" />A week to a month
                                <Radio value="More than a month" />More than a month
                            </RadioGroup>
                        </div>
                        </div>
                        <div>
                        <label className="abc">Was the intervention required? eg, imaging, medication</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPainIntervention==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="BackPainIntervention" selectedValue={this.state.BackPainIntervention} onChange={this.handleChange('BackPainIntervention')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        <label className="abc">Provide Details if Yes</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPainIntervention==="Yes"&&this.state.BackPainIntervention_details==="" && this.state.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('BackPainIntervention_details')} value={this.state.BackPainIntervention_details}/>
                        </div>
                        <div>
                        <label className="abc">Is it an ongoing or recurring problem?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.BackPainStatus==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="BackPainStatus" selectedValue={this.state.BackPainStatus} onChange={this.handleChange('BackPainStatus')}>
                                <Radio value="No" />No
                                <Radio value="Ongoing" />Ongoing
                                <Radio value="Recurring" />Recurring
                            </RadioGroup>
                        </div>
                        </div>
                    </div>
                    } 
                </div>
              
                <div>
                <label className="abc">Shoulders and Upper Limbs</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPain==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="SHULPain" selectedValue={this.state.SHULPain} onChange={this.handleChange('SHULPain')}>
                            <Radio value="Yes" />Yes
                            <Radio value="No" />No
                    </RadioGroup>
                    </div>   
                    {
                    this.state.SHULPain==="Yes" &&
                    <div className="rounddiv">
                        <div>
                        <label className="abc">Approximate last date occurred</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainDate===""&& this.state.nameError}</label>
                        <input className="form-control" id="SHULPainDate" name="SHULPainDate" type="date" 
                        placeholder="last date occurred" value={this.state.SHULPainDate} onChange={this.handleChange('SHULPainDate')}/>
                        <input name="SHULPainDateApprox" type="checkbox" checked={this.state.SHULPainDateApprox} onChange={this.handleChangeCheck('SHULPainDateApprox')}/> Select if Last occurred date is approximate
                        </div>
                        <div>
                        <label className="abc">Did you ever consult a health practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainConsulted==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="SHULPainConsulted" selectedValue={this.state.SHULPainConsulted} onChange={this.handleChange('SHULPainConsulted')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        { 
                        this.state.SHULPainConsulted==="Yes" &&
                        <div>
                        <label className="abc">Type of Health Practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainConsulted==="Yes" && this.state.SHUL_type_health_practitioner==="" && this.state.nameError}</label>
                        <Dropdown options={type_health_practitioner_options}  onChange={this.handleChangeDrop('SHUL_type_health_practitioner')} value={this.state.SHUL_type_health_practitioner} placeholder="Select an option" />
                        </div> 
                        }
                        </div>
                        <div>
                        <label className="abc">Did it require time off work</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainTimeOffWork==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="SHULPainTimeOffWork" selectedValue={this.state.SHULPainTimeOffWork} onChange={this.handleChange('SHULPainTimeOffWork')}>
                                <Radio value="No" />No
                                <Radio value="A day" />A day
                                <Radio value="Less than a week" />Less than a week
                                <Radio value="A week to a month" />A week to a month
                                <Radio value="More than a month" />More than a month
                            </RadioGroup>
                        </div>
                        </div>
                        <div>
                        <label className="abc">Was the intervention required? eg, imaging, medication</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainIntervention==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="SHULPainIntervention" selectedValue={this.state.SHULPainIntervention} onChange={this.handleChange('SHULPainIntervention')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        <label className="abc">Provide Details if Yes</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainIntervention==="Yes"&&this.state.SHULPainIntervention_details==="" && this.state.nameError}</label>

                        <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('SHULPainIntervention_details')} value={this.state.SHULPainIntervention_details}/>
                        </div>
                        <div>
                        <label className="abc">Is it an ongoing or recurring problem?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.SHULPainStatus==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="SHULPainStatus" selectedValue={this.state.SHULPainStatus} onChange={this.handleChange('SHULPainStatus')}>
                                <Radio value="No" />No
                                <Radio value="Ongoing" />Ongoing
                                <Radio value="Recurring" />Recurring
                            </RadioGroup>
                        </div>
                        </div>
                    </div>
                    } 

                </div>
                
                <div>
                <label className="abc">Hips and Lower Limbs</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPain==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="HILLPain" selectedValue={this.state.HILLPain} onChange={this.handleChange('HILLPain')}>
                            <Radio value="Yes" />Yes
                            <Radio value="No" />No
                    </RadioGroup>
                    </div>   
                    {
                    this.state.HILLPain==="Yes" &&
                    <div className="rounddiv">
                        <div>
                        <label className="abc">Approximate last date occurred</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPainDate===""&& this.state.nameError}</label>
                        <input className="form-control" id="HILLPainDate" name="HILLPainDate" type="date" 
                        placeholder="last date occurred" value={this.state.HILLPainDate} onChange={this.handleChange('HILLPainDate')}/>
                        <input name="HILLPainDateApprox" type="checkbox" checked={this.state.HILLPainDateApprox} onChange={this.handleChangeCheck('HILLPainDateApprox')}/> Select if Last occurred date is approximate
                        </div>
                        <div>
                        <label className="abc">Did you ever consult a health practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPainConsulted==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="HILLPainConsulted" selectedValue={this.state.HILLPainConsulted} onChange={this.handleChange('HILLPainConsulted')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        { 
                        this.state.HILLPainConsulted==="Yes" &&
                        <div>
                        <label className="abc">Type of Health Practitioner</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPainConsulted==="Yes" && this.state.HILL_type_health_practitioner==="" && this.state.nameError}</label>
                        <Dropdown options={type_health_practitioner_options}  onChange={this.handleChangeDrop('HILL_type_health_practitioner')} value={this.state.HILL_type_health_practitioner} placeholder="Select an option" />
                        </div> 
                        }
                        </div>
                        <div>
                        <label className="abc">Did it require time off work</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPainTimeOffWork==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="HILLPainTimeOffWork" selectedValue={this.state.HILLPainTimeOffWork} onChange={this.handleChange('HILLPainTimeOffWork')}>
                                <Radio value="No" />No
                                <Radio value="A day" />A day
                                <Radio value="Less than a week" />Less than a week
                                <Radio value="A week to a month" />A week to a month
                                <Radio value="More than a month" />More than a month
                            </RadioGroup>
                        </div>
                        </div>
                        <div>
                        <label className="abc">Was the intervention required? eg, imaging, medication</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPainIntervention==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="HILLPainIntervention" selectedValue={this.state.HILLPainIntervention} onChange={this.handleChange('HILLPainIntervention')}>
                                <Radio value="Yes" />Yes
                                <Radio value="No" />No
                            </RadioGroup>
                        </div>
                        <label className="abc">Provide Details if Yes</label>
                        <label style={{ fontSize: 12, color: "red" }}>{(this.state.HILLPainIntervention==="Yes" && this.state.HILLPainIntervention_details==="") && this.state.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('HILLPainIntervention_details')} value={this.state.HILLPainIntervention_details}/>
                        </div>
                        <div>
                        <label className="abc">Is it an ongoing or recurring problem?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{this.state.HILLPainStatus==="" && this.state.nameError}</label>
                        <div id = "radio">
                            <RadioGroup name="HILLPainStatus" selectedValue={this.state.HILLPainStatus} onChange={this.handleChange('HILLPainStatus')}>
                                <Radio value="No" />No
                                <Radio value="Ongoing" />Ongoing
                                <Radio value="Recurring" />Recurring
                            </RadioGroup>
                        </div>
                        </div>
                    </div>
                    }    
                </div>
              
              </div>
              
            <button className="next" onClick={this.completeForm}>Submit</button>
        </div>
        )
    }

   
}
export default MusculoskeletonModule
