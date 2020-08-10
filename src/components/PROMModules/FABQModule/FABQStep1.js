import "../../../css/main.css"
import React,{Component} from 'react'
import RadioButtonRange from './RadioButtonRange'

class FABQStep1 extends Component
{   
    state =
    {
      nameError:''
    }

  continue=e=>
  {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid)
    {
      this.props.nextStep();
    }
    
  }
  back=e=>
  {
    e.preventDefault();
    this.props.prevStep();
  }

  submit=e=>
  {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid)
    {
      this.props.completeForm();
    }
  }
  
    validate = () => 
    {
        let nameError = "";
        
        const val = this.props.state
        if ((val.step===1 && (val.Q1===-1 ||val.Q2===-1||val.Q3===-1||val.Q4===-1||val.Q5===-1))||
            (val.step===2 && (val.Q6===-1||val.Q7===-1||val.Q8===-1 || val.Q9===-1||val.Q10===-1))||
            (val.step===3 && (val.Q11===-1||val.Q12===-1||val.Q13===-1 || val.Q14===-1||val.Q15===-1))) {
          nameError = "*required";
        }
        if (nameError) 
        {
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
      const{handleChange,state}=this.props
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="page-title title"> 
            <h1>Fear-Avoidance Beliefs Questionnaire (FABQ)</h1>
            </div>
            </div>
            </div>
            <div className="row">
            <h6>Here are some of the things which other patients have told us about their pain. 
            For each statement please circle any number from 0 to 6 to say how much physical activities 
            such as bending, lifting, walking or driving affect or would affect your back pain.</h6>
            </div>
            <hr></hr>
            
        {
          state.step===1 && 
          <div>
          <RadioButtonRange handleChange = {handleChange} Q={state.Q1} variable="Q1" state={this.state} question="My pain was caused by physical activity"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q2} variable="Q2" state={this.state} question="Physical activity makes my pain worse"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q3} variable="Q3" state={this.state} question="Physical activity might harm my back"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q4} variable="Q4" state={this.state} question="I should not do physical activities which (might) make my pain worse"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q5} variable="Q5" state={this.state} question="I cannot do physical activities which (might) make my pain worse"></RadioButtonRange>
           <div className="btn-block prev-back-btn">
          <button className="btn btn-outline-primary" data-modal-id="sampleModal" onClick={this.continue}>Continue</button>
          </div>
          </div>
        }
        {
          state.step===2 && 
          <div> 
            <h6>The following statements are about how your normal work affects or would affect your back pain</h6> 
            <br/>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q6} variable="Q6" state={this.state} question="My pain was caused by my work or by an accident at work"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q7} variable="Q7" state={this.state} question="My work aggravated my pain"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q8} variable="Q8" state={this.state} question="I have a claim for compensation for my pain"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q9} variable="Q9" state={this.state} question="My work is too heavy for me"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q10} variable="Q10" state={this.state} question="My work makes or would make my pain worse"></RadioButtonRange>
          <div className="btn-block prev-back-btn">
          <button className="btn btn-outline-primary" onClick={this.back}>Back</button>
          <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.continue}>Continue</button>
          </div>
        </div>
        }
        {
          state.step===3 && 
          <div> 
            <h6>The following statements are about how your normal work affects or would affect your back pain</h6> 
            <br/>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q11} variable="Q11" state={this.state} question="My work might harm my back"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q12} variable="Q12" state={this.state} question="I should not do my normal work with my present pain"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q13} variable="Q13" state={this.state} question="I cannot do my normal work with my present pain"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q14} variable="Q14" state={this.state} question="I cannot do my normal work till my pain is treated"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q15} variable="Q15" state={this.state} question="I do not think that I will be back to my normal work within 3 months"></RadioButtonRange>
           <RadioButtonRange handleChange = {handleChange} Q={state.Q16} variable="Q16" state={this.state} question="I do not think that I will ever be able to go back to that work"></RadioButtonRange>
          <div className="btn-block prev-back-btn">
          
          <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.submit}>Submit</button>
          </div>
        </div>
        }
          

        </div>

       
        
        );
    }

}
export default FABQStep1
