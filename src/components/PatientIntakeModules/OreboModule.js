import React,{Component} from 'react'
import axios from 'axios'
import '../../App.css'
import {RadioGroup, Radio} from 'react-radio-group';
import {Col,Row} from 'react-bootstrap'

class OreboModule extends Component
{

    constructor(props) {
        super(props);
        this.initialState=
        {
            current_pain:-1,
            rate_pain:-1,
            tense:-1,
            night_sleep:-1,
            bothered_depressed:-1,
            light_work:-1,
            stop_work:-1,
            stop_normal_work:-1,
            risk_view:-1,
            normal_duties:-1,
            PatientID:-1,
            EntityType : 52,
            EntityID:1,
            OMPQID:-1,
            entityId :60

        };
        this.state = this.initialState;
    }

    componentDidMount()
    {
        axios
        .get('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/orebrodetails',
        {
            params: { value : this.state.entityId }
        }) 
        .then(response => {
            console.log(response.data[0])
            this.setState({
                current_pain: (response.data[0].q1).toString() ,
                rate_pain: (response.data[0].q2).toString(),
                light_work: (response.data[0].q3).toString(),
                night_sleep: (response.data[0].q4).toString(),
                tense: (response.data[0].q5).toString(),
                bothered_depressed: (response.data[0].q6).toString(),
                risk_view: (response.data[0].q7).toString(),
                stop_work: (response.data[0].q8).toString(),
                normal_duties : (response.data[0].q9).toString(),
                stop_normal_work: (response.data[0].q10).toString(),
                OMPQID: (response.data[0].ompqid),

                
            
            })
           
        })
        .catch(error => {
            console.log(error)
        })
    }
    


    handleChange= input=>e=>
{
   
        this.setState({
            [input]: e 
          })  
    
}

completeForm=event=>{
    event.preventDefault();
    const isValid = this.validate();
    if (isValid)
    {
        this.setState(this.initialState);
    alert('Submitted')

    axios
        .post('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/orebrodetails', 
        {
            Q1: this.state.current_pain,
            Q2: this.state.rate_pain,
            Q3: this.state.light_work,
            Q4: this.state.night_sleep ,
            Q5: this.state.tense,
            Q6: this.state.bothered_depressed,
            Q7: this.state.risk_view,
            Q8: this.state.normal_duties,
            Q9: this.state.stop_work,
            Q10: this.state.stop_normal_work,
            EntityID :  this.state.entityId,
            OMPQID: this.state.OMPQID,

        }
        
        )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })}
}
  validate = () => {
    let nameError = "";
   
    const val = this.state
    if (val.current_pain===""|| val.rate_pain==="" ) 
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
                <p id = "Stepscolor">Örebro Musculoskeletal Pain Questionnaire</p> 
                <div>
                    <label className="abc">How long have you had your current pain problem?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.current_pain==="" && this.state.nameError}</label>
                    <div id = "radio">
                   
                       <RadioGroup   name="current_pain" selectedValue={this.state.current_pain} onChange={this.handleChange('current_pain')}>
                                
                                <Radio value="0" />0-1 weeks
                                <Radio value="1" />1-2 weeks
                                <Radio value="2" />3-4 weeks
                                <Radio value="3" />4-5 weeks
                                <Radio value="4" />6-8 weeks
                                <Radio value="5" />9-11 weeks
                                <Radio value="6" />3-6 months
                                <Radio value="7" />6-9 months
                                <Radio value="8" />9-12 months
                                <Radio value="9" />over 1 year
                                
                        </RadioGroup>     
                        
                    </div>  
                    
                </div>
                <div>
               
                    <label className="abc"> How would you rate the pain that you have had during the past week? </label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.rate_pain==="" && this.state.nameError}</label>
                    <Row >
                    <Col xs="2"><label className="abc">No pain </label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="rate_pain" selectedValue={this.state.rate_pain} onChange={this.handleChange('rate_pain')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Pain as bad as it could be</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <div id="radio">
                    <label className="abc">I can do light work for an hour</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.light_work==="" && this.state.nameError}</label>
                    <Row >
                    <Col xs="2" ><label className="abc">Can’t do it because  of the pain problem</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="light_work" selectedValue={this.state.light_work} onChange={this.handleChange('light_work')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Can do it without pain being a problem</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
              
                <div id="radio">
                    <label className="abc">I can sleep at night</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.night_sleep==="" && this.state.nameError}</label>
                    <Row >
                    <Col xs="2"><label className="abc">Can’t do it because  of the pain problem</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="night_sleep" selectedValue={this.state.night_sleep} onChange={this.handleChange('night_sleep')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Can do it without pain being a problem</label></Col> 
                   <Col xs="1"></Col>
                </Row>
            </div>
                <div id="radio">
                    <label className="abc">How tense or anxious have you felt in the past week?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.tense==="" && this.state.nameError}</label>
                    <Row>
                    <Col xs="2"><label className="abc">Absolutely calm and relaxed</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="tense" selectedValue={this.state.tense} onChange={this.handleChange('tense')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">As tense and anxious as I’ve ever felt</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <div>
                    <label className="abc">How much have you been bothered by feeling depressed in the past week?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.bothered_depressed==="" && this.state.nameError}</label>
                    <Row>
                    <Col xs="2"><label className="abc">Not at all </label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="bothered_depressed" selectedValue={this.state.bothered_depressed} onChange={this.handleChange('bothered_depressed')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Extremely</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <div>
                    <label className="abc"> In your view, how large is the risk that your current pain may become persistent?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.risk_view==="" && this.state.nameError}</label>
                    <Row>
                    <Col xs="2"><label className="abc">No risk</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="risk_view" selectedValue={this.state.risk_view} onChange={this.handleChange('risk_view')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Very large risk</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <div>
                    <label className="abc">In your estimation, what are the chances you will be working your normal duties in 3 months?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.normal_duties==="" && this.state.nameError}</label>
                    <Row>
                    <Col xs="2"><label className="abc">No Chance</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="normal_duties" selectedValue={this.state.normal_duties} onChange={this.handleChange('normal_duties')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Very large Chance</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <div>
                    <label className="abc">An increase in pain is an indication that I should stop what I’m doing until the pain decreases?</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.stop_work==="" && this.state.nameError}</label>
                    <Row>
                    <Col xs="2"><label className="abc">Completely disagree</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="stop_work" selectedValue={this.state.stop_work} onChange={this.handleChange('stop_work')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Completely agree</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <div>
                    <label className="abc">I should not do my normal work with my present pain.</label>
                    <label style={{ fontSize: 12, color: "red" }}>{this.state.stop_normal_work==="" && this.state.nameError}</label>
                    <Row>
                    <Col xs="2"><label className="abc">Completely disagree</label></Col>
                    <Col xs="6" className="text-center">
                    <div id = "radio">
                       <RadioGroup   name="stop_normal_work" selectedValue={this.state.stop_normal_work} onChange={this.handleChange('stop_normal_work')}>
                                <Radio value="0" />0 
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
                    </Col>
                   <Col><label className="abc">Completely agree</label></Col> 
                   <Col xs="1"></Col>
                </Row>
                </div>
                <button className="next" onClick={this.completeForm}>Submit</button>}
            </div>
        )
        }
    }

export default OreboModule