import React,{Component} from 'react'
import '../../App.css'
import {RadioGroup, Radio} from 'react-radio-group';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const respiratory_options = ['No','Asthma','Emphysema', 'Bronchitis', 'Pneumonia', 'Tuberculosis' ,'Industrial lung disease' ,'Other']
const hearing_options=['No','Hearing Loss','Ringing','Tinnitus','Perforation', 'Chronic Ear Infections','Other' ]
const eye_disorder_options=['No','Glaucoma','Cataracts' ,'Lazy eye', 'Double Vision', 'Short Sighted','Long Sighted','Other']
const consciousness_options=['No','Blackouts','Fits','Fainting','Epilepsy','Spasms','Giddiness','Head Injury', 'Concussion', 'Other']
class IndustrySpecificModule extends Component
{

    constructor(props) {
        super(props);
        this.initialState={
                respiratory:'',
                respiratory_details:'',
                hearing:'',
                hearing_details:'',
                eye_disorder:'',
                eye_disorder_details:'',
                hernia:'',
                hernia_details:'',
                food_borne:'',
                food_borne_details:'',
                skin_disease:'',
                skin_disease_details:'',
                exposed:'',
                exposed_details:'',
                varicose_veins:'',
                varicose_veins_details:'',
                consciousness:'',
                consciousness_details:'',
                restricted_activities_details:'',
                restricted_activities:'',
                regular_time_away:'',
                regular_time_away_details:'',
                work_illness_details:'',
                work_illness:'',
                work_compensation:'',
                work_compensation_details:'',
                functional_assessment:'',
                functional_assessment_details:'',
                nameError:''
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
        else if (e.value)
        {
            this.setState({
                [input]: e.value
              })  
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
                RespiratoryIllness:  this.state.respiratory === "No" ? "" : this.state.respiratory + ": " + this.state.respiratory_details,
                Hearing:this.state.hearing === "No"  ? "" :this.state.hearing + ": " + this.state.hearing_details ,
                Eye: this.state.eye_disorder === "No" ? "" : this.state.eye_disorder + ": " + this.state.eye_disorder_details,
                Hernia: this.state.hernia_details,
                FoodBorneIllness: this.state.food_borne_details,
                SkinDisease: this.state.skin_disease_details,
                ExposedChemicals: this.state.exposed === "Chemicals" ? this.state.exposed_details : "",
                ExposedAsbestos: this.state.exposed === "Asbestos" ? this.state.exposed_details : "",
                ExposedNoise: this.state.exposed === "Noise" ? this.state.exposed_details : "",
                ExposedRadiation: this.state.exposed === "Radiation" ? this.state.exposed_details : "",
                ExposedOtherDust: this.state.exposed === "Dust" ? this.state.exposed_details : "",
                OtherCondition: this.state.exposed === "Other" ? this.state.exposed_details : "",
                LossOfConsciousness: this.state.consciousness + ": " + this.state.consciousness_details ,
                Varicose: this.state.varicose_veins_details ,
                RestrictedActivities: this.state.restricted_activities_details,
                TimeAwayReason: this.state.regular_time_away_details,
                InjuryFromWork: this.state.work_illness_details,
                MedicalConditionsEffectingTest: this.state.functional_assessment_details
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
            fetch("https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/industryspecific", requestOptions)
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
        if (val.respiratory===""||val.hearing===""|| val.eye_disorder===""|val.hernia===""||val.food_borne===""||
        val.skin_disease===""||val.exposed===""||val.consciousness===""||val.restricted_activities===""||val.regular_time_away===""||
        val.work_illness===""||val.work_compensation===""||val.functional_assessment===""||val.varicose_veins==="") 
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
        const {  state } = this.props;

        return(
            <div id="MainDiv">
                <p id = "Stepscolor">Industry Specific  Module</p> 
                <div>
                    <label className="abc">Do you have a history of Severe respiratory illness, eg asthma, emphysema, bronchitis, pneumonia, tuberculosis, industrial lung disease or others?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.respiratory==="" && this.state.nameError}</label>
                    <Dropdown options={respiratory_options}  onChange={this.handleChange('respiratory')} value={this.state.respiratory} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('respiratory_details')} value={this.state.respiratory_details}/>
                </div>
                <div>
                    <label className="abc">Do you currently or have history of Hearing problem or ear disease? eg. hearing loss, ringing/tinnitus, perforation, chronic ear infections?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.hearing==="" && this.state.nameError}</label>
                    <Dropdown options={hearing_options}  onChange={this.handleChange('hearing')} value={this.state.hearing} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('hearing_details')} value={this.state.hearing_details}/>
                </div>
                <div>
                    <label className="abc">Do you currently or in the past have an eye disorder,  such as glaucoma, cataracts, lazy eye, double vision, including the need for glasses or contacts?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.eye_disorder==="" && this.state.nameError}</label>
                    <Dropdown options={eye_disorder_options}  onChange={this.handleChange('eye_disorder')} value={this.state.eye_disorder} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('eye_disorder_details')} value={this.state.eye_disorder_details}/>
                </div>
                <div>
                    <label className="abc">Do you currently or in the past had a hernia?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.hernia==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="hernia" selectedValue={this.state.hernia} onChange={this.handleChange('hernia')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('hernia_details')} value={this.state.hernia_details}/>
                </div>
                <div>
                    <label className="abc">Are you currently suffering from any food-borne illness eg gastroenteritis?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.food_borne==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="food_borne" selectedValue={this.state.food_borne} onChange={this.handleChange('food_borne')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('food_borne_details')} value={this.state.food_borne_details}/>
                </div>
                <div>
                    <label className="abc">Do you have any persistent or recurrent skin disease?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.skin_disease==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="skin_disease" selectedValue={this.state.skin_disease} onChange={this.handleChange('skin_disease')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('skin_disease_details')} value={this.state.skin_disease_details}/>
                </div>
                <div>
                    <label className="abc"> Have you ever been regularly exposed to</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.exposed==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="exposed" selectedValue={this.state.exposed} onChange={this.handleChange('exposed')}>
                        <Radio value="No" />No
                        <Radio value="Chemicals" />Chemicals
                        <Radio value="Asbestos" />Asbestos
                        <Radio value="Noise" />Noise
                        <Radio value="Radiation" />Radiation
                        <Radio value="Dust" />Dust
                        <Radio value="Other" />Other
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Other</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('exposed_details')} value={this.state.exposed_details}/>
                </div>
                <div>
                    <label className="abc"> Any condition that has or may lead to sudden loss of consciousness</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.consciousness==="" && this.state.nameError}</label>
                    <Dropdown options={consciousness_options}  onChange={this.handleChange('consciousness')} value={this.state.consciousness} placeholder="Select an option" />
                    <label className="abc">Provide Details if Other</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('consciousness_details')} value={this.state.consciousness_details}/>
                </div>
                <div>
                    <label className="abc">Do you have varicose veins or blocked arteries?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.varicose_veins==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="varicose_veins" selectedValue={this.state.varicose_veins} onChange={this.handleChange('varicose_veins')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('varicose_veins_details')} value={this.state.varicose_veins_details}/>
                </div>
                <div>
                    <label className="abc">Are you restricted from any activities because of medical or any other reasons?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.restricted_activities==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="restricted_activities" selectedValue={this.state.restricted_activities} onChange={this.handleChange('restricted_activities')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('restricted_activities_details')} value={this.state.restricted_activities_details}/>
                </div>
                <div>
                    <label className="abc">Do you have any condition that requires regular time away from work?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.regular_time_away==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="regular_time_away" selectedValue={this.state.regular_time_away} onChange={this.handleChange('regular_time_away')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('regular_time_away_details')} value={this.state.regular_time_away_details}/>
                </div>
                <div>
                    <label className="abc">Have you ever had an injury, illness or condition, resulting from work?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.work_illness==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="work_illness" selectedValue={this.state.work_illness} onChange={this.handleChange('work_illness')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('work_illness_details')} value={this.state.work_illness_details}/>
                </div>
                <div>
                    <label className="abc">Have you ever made a claim for Work Compensation in any previous employment in Australia?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.work_compensation==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="work_compensation" selectedValue={this.state.work_compensation} onChange={this.handleChange('work_compensation')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('work_compensation_details')} value={this.state.work_compensation_details}/>
                </div>
                <div>
                    <label className="abc">You will be taking part in a functional assessment that will be physically demanding. Do you have any medical condition that may affect your ability to perform the tests safely today?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.functional_assessment==="" && this.state.nameError}</label>
                    <div id = "radio">
                    <RadioGroup name="functional_assessment" selectedValue={this.state.functional_assessment} onChange={this.handleChange('functional_assessment')}>
                        <Radio value="Yes" />Yes
                        <Radio value="No" />No
                   </RadioGroup>
                    </div>
                    <label className="abc">Provide Details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={this.handleChange('functional_assessment_details')} value={this.state.functional_assessment_details}/>
                </div>
             
                    <button className="next" onClick={this.completeForm}>Submit</button>
            </div>

        )
    }

}
export default IndustrySpecificModule