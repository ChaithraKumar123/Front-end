import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'
class RadioButton extends Component
{
    render() {
        const{handleChange,Q, variable ,state,question}=this.props
          return (
            
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">{question}</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="0" id="titleOpt" checked={Q ==="0"} onChange={handleChange(variable)}  />
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="1" id="Radio1" checked={Q ==="1"} onChange={handleChange(variable)}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="2" id="Radio2" checked={Q ==="2"} onChange={handleChange(variable)}/>
                <span>Fairly Often</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="3" id="Radio3" checked={Q ==="3"} onChange={handleChange(variable)}/>
                <span>Often</span>
              </div>
              <div className="errorMessage">{Q===-1 && state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
         
    
          );
      }
}
class DASSModule extends Component
{   
    state=
    {
       Q1:-1,
       Q2:-1,
       Q3:-1,
       Q4:-1,
       Q5:-1,
       Q6:-1,
       Q7:-1,
       Q8:-1,
       Q9:-1,
       Q10:-1,
       Q11:-1,
       Q12:-1,
       Q13:-1,
       Q14:-1,
       Q15:-1,
       Q16:-1,
       Q17:-1,
       Q18:-1,
       Q19:-1,
       Q20:-1,
       Q21:-1,
       entityId:60,
       id:-1,
       nameError:'',
       step:1


    }
    componentDidMount()
    {
        axios
        .get('https://localhost:44338/api/DASSDetails',
        {
            params: { value : this.state.entityId }
        }) 
        .then(response => {
            console.log(response.data[0])
            this.setState({
                Q1: (response.data[0].q1).toString() ,
                Q2: (response.data[0].q2).toString(),
                Q3: (response.data[0].q3).toString(),
                Q4: (response.data[0].q4).toString(),
                Q5: (response.data[0].q5).toString(),
                Q6: (response.data[0].q6).toString(),
                Q7: (response.data[0].q7).toString(),
                Q8: (response.data[0].q8).toString(),
                Q9 : (response.data[0].q9).toString(),
                Q10: (response.data[0].q10).toString(),
                Q11: (response.data[0].q11).toString() ,
                Q12: (response.data[0].q12).toString(),
                Q13: (response.data[0].q13).toString(),
                Q14: (response.data[0].q14).toString(),
                Q15: (response.data[0].q15).toString(),
                Q16: (response.data[0].q16).toString(),
                Q17: (response.data[0].q17).toString(),
                Q18: (response.data[0].q18).toString(),
                Q19 : (response.data[0].q19).toString(),
                Q20: (response.data[0].q20).toString(),
                Q21: (response.data[0].q21).toString(),
                id: (response.data[0].daS21ID),

                
            
            })
           
        })
        .catch(error => {
            console.log(error)
        })
    }
    nextStep=()=>{
        const{step}=this.state;
        const isValid = this.validate();
        if(isValid)
        {
        this.setState({
            step:step+1
        })
      }
        
    }
    back=()=>{
        const{step}=this.state;
        
        this.setState({
            step:step-1
        })
        
    }
    validate = () => 
    {
        let nameError = "";
        
        const val = this.state
        if ((this.state.step===1 && (val.Q1===-1 ||val.Q2===-1||val.Q3===-1||val.Q4===-1||val.Q5===-1||val.Q6===-1||val.Q7===-1
            ||val.Q8===-1 || val.Q9===-1||val.Q10===-1))||
            (this.state.step===2 && (val.Q11===-1 ||val.Q12===-1||val.Q13===-1||val.Q14===-1||val.Q15===-1||val.Q16===-1||val.Q17===-1
                ||val.Q18===-1 || val.Q19===-1||val.Q20===-1 || val.Q21===-1))){
          nameError = "This field is required";
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
        axios
            .post('https://localhost:44338/api/DASSDetails', 
            {
                Q1: this.state.Q1,
                Q2: this.state.Q2,
                Q3: this.state.Q3,
                Q4: this.state.Q4 ,
                Q5: this.state.Q5,
                Q6: this.state.Q6,
                Q7: this.state.Q7,
                Q8: this.state.Q8,
                Q9: this.state.Q9,
                Q10: this.state.Q10,
                Q11: this.state.Q11,
                Q12: this.state.Q12,
                Q13: this.state.Q13,
                Q14: this.state.Q14 ,
                Q15: this.state.Q15,
                Q16: this.state.Q16,
                Q17: this.state.Q17,
                Q18: this.state.Q18,
                Q19: this.state.Q19,
                Q20: this.state.Q20,
                Q21: this.state.Q21,
                EntityID :  this.state.entityId,
                OMPQID: this.state.id,
                
    
            }
            
            )
            .then(response => {
                console.log(response)
                alert('Submitted')
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    
    render()
    {
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="page-title title"> 
            <h1>Depression Anxiety Stress Scale</h1>
            </div>
            </div>
            </div>
            <div className="row">
            <h6>Please read each statement and select the option  which indicates how much the statement
            applied to you over the past week. There are no right or wrong answers. Do not spend too much
            time on any statement.</h6>
            </div>
            <hr></hr>
            { this.state.step===1 &&
            <div>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I found it hard to wind down" Q={this.state.Q1} variable="Q1"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I was aware of dryness of my mouth" Q={this.state.Q2} variable="Q2"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I couldn’t seem to experience any positive feeling at all" Q={this.state.Q3} variable="Q3"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I experienced breathing difficulty (e.g. excessively rapid breathing,breathlessness in the absence of physical exertion)" Q={this.state.Q4} variable="Q4"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I found it difficult to work up the initiative to do things" Q={this.state.Q5} variable="Q5"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I tended to over-react to situations" Q={this.state.Q6} variable="Q6"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I experienced trembling (e.g. in the hands)" Q={this.state.Q7} variable="Q7"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt that I was using a lot of nervous energy" Q={this.state.Q8} variable="Q8"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I was worried about situations in which I might panic and make a fool of myself" Q={this.state.Q9} variable="Q9"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt that I had nothing to look forward to" Q={this.state.Q10} variable="Q10"/>
                <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" data-modal-id="sampleModal" onClick={this.nextStep}>Continue</button>
                </div>
            </div>
            }
             { this.state.step===2 &&
            <div>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I found myself getting agitated" Q={this.state.Q11} variable="Q11"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I found it difficult to relax" Q={this.state.Q12} variable="Q12"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt down-hearted and blue" Q={this.state.Q13} variable="Q13"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I was intolerant of anything that kept me from getting on with what I was doing" Q={this.state.Q14} variable="Q14"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt I was close to panic" Q={this.state.Q15} variable="Q15"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I was unable to become enthusiastic about anything" Q={this.state.Q16} variable="Q16"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt I wasn’t worth much as a person" Q={this.state.Q17} variable="Q17"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt that I was rather touchy" Q={this.state.Q18} variable="Q18"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)" Q={this.state.Q19} variable="Q19"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt scared without any good reason" Q={this.state.Q20} variable="Q20"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="I felt that life was meaningless" Q={this.state.Q21} variable="Q21"/>
                <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" onClick={this.back}>Back</button>
                <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.completeForm}>Submit</button>
                </div>

            </div>
            }
            </div>
           
        
        
        );
    }

}
export default DASSModule
