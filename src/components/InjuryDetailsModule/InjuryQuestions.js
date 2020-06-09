import React,{Component} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../../App.css'

const pain_Side =["Right","Left","Central","Bilateral"]
const painType = [
    'Ache', 'Sharp','Shooting', 'Burning',
    'Niggle' ,'Stabbing', 'Pins and Needles', 
    'Tight','No pain','Other',
  ]
const painOften =[
    'All the time', 'Sometimes/Occasionally', 'Rarely' ,'Frequently','Other'
]
const painWorst=[
   'Moving Around', 'Lifting','Sitting','Walking','Work Related Task','Stress','Other'
]
const painbetter=[
    'Nothing','Lying down/rest','Moving Around','Painkillers','Heat','Not doing the task', 
    'Seeing a practitioner' , 'Other'
]
class InjuryQuestions extends Component
{
   
    
    render()
    {
        const current_Injury_Region= this.props.InjuryRegion
        const handleChange = this.props.handleChange
        const handleChangeCheck = this.props.handleChangeCheck 
        const propsstate = this.props.state
       
        return(
            
              <div>
                    <div id="radio">
                        <label className="abc">Select Pain Side</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_side==="" && propsstate.nameError}</label>
                        <Dropdown options={pain_Side} onChange={handleChange('pain_side',current_Injury_Region.id)} value={current_Injury_Region.pain_side} placeholder="Select an option" />
                    </div>
                    <div id="radio">
                    <label className="abc">When did this episode of your problem begin?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_duration==="" && propsstate.nameError}</label>
                    <input className="form-control" id="pain_duration" name="pain_duration" type="date" 
                        placeholder="Select approximate date" value={current_Injury_Region.pain_duration} onChange={handleChange('pain_duration',current_Injury_Region.id)}/>
                    <input name="pain_duration_approx" type="checkbox" checked={current_Injury_Region.pain_duration_approx} onChange={handleChangeCheck('pain_duration_approx',current_Injury_Region.id)}/> Select if Last occurred date is approximate
                    </div>
                    <div>
                    <label className="abc">Is this the first time you’ve had this problem, or have you had it before? </label>
                     <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_firstime==="" && propsstate.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="This is the first time" checked={current_Injury_Region.pain_firstime === "This is the first time"}  onChange={handleChange('pain_firstime',current_Injury_Region.id)}/>This is the first time  
                        <input type="radio" value="I’ve had it before" checked={current_Injury_Region.pain_firstime === "I’ve had it before"}  onChange={handleChange('pain_firstime',current_Injury_Region.id)}/>I’ve had it before 
                    </div>
                    {current_Injury_Region.pain_firstime==="I’ve had it before" && 
                    <div id="radio">
                    <label className="abc">How long ago did you first have this problem?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_firstime==="I’ve had it before"&&current_Injury_Region.pain_firstime_date ==="" && propsstate.nameError}</label>
                    <input className="form-control" id="" name="pain_firstime_date" type="date" 
                        placeholder="Select approximate date" value={current_Injury_Region.pain_firstime_date} onChange={handleChange('pain_firstime_date',current_Injury_Region.id)}/>
                     <input name="pain_firstime_approx" type="checkbox" checked={current_Injury_Region.pain_firstime_approx} onChange={handleChangeCheck('pain_firstime_approx',current_Injury_Region.id)}/> Select if Last occurred date is approximate
                    </div>}
                    <label className="abc">What happened? (E.g. “I fell over playing basketball”) </label>
                    <textarea className="form-control" rows="2" cols="5" value={current_Injury_Region.pain_first_reason} onChange={handleChange('pain_first_reason',current_Injury_Region.id)}/>
                    </div>
                    
                    <div>
                        <label className="abc">What kind of pain is it?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_type==="" && propsstate.nameError}</label>
                        <Dropdown options={painType} onChange={handleChange('pain_type',current_Injury_Region.id)} value={current_Injury_Region.pain_type} placeholder="Select an option" />
                        <label className="abc">Provide Details if Other</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_type==="Other" &&current_Injury_Region.pain_type_reason==="" && propsstate.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={handleChange('pain_type_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_type_reason}/>
                    </div>
                    <div>
                        <label className="abc">How often are you getting this pain?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_often==="" && propsstate.nameError}</label>
                        <Dropdown options={painOften}  onChange={handleChange('pain_often',current_Injury_Region.id)} value={current_Injury_Region.pain_often} placeholder="Select an option" />
                        <label className="abc">Provide Details if Other</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_often==="Other" &&current_Injury_Region.pain_often_reason==="" && propsstate.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={handleChange('pain_often_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_often_reason}/>
                    
                    </div>
                    <div>
                    
                        <label className="abc">Is there anything that makes the pain worse?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_worst==="" && propsstate.nameError}</label>
                        <Dropdown options={painWorst}  onChange={handleChange('pain_worst',current_Injury_Region.id)} value={current_Injury_Region.pain_worst} placeholder="Select an option" />
                        <label className="abc">Provide Details if Other</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_worst==="Other"&& current_Injury_Region.pain_worst_reason==="" && propsstate.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={handleChange('pain_worst_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_worst_reason}/>
                    </div>
                    <div>
                    
                        
                        <label className="abc">Is there anything that makes it feel better?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_better==="" && propsstate.nameError}</label>
                        <Dropdown options={painbetter}  onChange={handleChange('pain_better',current_Injury_Region.id)} value={current_Injury_Region.pain_better} placeholder="Select an option" />
                        <label className="abc">Provide Details if Other</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_better==="Other"&& current_Injury_Region.pain_better_reason==="" && propsstate.nameError}</label>
                        <textarea className="form-control" rows="1" cols="5" onChange={handleChange('pain_better_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_better_reason}/>
                    </div>
                    <div>
                        <label className="abc"> On a scale of 1–10 (10 being the worst possible pain), how has the pain been over the past 24 hours?</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_scale==="" && propsstate.nameError}</label>
                        <div id = "radio">
                       
                        <input type="radio" value="1" checked={current_Injury_Region.pain_scale === "1"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>1 
                        <input type="radio" value="2" checked={current_Injury_Region.pain_scale === "2"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>2 
                        <input type="radio" value="3" checked={current_Injury_Region.pain_scale === "3"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>3 
                        <input type="radio" value="4" checked={current_Injury_Region.pain_scale === "4"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>4 
                        <input type="radio" value="5" checked={current_Injury_Region.pain_scale === "5"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>5 
                        <input type="radio" value="6" checked={current_Injury_Region.pain_scale === "6"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>6 
                        <input type="radio" value="7" checked={current_Injury_Region.pain_scale === "7"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>7 
                        <input type="radio" value="8" checked={current_Injury_Region.pain_scale === "8"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>8
                        <input type="radio" value="9" checked={current_Injury_Region.pain_scale === "9"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>9
                        <input type="radio" value="10" checked={current_Injury_Region.pain_scale === "10"} onChange={handleChange('pain_scale',current_Injury_Region.id)}/>10 
                    </div>
                    </div>
                    <div>
                   
                    <label className="abc"> Are you experiencing any other symptoms?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="" && propsstate.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp === "Yes"} onChange={handleChange('pain_symp',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp === "No"} onChange={handleChange('pain_symp',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp === "Not Sure"} onChange={handleChange('pain_symp',current_Injury_Region.id)}/>Not Sure
                    </div>
                  {  current_Injury_Region.pain_symp==="Yes"&&
                  <div  className="rounddiv">
                    <label className="abc"> ‘Pins and needles’ or numbness in your</label><br/>
                    <label className="abc">Hands?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_hand==="" && propsstate.nameError}</label>

                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp_hand === "Yes"} onChange={handleChange('pain_symp_hand',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp_hand === "No"} onChange={handleChange('pain_symp_hand',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp_hand === "Not Sure"} onChange={handleChange('pain_symp_hand',current_Injury_Region.id)}/>Not Sure
                    </div>
                    <label className="abc">Feet?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_feet==="" && propsstate.nameError}</label>
                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp_feet === "Yes"} onChange={handleChange('pain_symp_feet',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp_feet === "No"} onChange={handleChange('pain_symp_feet',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp_feet === "Not Sure"} onChange={handleChange('pain_symp_feet',current_Injury_Region.id)}/>Not Sure
                    </div>
                    <label className="abc">Swelling?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_swell==="" && propsstate.nameError}</label>

                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp_swell === "Yes"} onChange={handleChange('pain_symp_swell',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp_swell === "No"} onChange={handleChange('pain_symp_swell',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp_swell === "Not Sure"} onChange={handleChange('pain_symp_swell',current_Injury_Region.id)}/>Not Sure
                    </div>
                    <label className="abc">Clicking (for example, joints cracking or popping)?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_click==="" && propsstate.nameError}</label>

                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp_click === "Yes"} onChange={handleChange('pain_symp_click',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp_click === "No"} onChange={handleChange('pain_symp_click',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp_click === "Not Sure"} onChange={handleChange('pain_symp_click',current_Injury_Region.id)}/>Not Sure
                    </div>
                    <label className="abc">Locking (for example, joint becoming stuck)?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_lock==="" && propsstate.nameError}</label>

                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp_lock === "Yes"} onChange={handleChange('pain_symp_lock',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp_lock === "No"} onChange={handleChange('pain_symp_lock',current_Injury_Region.id)} />No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp_lock === "Not Sure"} onChange={handleChange('pain_symp_lock',current_Injury_Region.id)}/>Not Sure
                    </div>
                   
                    <label className="abc">Weakness?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_weak==="" && propsstate.nameError}</label>

                    <div id = "radio">
                        <input type="radio" value="Yes"  checked={current_Injury_Region.pain_symp_weak === "Yes"} onChange={handleChange('pain_symp_weak',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No"  checked={current_Injury_Region.pain_symp_weak === "No"} onChange={handleChange('pain_symp_weak',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure"  checked={current_Injury_Region.pain_symp_weak === "Not Sure"} onChange={handleChange('pain_symp_weak',current_Injury_Region.id)}/>Not Sure
                    </div>
                    
                    <label className="abc">Heat, or redness?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_symp==="Yes"&& current_Injury_Region.pain_symp_heat==="" && propsstate.nameError}</label>

                    <div id = "radio">
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_symp_heat === "Yes"} onChange={handleChange('pain_symp_heat',current_Injury_Region.id)}/>Yes 
                        <input type="radio" value="No" checked={current_Injury_Region.pain_symp_heat === "No"} onChange={handleChange('pain_symp_heat',current_Injury_Region.id)}/>No
                        <input type="radio" value="Not Sure" checked={current_Injury_Region.pain_symp_heat === "Not Sure"} onChange={handleChange('pain_symp_heat',current_Injury_Region.id)}/>Not Sure
                    </div>
                    </div>
                }
                    </div>
                    <div>
                    <label className="abc">Is there anything else you wanted to tell me about?</label>
                    <textarea className="form-control" rows="2" cols="5"onChange={handleChange('pain_symp_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_symp_reason}/>
                    </div>
                    <div>
                    <label className="abc"> Have you received any other treatment or medical advice for the problem?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_treatment==="" && propsstate.nameError}</label>
                    <div id="radio">
                        <input type="radio" value="No" checked={current_Injury_Region.pain_treatment === "No"} onChange={handleChange('pain_treatment',current_Injury_Region.id)}/>No
                        <input type="radio" value="Yes" checked={current_Injury_Region.pain_treatment === "Yes"} onChange={handleChange('pain_treatment',current_Injury_Region.id)}/>Yes
                    </div>
                    {/* <label className="abc">Provide details if Yes</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={handleChange('pain_treatment_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_treatment_reason}/> */}
                    </div>
                    <div>
                    <label className="abc">Is your problem limiting your work or daily life in any way?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_limit_work==="" && propsstate.nameError}</label>
                    <div id="radio">
                        <input type="radio" value="Work" checked={current_Injury_Region.pain_limit_work === "Work"} onChange={handleChange('pain_limit_work',current_Injury_Region.id)}/>Work
                        <input type="radio" value="Life" checked={current_Injury_Region.pain_limit_work === "Life"} onChange={handleChange('pain_limit_work',current_Injury_Region.id)}/>Life
                        <input type="radio" value="Both" checked={current_Injury_Region.pain_limit_work === "Both"} onChange={handleChange('pain_limit_work',current_Injury_Region.id)}/>Both
                    </div>
                    <label className="abc">Details?</label>
                    <textarea className="form-control" rows="1" cols="5" onChange={handleChange('pain_limit_work_reason',current_Injury_Region.id)} value={current_Injury_Region.pain_limit_work_reason}/>
                    </div>
                    <div>
                        <label className="abc"> In your view, how large is the risk that your current pain may become persistent?(1= no risk, 10= very high)</label>
                        <label style={{ fontSize: 12, color: "red" }}>{current_Injury_Region.pain_futurerisk==="" && propsstate.nameError}</label>
                        <div id = "radio">
                       
                        <input type="radio" value="1" checked={current_Injury_Region.pain_futurerisk === "1"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>1 
                        <input type="radio" value="2" checked={current_Injury_Region.pain_futurerisk === "2"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>2 
                        <input type="radio" value="3" checked={current_Injury_Region.pain_futurerisk === "3"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>3 
                        <input type="radio" value="4" checked={current_Injury_Region.pain_futurerisk === "4"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>4 
                        <input type="radio" value="5" checked={current_Injury_Region.pain_futurerisk === "5"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>5 
                        <input type="radio" value="6" checked={current_Injury_Region.pain_futurerisk === "6"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>6 
                        <input type="radio" value="7" checked={current_Injury_Region.pain_futurerisk === "7"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>7 
                        <input type="radio" value="8" checked={current_Injury_Region.pain_futurerisk === "8"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>8
                        <input type="radio" value="9" checked={current_Injury_Region.pain_futurerisk === "9"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>9
                        <input type="radio" value="10" checked={current_Injury_Region.pain_futurerisk === "10"} onChange={handleChange('pain_futurerisk',current_Injury_Region.id)}/>10 
                    </div>
                    </div>
           </div>
           
           
           
        )
    }
}
export default InjuryQuestions 