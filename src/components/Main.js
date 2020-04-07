import React,{Component} from 'react'
import '../App.css'

import 'react-dropdown/style.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
class Main extends Component
{
state=
{
    step:1,
    //step1
    titleOpt:'',
    givenName:'',
    surName:'',
    middleName:'',
    dob :'',
    gender:'',
    mobileNumber:'',
    email:'',
    culturalGroup:'',
    //step2
    CurrentPosition:'',
    EmpStDate:'',
    Department:'',
    LineTask:'',
    CompClaim:'',
    CompClaimDetails:'',
    //step3
    addressLine1:'',
    addressLine2:'',
    suburb:'',
    stateName:'',
    postCode:'',
    country:'',
    //step4
    familyDoctor:'',
    lastVisit:'',
    reasonOfVisit:'',
    height:'',
    weight:'',
    handedness:''
}
nextStep=()=>{
    const{step}=this.state;
    this.setState({
        step:step+1
    })
    
}
radioChange = (e) => {
    console.log('calling')
    this.setState({

        [e.currentTarget.id]: e.currentTarget.value
    
    });
  }

prevStep=()=>{
    const{step}=this.state;
    this.setState({
        step:step-1
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
showStep =()=>{
    const{step}=this.state;
    if(step===1)
    return (<Step1
        handleChange={this.handleChange}
        radioChange ={this.radioChange}
        nextStep={this.nextStep}
        state={this.state}
        />);
    if(step===2)
    return (<Step2
        handleChange={this.handleChange}
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        state ={this.state}
        />);
    if(step===3)
    return (<Step3
        handleChange={this.handleChange}
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        state ={this.state}
        />);
    if(step===4)
    return (<Step4
        handleChange={this.handleChange}
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        state ={this.state}
        />);
    

}

render()
{ 
    return(<div>{this.showStep()}</div>);
}
}

export default  Main