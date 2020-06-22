import React,{Component} from 'react'
import '../../App.css'
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const cholesteroloptions=[
    'No' ,'High blood pressure','Low blood pressure','High cholesterol','Both are high','Other'
]
const digestiveoptions=[
    'No', 'Bloating' ,'Bleeding','GORD' ,'Heartburn','IBD','Indigestion','Irregular Bowel movements' ,'Reflux' ,'Other'
]
const heartproblemsoptions=[
    'No','Angina','Previous heart attack','Heart disease','Murmer','Tachycardia','Other'
]
const breathing_options=[
    'No', 'Asthma','Emphysema','Exertional','Smoking-related','Pregnancy-related' ,'Pain with breathing','Other'
]
const medications_options=[]

class CoreMedicalHistory extends Component
{
    constructor(props) {
        super(props);
        this.initialState={
        allergies:'',
        allergies_reason:'',
        diabetes:'',
        diabetes_other_details:'',
        cholesterol:'',
        cholesterol_details:'',
        nameError:'',
        digestive:'',
        digestive_details:'',
        heart_problems:'',
        heart_problems_details:'',
        breathing_problems:'',
        breathing_problems_details:'',
        headache_details:'',
        headache:'',
        medication:'',
        medication_yes:'',
        fracture:'',
        fracture_details:'',
        high_fever:'',
        high_fever_details:'',
        disorders:'',
        disorders_details:'',
        thyroid:'',
        thyroid_details:'',
        medical_conditions:'',
        medical_conditions_details:'',
        concerns:'',
        dizziness:'',
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
                
                allergies:response.data[0].allergies.includes("-")?response.data[0].allergies.split("-")[0] : response.data[0].allergies,
                allergies_reason : response.data[0].allergies.includes("-")?response.data[0].allergies.split("-")[1] : '',
                
                diabetes:response.data[0].diabetes.includes("-")?response.data[0].diabetes.split("-")[0]:response.data[0].diabetes,
                diabetes_other_details:response.data[0].diabetes.includes("-")?response.data[0].diabetes.split("-")[1]:'',
                
                cholesterol:response.data[0].cholesterol.includes("-")?response.data[0].cholesterol.split('-')[0]:response.data[0].cholesterol,
                cholesterol_details:response.data[0].cholesterol.includes("-")?response.data[0].cholesterol.split('-')[1]:'',
                
                digestive:response.data[0].digestive.includes("-")?response.data[0].digestive.split("-")[0]: response.data[0].digestive,
                digestive_details:response.data[0].digestive.includes("-")?response.data[0].digestive.split("-")[1]: '',
                
                heart_problems:response.data[0].heart.includes("-")?response.data[0].heart.split("-")[0]:response.data[0].heart, 
                heart_problems_details:response.data[0].heart.includes("-")?response.data[0].heart.split("-")[1]:'', 

                breathing_problems:response.data[0].breath.includes("-")?response.data[0].breath.split("-")[0]:response.data[0].breath,
                breathing_problems_details:response.data[0].breath.includes("-")?response.data[0].breath.split("-")[1]:'', 

                dizziness:response.data[0].vertigo,

                headache:response.data[0].headaches.includes("-")?response.data[0].headaches.split("-")[0]:response.data[0].headaches,
                headache_details:response.data[0].headaches.includes("-")?response.data[0].headaches.split("-")[1]:'',
                 
                medication:response.data[0].medications.includes("-")?response.data[0].medications.split("-")[0]:response.data[0].medications,
                medication_yes:response.data[0].medications.includes("-")?response.data[0].medications.split("-")[1]:'',
                
                fracture:response.data[0].previousTrauma.includes("-")?response.data[0].previousTrauma.split("-")[0]:response.data[0].previousTrauma,
                fracture_details:response.data[0].previousTrauma.includes("-")?response.data[0].previousTrauma.split("-")[1]:'',

                high_fever:response.data[0].hospitalDetails.includes("-")?response.data[0].hospitalDetails.split("-")[0]:response.data[0].hospitalDetails,
                high_fever_details:response.data[0].hospitalDetails.includes("-")?response.data[0].hospitalDetails.split("-")[1]:'',
                
                disorders:response.data[0].degenerativeDisorder.includes("-")?response.data[0].degenerativeDisorder.split("-")[0]:response.data[0].degenerativeDisorder,
                disorders_details:response.data[0].degenerativeDisorder.includes("-")?response.data[0].degenerativeDisorder.split("-")[1]:'',

                thyroid:response.data[0].thyroidDisorder.includes("-")?response.data[0].thyroidDisorder.split("-")[0]:response.data[0].thyroidDisorder,
                thyroid_details:response.data[0].thyroidDisorder.includes("-")?response.data[0].thyroidDisorder.split("-")[1]:'',

                medical_conditions:response.data[0].illDisease.includes("-")?response.data[0].illDisease.split("-")[0]:response.data[0].illDisease,
                medical_conditions_details:response.data[0].illDisease.includes("-")?response.data[0].illDisease.split("-")[1]:'',
                //concerns:response.data[0].digestive,
                
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
    .post('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/medhistorydetails', 
    {
        
        
        
        Allergies:this.state.allergies==="No"?"No":this.state.allergies+"-"+this.state.allergies_reason,
        ModuleName:'Core Medical History',
        //this.state.allergies_reason
        Diabetes:this.state.diabetes_other_details!==""?this.state.diabetes + '-' + this.state.diabetes_other_details : this.state.diabetes,
        //this.state.diabetes_other_details
        Cholesterol:this.state.cholesterol_details!==""?this.state.cholesterol +"-"+this.state.cholesterol_details :this.state.cholesterol,
        //this.state.cholesterol_details
        Digestive:this.state.digestive_details!=="" ?this.state.digestive + "-"+ this.state.digestive_details : this.state.digestive,
        //this.state.digestive_details
        Heart:this.state.heart_problems_details!==""?this.state.heart_problems +"-"+this.state.heart_problems_details : this.state.heart_problems,
        //this.state.heart_problems_details
        Breath:this.state.breathing_problems_details !=="" ? this.state.breathing_problems+"-"+this.state.breathing_problems_details : this.state.breathing_problems,
        //this.state.breathing_problems_details
        //this.state.headache_details
        Vertigo:this.state.dizziness,
        Headaches:this.state.headache_details!==""? this.state.headache +'-' +this.headache_details : this.state.headache,
        
        Medications:this.state.medical_conditions==="No" ?"No" :this.state.medical_conditions + "-" + this.state.medication_yes,
        //this.state.medication_yes
        PreviousTrauma:this.state.fracture==="No"?"No" :this.state.fracture + "-" + this.state.fracture_details,
        // this.state.fracture_details
        HospitalDetails:this.state.high_fever==="No"?"No": this.state.high_fever + "-" + this.state.high_fever_details,
        // this.state.high_fever_details
        DegenerativeDisorder:this.state.disorders_details!==""?this.state.disorders + "-" + this.state.disorders_details : this.state.disorders,
        // this.state.disorders_details
        ThyroidDisorder: this.state.thyroid_details!==""?this.state.thyroid + "-"+ this.state.thyroid_details : this.state.thyroid,
        // this.state.thyroid_details
        IllDisease:this.state.medical_conditions==="No"?"No" :this.state.medical_conditions+'-'+ this.state.medical_conditions_details,
        // this.state.medical_conditions_details
        
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
    if (val.allergies===""||(val.allergies==="Yes" && val.allergies_reason==="") ||val.diabetes ==="" ||(val.diabetes==="Other" && val.diabetes_other_details==="")
    ||val.cholesterol ===""||(val.cholesterol==="Other" && val.cholesterol_details==="") || val.digestive===""
    ||(val.digestive==="Other" && val.digestive_details==="") 
    || val.heart_problems==="" ||(val.heart_problems==="Other" && val.heart_problems_details==="")||
    val.breathing_problems ===""||(val.breathing_problems==="Other" && val.breathing_problems_details==="") 
    || val.headache ==="" ||(val.headache==="Other" && val.headache_details==="")|| 
    val.medication===""|| val.fracture===""||(val.fracture==="Yes" && val.fracture_details==="") ||  
    val.high_fever===""||(val.high_fever==="Yes" && val.high_fever_details==="")||
    val.disorders===""||(val.disorders==="Other" && val.disorders_details==="")||
    val.thyroid ===""|| (val.thyroid==="Other" && val.thyroid_details==="")||
    val.medical_conditions===""||(val.medical_conditions==="Yes" && val.medical_conditions_details==="")|| val.dizziness==="") 
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
                    <p id = "Stepscolor">Core Medical History Module</p>
                    <div>
                    <label className="abc">Do you have any known allergies? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.allergies==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.allergies === "No"} onChange={this.handleChange('allergies')}/>No
                        <input type="radio" value="Yes" checked={this.state.allergies === "Yes"} onChange={this.handleChange('allergies')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.allergies==="Yes" && this.state.allergies_reason==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('allergies_reason')} value={this.state.allergies_reason}/>
                    </div>
                    <div>
                    <label className="abc">Do you suffer from Diabetes?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.diabetes==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.diabetes === "No"} onChange={this.handleChange('diabetes')}/>No
                        <input type="radio" value="Type1" checked={this.state.diabetes === "Type1"} onChange={this.handleChange('diabetes')}/>Type1
                        <input type="radio" value="Type2" checked={this.state.diabetes === "Type2"} onChange={this.handleChange('diabetes')}/>Type2
                        <input type="radio" value="Other" checked={this.state.diabetes === "Other"} onChange={this.handleChange('diabetes')}/>Other
                    </div>
                    <label className="abc">Provide Details if Other</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.diabetes==="Other" && this.state.diabetes_other_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('diabetes_other_details')} value={this.state.diabetes_other_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you have any problems with your blood pressure or cholesterol?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.cholesterol==="" && this.state.nameError}</label>
                    <Dropdown options={cholesteroloptions}  onChange={this.handleChange('cholesterol')} value={this.state.cholesterol} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.cholesterol==="Other" && this.state.cholesterol_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('cholesterol_details')} value={this.state.cholesterol_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you experience any digestive issues, such as heartburn or irritable bowel syndrome (IBS)? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.digestive==="" && this.state.nameError}</label>
                    <Dropdown options={digestiveoptions}  onChange={this.handleChange('digestive')} value={this.state.digestive} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.digestive==="Other" && this.state.digestive_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('digestive_details')} value={this.state.digestive_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you have any known heart problems? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.heart_problems==="" && this.state.nameError}</label>
                    <Dropdown options={heartproblemsoptions }  onChange={this.handleChange('heart_problems')} value={this.state.heart_problems} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.heart_problems==="Other" && this.state.heart_problems_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('heart_problems_details')} value={this.state.heart_problems_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you ever have any problems with breathing or being short of breath?  </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.breathing_problems==="" && this.state.nameError}</label>
                    <Dropdown options={breathing_options}  onChange={this.handleChange('breathing_problems')} value={this.state.breathing_problems} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.breathing_problems==="Other" && this.state.breathing_problems_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('breathing_problems_details')} value={this.state.breathing_problems_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you experience any dizziness, vertigo, or feel like the room is spinning? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.dizziness==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.dizziness === "No"} onChange={this.handleChange('dizziness')}/>No
                        <input type="radio" value="Yes" checked={this.state.dizziness === "Yes"} onChange={this.handleChange('dizziness')}/>Yes
                    </div>
                    
                    </div>
                    <div>
                    <label className="abc">Do you suffer from frequent headaches? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.headache==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.headache === "No"} onChange={this.handleChange('headache')}/>No
                        <input type="radio" value="Weekly" checked={this.state.headache === "Weekly"} onChange={this.handleChange('headache')}/>Weekly
                        <input type="radio" value="Daily" checked={this.state.headache === "Daily"} onChange={this.handleChange('headache')}/>Daily
                        <input type="radio" value="Monthly" checked={this.state.headache === "Monthly"} onChange={this.handleChange('headache')}/>Monthly
                        <input type="radio" value="Other" checked={this.state.headache === "Other"} onChange={this.handleChange('headache')}/>Other
                    </div>
                    <label className="abc">Provide Details if Other</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.headache==="Other" && this.state.headache_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('headache_details')} value={this.state.headache_details}/>
                    </div>
                    <div>
                    <label className="abc">Are you currently taking any medications or supplements?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.medication==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.medication === "No"} onChange={this.handleChange('medication')}/>No
                        <input type="radio" value="Yes" checked={this.state.medication === "Yes"} onChange={this.handleChange('medication')}/>Yes
                    </div>
                    <label className="abc">Select medication if yes </label>
                    {/* <label style={{ fontSize: 12, color: "red" }}>{this.state.headache==="Other" && this.state.headache_details==="" && this.state.nameError}</label> */}
                    <Dropdown options={medications_options}  onChange={this.handleChange('medication_yes')} value={this.state.medication_yes} placeholder="Select an option" />
                    </div>
                   
                    <div>
                    <label className="abc"> Have you previously had any bone fractures/breaks, surgeries or trauma? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.fracture==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.fracture === "No"} onChange={this.handleChange('fracture')}/>No
                        <input type="radio" value="Yes" checked={this.state.fracture === "Yes"} onChange={this.handleChange('fracture')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.fracture==="Yes" && this.state.fracture_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('fracture_details')} value={this.state.fracture_details}/>
                    </div>
                   
                    <div>
                    <label className="abc"> Have you ever been very ill eg. fever or spent the night in a hospital</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.high_fever==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.high_fever === "No"} onChange={this.handleChange('high_fever')}/>No
                        <input type="radio" value="Yes" checked={this.state.high_fever === "Yes"} onChange={this.handleChange('high_fever')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.high_fever==="Yes" && this.state.high_fever_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('high_fever_details')} value={this.state.high_fever_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you have any degenerative disorders, arthritis or rheumatism?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.disorders==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.disorders === "No"} onChange={this.handleChange('disorders')}/>No
                        <input type="radio" value="Arthritis" checked={this.state.disorders === "Arthritis"} onChange={this.handleChange('disorders')}/>Arthritis 
                        <input type="radio" value="Other" checked={this.state.disorders === "Other"} onChange={this.handleChange('disorders')}/>Other 
                    </div>
                    <label className="abc">Provide Details if Other </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.disorders==="Other" && this.state.disorders_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('disorders_details')} value={this.state.disorders_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you have a thyroid disorder?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.thyroid==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.thyroid === "No"} onChange={this.handleChange('thyroid')}/>No
                        <input type="radio" value="Overactive" checked={this.state.thyroid === "Overactive"} onChange={this.handleChange('thyroid')}/>Overactive 
                        <input type="radio" value="Underactive" checked={this.state.thyroid === "Underactive"} onChange={this.handleChange('thyroid')}/>Underactive 
                        <input type="radio" value="Other" checked={this.state.thyroid === "Other"} onChange={this.handleChange('thyroid')}/>Other   
                    </div>
                    <label className="abc">Provide Details if Other </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.thyroid==="Other" && this.state.thyroid_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('thyroid_details')} value={this.state.thyroid_details}/>
                    </div>
                    <div>
                    <label className="abc"> Have you ever had any medical conditions/diseases </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.medical_conditions==="" && this.state.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="No" checked={this.state.medical_conditions === "No"} onChange={this.handleChange('medical_conditions')}/>No
                        <input type="radio" value="Yes" checked={this.state.medical_conditions === "Yes"} onChange={this.handleChange('medical_conditions')}/>Yes
                    </div>
                    <label className="abc">Provide Details if Yes </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.medical_conditions==="Yes" && this.state.medical_conditions_details==="" && this.state.nameError}</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('medical_conditions_details')} value={this.state.medical_conditions_details}/>
                    </div>
                    <div>
                    <label className="abc">Do you have any other issues of concern?</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('concerns')} value={this.state.concerns}/> 
                    </div>
                    <button className="next" onClick={this.completeForm}>Submit</button>
            </div>
    );
}
}
export default CoreMedicalHistory
