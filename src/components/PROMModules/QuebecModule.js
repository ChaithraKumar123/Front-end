// import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'
import {withRouter} from "react-router-dom";
import auth from "../auth";


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
                <div>
                <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="0" id="titleOpt" checked={Q ==="0"} onChange={handleChange(variable)}  />
                <span>Not difficult</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="1" id="Radio1" checked={Q ==="1"} onChange={handleChange(variable)}/>
                <span>Minimal</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="2" id="Radio2" checked={Q ==="2"} onChange={handleChange(variable)}/>
                <span>Somewhat</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="3" id="Radio3" checked={Q ==="3"} onChange={handleChange(variable)}/>
                <span>Fairly</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="4" id="Radio3" checked={Q ==="4"} onChange={handleChange(variable)}/>
                <span>Extremely</span>
              </div>
                </div>

              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="5" id="Radio3" checked={Q ==="5"} onChange={handleChange(variable)}/>
                <span>Unable to do</span>
              </div>
              <div className="errorMessage">{Q===-1 && state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
         
    
          );
      }
}
class QuebecModule extends Component
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
       
       entityId:60,
       id:-1,
       nameError:'',
       step:1


    }
    componentDidMount()
    {
        axios
        .get(
          // 'https://localhost:44338/api/QUEBECDetails',
          'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/QUEBECDetails',
        {
            params: { value : localStorage.getItem("KNC") }
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
               
                id: (response.data[0].qbpdid),

                
            
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
                ||val.Q18===-1 || val.Q19===-1||val.Q20===-1))){
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
            .post(
              // 'https://localhost:44338/api/QUEBECDetails', 
              'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/QUEBECDetails', 
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
               
                EntityID :  localStorage.getItem("KNC"),
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

            axios
            .post(
              "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/saveWorkflow",
              // "https://localhost:44338/api/saveWorkflow",
        
              {
                KNC: localStorage.getItem("KNC"),
                DateCompleted: new Date(),
                processID: localStorage.getItem("WorkFlowId")
              }
            )
            .then((response) => {
              if (response.data === "Success")
              {
                console.log(response);
            auth.login(() => {
              this.props.history.push("/Home");
            });
              }
            })
            .catch((error) => {
              console.log(error);
            });


        }
    }
    render()
    {
        return(
            <div id= "MainDiv">
            <div className="row">
            <div className="col-md-12">
            <div className="page-title title"> 
            <h1>The Quebec Back Pain Disability Scale</h1>
            </div>
            </div>
            </div>
            <div>
            <h6>This questionnaire is about the way your back pain is affecting your daily life. People with back problems may find it
            difficult to perform some of their daily activities. We would like to know if you find it difficult to perform any of the
            activities listed below, because of your back. Please choose one
            response option for each activity .Today, do you find it difficult to perform the following activities because of your back?</h6>
            </div>
            <hr></hr>
            { this.state.step===1 &&
            <div>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Get out of bed" Q={this.state.Q1} variable="Q1"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Sleep through the night" Q={this.state.Q2} variable="Q2"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Turn over in bed" Q={this.state.Q3} variable="Q3"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Ride in a car" Q={this.state.Q4} variable="Q4"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Stand up for 20-30 minutes" Q={this.state.Q5} variable="Q5"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Sit in a chair for several hours" Q={this.state.Q6} variable="Q6"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Climb one flight of stairs" Q={this.state.Q7} variable="Q7"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Walk a few blocks (300-400 m)" Q={this.state.Q8} variable="Q8"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Walk several kilometres" Q={this.state.Q9} variable="Q9"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Reach up to high shelves" Q={this.state.Q10} variable="Q10"/>
                <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" data-modal-id="sampleModal" onClick={this.nextStep}>Continue</button>
                </div>
            </div>
            }
             { this.state.step===2 &&
            <div>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Throw a ball" Q={this.state.Q11} variable="Q11"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Run one block (about 100m)" Q={this.state.Q12} variable="Q12"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Take food out of the refrigerator" Q={this.state.Q13} variable="Q13"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Make your bed" Q={this.state.Q14} variable="Q14"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Put on socks (pantyhose)" Q={this.state.Q15} variable="Q15"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Bend over to clean the bathtub" Q={this.state.Q16} variable="Q16"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Move a chair" Q={this.state.Q17} variable="Q17"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Pull or push heavy doors" Q={this.state.Q18} variable="Q18"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Carry two bags of groceries" Q={this.state.Q19} variable="Q19"/>
                <RadioButton state={this.state} handleChange={this.handleChange} question="Lift and carry a heavy suitcase" Q={this.state.Q20} variable="Q20"/>
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
export default withRouter(QuebecModule)
