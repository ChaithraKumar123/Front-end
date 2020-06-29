import React,{Component} from 'react'
//import 'react-tabs/style/react-tabs.css';
import update from 'react-addons-update';
import axios from 'axios'

//import {Tabs,TabPanel,TabList,Tab} from 'react-tabs'
import InjuryQuestions from './InjuryQuestions';


class BodyImageTabs extends Component
{
    constructor(props) {
        super(props);

        const people = [];

    for (let i = 0; i < this.props.state.body_area1.length; i++) {
        people.push({
            id: i,
            region_name: this.props.state.body_area1[i],
            PainRegionID: this.props.state.body_region_id1[i],
            pain_side:'',
            pain_duration:'',
            pain_duration_approx:false,
            pain_firstime:'',
            pain_first_reason:'',
            pain_firstime_approx:false,
            pain_firstime_date:'',
            pain_type:'',
            pain_type_reason:'',
            pain_often:'',
            pain_often_reason:'',
            pain_worst:'',
            pain_worst_reason:'',
            pain_better:'',
            pain_better_reason:'',
            pain_scale:-1,
            pain_symp:'',
            pain_symp_hand:'',
            pain_symp_feet:'',
            pain_symp_swell:'',
            pain_symp_click:'',
            pain_symp_lock:'',
            pain_symp_weak:'',
            pain_symp_heat:'',
            pain_symp_reason:'',
            pain_treatment:'',
            
            //pain_treatment_reason:'',
            pain_limit_work:'',
            pain_limit_work_reason:'',
            pain_futurerisk:'',
            POBCPRegionID:-1

            
        });
    }

    
    this.state=
    {
        step1:1,
        InjuryRegion : people,
        nameError:'',
        emailError:'',
        POBPatientID:60,
        
    }
}
addExtra(k,n)
{
    const people = [];
    for (let i = k; i < n; i++) {
        people.push({
            id: i,
            region_name: this.props.state.body_area1[i-1],
            PainRegionID: this.props.state.body_region_id1[i-1],
            pain_side:'',
            pain_duration:'',
            pain_duration_approx:false,
            pain_firstime:'',
            pain_first_reason:'',
            pain_firstime_approx:false,
            pain_firstime_date:'',
            pain_type:'',
            pain_type_reason:'',
            pain_often:'',
            pain_often_reason:'',
            pain_worst:'',
            pain_worst_reason:'',
            pain_better:'',
            pain_better_reason:'',
            pain_scale:-1,
            pain_symp:'',
            pain_symp_hand:'',
            pain_symp_feet:'',
            pain_symp_swell:'',
            pain_symp_click:'',
            pain_symp_lock:'',
            pain_symp_weak:'',
            pain_symp_heat:'',
            pain_symp_reason:'',
            pain_treatment:'',
            
            //pain_treatment_reason:'',
            pain_limit_work:'',
            pain_limit_work_reason:'',
            pain_futurerisk:'',
            POBCPRegionID:-1

            
        });
}
this.setState({
   InjuryRegion: update(this.state.InjuryRegion, {$push: people})
})
}
componentDidMount()
    {

        const temp = [];
        axios
        .get('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails',
        {
            params: { value : this.state.POBPatientID }
        }) 
        .then(response => {
            console.log(response.data)
            for(let i=0;i<response.data.length ;i++)
            {


                temp.push(
                    {
                        id: i,
                    region_name: response.data[i].painWhere,
                    PainRegionID: response.data[i].painRegionID,
                    pain_side:response.data[i].painSide,
                    pain_duration:response.data[i].occurredCurrent.split("T")[0],
                    pain_duration_approx:response.data[i].occurredCurrentApprox,
                    pain_firstime:response.data[i].occurrence ,
                    pain_first_reason:response.data[i].causes ,
                    pain_firstime_approx:response.data[i].occurredFirstApprox,
                    pain_firstime_date:response.data[i].occurredFirst.split("T")[0],
                    pain_type:response.data[i].painType,
                    pain_type_reason:response.data[i].painTypeOther,
                    pain_often:response.data[i].frequency,
                    pain_often_reason:response.data[i].frequencyOther,
                    pain_worst:response.data[i].makesWorse,
                    pain_worst_reason:response.data[i].makesWorseOther,
                    pain_better:response.data[i].makesBetter,
                    pain_better_reason:response.data[i].makesBetterOther,
                    pain_scale:response.data[i].painScale.toString(),
                    pain_symp:response.data[i].otherSymptoms,
                    pain_symp_hand:response.data[i].symptomNumbness,
                    pain_symp_feet:response.data[i].symptomPinsNeedles,
                    pain_symp_swell:response.data[i].symptomSwelling,
                    pain_symp_click:response.data[i].symptomClicking,
                    pain_symp_lock:response.data[i].symptomLocking,
                    pain_symp_weak:response.data[i].symptomWeakness,
                    pain_symp_heat:response.data[i].symptomHeat,
                    pain_symp_reason:response.data[i].symptomOther,
                    pain_treatment:response.data[i].otherTreatment,
                    
                    //pain_treatment_reason:'',
                    pain_limit_work:response.data[i].limitWorkLife,
                   // pain_limit_work_reason:response.data[i].Limi,
                    //pain_futurerisk:response.data[i].painRegionID,
                    POBCPRegionID:response.data[i].pobcpRegionID,
                    }
                )
            }
            if (temp.length !== 0)
            {
                this.setState({InjuryRegion:temp})
            }
            this.addExtra(response.data.length ,this.props.state.body_area1.length)
           
        })
        .catch(error => {
            console.log(error)
        })
        
    }



    handleChange = (input,id)=>e=>{

    if(e.target)
    { 
    this.setState({
        InjuryRegion: update(this.state.InjuryRegion, {[id]: {[input]: {$set: e.target.value}}})
    });
    }
    else
    {
        this.setState({
            InjuryRegion: update(this.state.InjuryRegion, {[id]: {[input]: {$set: e.value}}})
        });
    }

  }
  handleChangeCheck = (input,id) =>e=>
  {

    this.setState({
        InjuryRegion: update(this.state.InjuryRegion, {[id]: {[input]: {$set: e.target.checked}}})
    });
    
  }
    apicall=(step1)=>
    {
        const save=this.state.InjuryRegion[step1-1]
        axios
        .post('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails', 
        {
        
            POBPatientID :this.state.POBPatientID, 
            POBCPRegionID : save.POBCPRegionID,
            PainRegionID:save.PainRegionID,
            PainSide :  save.pain_side, 
            PainWhere :save.region_name, 
            MainRegion :this.state.step1===1?1:0, 
            Causes : save.pain_first_reason,
            Frequency:save.pain_often,
            FrequencyOther:save.pain_often_reason,
            MakesBetter:save.pain_better,
            MakesBetterOther:save.pain_better_reason,
            MakesWorse :save.pain_worst,
            MakesWorseOther:save.pain_worst_reason,
            Occurrence:save.pain_firstime,
            PainScale:save.pain_scale,
            PainType:save.pain_type,
            PainTypeOther:save.pain_type_reason,
            OtherTreatment:save.pain_treatment,
            LimitWorkLife :save.pain_limit_work,
            OtherSymptoms : save.pain_symp,
            SymptomClicking:save.pain_symp_click,
            SymptomHeat :save.pain_symp_heat,
            SymptomLocking :save.pain_symp_lock,
            SymptomNumbness :save.pain_symp_hand,
            SymptomPinsNeedles :save.pain_symp_feet,
            SymptomSwelling :save.pain_symp_swell,
            SymptomWeakness:save.pain_symp_weak,
            SymptomOther:save.pain_symp_reason,
            OccurredCurrent :save.pain_duration,
            OccurredCurrentApprox :save.pain_duration_approx.toString() ,
            OccurredFirst :save.pain_firstime_date===''?"1990-01-01":save.pain_firstime_date,
            OccurredFirstApprox :save.pain_firstime_approx.toString() ,
            FuturePainRisk :save.pain_futurerisk
        }
        
        )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            
        })
    }

    nextStep=event=>{
        const{step1}=this.state;
        event.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
            this.apicall(step1)
       
            this.setState({
                step1:step1+1
            })
        }
    } 
    

        
    
    prevStep=()=>{
        const{step1}=this.state;
        if (step1 === 1)
        {
            this.props.render_main();
        }
        else{
        this.setState({
            step1:step1-1
        })}
        
        
    }
    
    completeForm=event=>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
            this.apicall(this.state.step1)
        this.props.render_main()
        }

    }
      validate = () => {
        let nameError = "";
        let emailError = "";
        // let passwordError = "";
        const val = this.state.InjuryRegion[this.state.step1-1]
        if (val.pain_side===""|val.pain_duration==="" ||val.pain_firstime ==="" || (val.pain_firstime==="I’ve had it before" && val.pain_firstime_date==="")  
        ||val.pain_type ===""||(val.pain_type==="Other"&& val.pain_type_reason==="")|| val.pain_often==="" ||(val.pain_often==="Other" && val.pain_often_reason ==="")
         || val.pain_worst===""||(val.pain_worst==="Other" && val.pain_worst_reason==="") ||val.pain_better ===""|| (val.pain_better==="Other" && val.pain_better_reason==="") 
         || val.pain_scale ==="" || val.pain_symp==="" ||(val.pain_symp==="Yes" && (val.pain_symp_click==="" || val.pain_symp_feet==="" || val.pain_symp_hand===""||val.pain_symp_lock===""||val.pain_symp_swell===""||val.pain_symp_weak===""))
         || val.pain_treatment==="" ||  val.pain_limit_work==="") {
          nameError = "*required";
        }
        if (nameError) {
            this.setState({ emailError, nameError });
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
        const{state}=this.props
        return (
            
            <div id = "MainDiv">
                        <div className="page-title lg">
          <div className="title">
            <h1>Step {this.state.step1} of {state.body_area1.length}</h1>
            {this.state.step1===1 &&<p>Primary Region-{state.body_area1[this.state.step1 - 1]}</p>}
                {this.state.step1!==1 &&<p>Secondary Region-{state.body_area1[this.state.step1 - 1]}</p>}
          </div>
        </div>
                {/* <p id = "Stepscolor">Step {this.state.step1} of {state.body_area1.length}</p>  */}
                
                {/* {this.state.step1===1 &&<p>Primary Region-{state.body_area1[this.state.step1 - 1]}</p>}
                {this.state.step1!==1 &&<p>Secondary Region-{state.body_area1[this.state.step1 - 1]}</p>} */}
                
                <InjuryQuestions  InjuryRegion={this.state.InjuryRegion[this.state.step1 - 1]} handleChange={this.handleChange} handleChangeCheck={this.handleChangeCheck} state={this.state}/>
                

        <div className="btn-block prev-back-btn">
          {this.state.step1>=1 && <button className="btn btn-outline-primary" onClick={this.prevStep} >Back</button>}
          {this.state.step1!==state.body_area1.length && <button className="btn btn-primary modal-btn" data-modal-id="sampleModal"  onClick={this.nextStep}>Continue</button>} 
          {this.state.step1===state.body_area1.length && <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.completeForm}>Finish</button>}
        </div>

                {/* {this.state.step1>=1 && <button className="back" onClick={this.prevStep} >Back</button>}
                {this.state.step1!==state.body_area1.length &&<button className="next" onClick={this.nextStep}>Continue</button>}
                {this.state.step1===state.body_area1.length && <button className="next" onClick={this.completeForm}>Finish</button>}
                 */}
  {/* <Tabs>
            <TabList>
        <Tab>{state.body_area1[0]}</Tab>
            <Tab>{state.body_area1[1]}</Tab>
            <Tab>{state.body_area1[2]}</Tab>
            </TabList>
        
            <TabPanel>
            <InjuryQuestions/>
            </TabPanel>
            <TabPanel>
            <InjuryQuestions/>
            </TabPanel>
            <TabPanel>
            <InjuryQuestions/>
            </TabPanel>
            
            </Tabs> */}
            
            </div>
           
        );
    }
}

export default BodyImageTabs;